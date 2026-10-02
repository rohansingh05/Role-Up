'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '../../lib/context/AppContext';
import { Sidebar } from '../../components/Sidebar';
import {
  Users2,
  Search,
  MessageSquare,
  Heart,
  Bookmark,
  Plus,
  Send,
  Sparkles,
  Share2,
  Tag,
  CheckCircle2,
  Filter,
  X
} from 'lucide-react';
import { CommunityPost } from '../../lib/types';

export default function CommunityPage() {
  const { posts, toggleLikePost, toggleBookmarkPost, addComment, addPost, user } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCommentPostId, setActiveCommentPostId] = useState<string | null>(null);
  const [commentText, setCommentText] = useState<string>('');

  // New Post Modal State
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newCategory, setNewCategory] = useState<CommunityPost['category']>('DSA');
  const [newTags, setNewTags] = useState('');

  const categories: ('All' | CommunityPost['category'])[] = [
    'All',
    'DSA',
    'Web Development',
    'AI/ML',
    'Data Science',
    'Cybersecurity',
    'DevOps',
    'Internships',
    'Resume',
    'Interviews',
    'Career Advice'
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    addPost({
      author: {
        name: user.name,
        avatar: user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80',
        college: user.college,
        role: `Targeting ${user.targetRole.replace('-', ' ')}`
      },
      title: newTitle,
      content: newContent,
      category: newCategory,
      tags: newTags.split(',').map(t => t.trim()).filter(Boolean)
    });

    setNewTitle('');
    setNewContent('');
    setNewTags('');
    setIsNewPostOpen(false);
  };

  const handleAddComment = (postId: string) => {
    if (!commentText.trim()) return;
    addComment(postId, commentText);
    setCommentText('');
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row bg-slate-950 text-slate-100">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Users2 className="w-4 h-4" />
              <span>Peer-to-Peer Student Network</span>
            </div>
            <h1 className="text-3xl font-black text-white">
              CSE Student Community
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Ask questions, discuss algorithmic patterns, share real internship experiences, and get resume reviews from ambitious peers across universities.
            </p>
          </div>

          <button
            onClick={() => setIsNewPostOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-2 self-start sm:self-auto transition-all shadow-md"
          >
            <Plus className="w-4 h-4" />
            <span>Start Discussion</span>
          </button>
        </div>

        {/* Filter Bar & Search */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            
            {/* Category Pills */}
            <div className="flex items-center space-x-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative shrink-0 sm:w-64">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search discussions or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

          </div>
        </div>

        {/* Discussions Feed */}
        <div className="space-y-6">
          {filteredPosts.map(post => {
            const isCommentBoxOpen = activeCommentPostId === post.id;

            return (
              <div
                key={post.id}
                className="p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all shadow-lg space-y-4"
              >
                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full border border-indigo-500/40 object-cover"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-bold text-white">{post.author.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          {post.author.college}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400">{post.author.role}</p>
                    </div>
                  </div>

                  <span className="text-[11px] text-slate-500 font-medium">
                    {post.createdAt}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-950/70 text-indigo-300 border border-indigo-800/60">
                    {post.category}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                    {post.content}
                  </p>
                </div>

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Post Footer Actions: Like, Comment, Bookmark */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-4">
                    
                    {/* Like Button */}
                    <button
                      onClick={() => toggleLikePost(post.id)}
                      className={`flex items-center space-x-1.5 transition-colors ${
                        post.isLikedByUser ? 'text-rose-400 font-bold' : 'text-slate-400 hover:text-rose-400'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${post.isLikedByUser ? 'fill-rose-400' : ''}`} />
                      <span>{post.likesCount}</span>
                    </button>

                    {/* Comment Toggle */}
                    <button
                      onClick={() => setActiveCommentPostId(isCommentBoxOpen ? null : post.id)}
                      className="flex items-center space-x-1.5 text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{post.comments.length} Comments</span>
                    </button>

                    {/* Bookmark Toggle */}
                    <button
                      onClick={() => toggleBookmarkPost(post.id)}
                      className={`flex items-center space-x-1.5 transition-colors ${
                        post.isBookmarkedByUser ? 'text-amber-400 font-bold' : 'text-slate-400 hover:text-amber-400'
                      }`}
                    >
                      <Bookmark className={`w-4 h-4 ${post.isBookmarkedByUser ? 'fill-amber-400' : ''}`} />
                      <span>{post.isBookmarkedByUser ? 'Saved' : 'Save'}</span>
                    </button>

                  </div>

                  <span className="text-[11px] text-slate-500">
                    RoleUp Verified Discussion
                  </span>
                </div>

                {/* Comments Section */}
                {isCommentBoxOpen && (
                  <div className="pt-4 border-t border-slate-800/80 space-y-3 bg-slate-950/40 p-4 rounded-xl">
                    <h4 className="text-xs font-bold text-slate-300">
                      Comments ({post.comments.length})
                    </h4>

                    {/* Comments List */}
                    <div className="space-y-2.5">
                      {post.comments.map(comm => (
                        <div key={comm.id} className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-white">{comm.author.name} ({comm.author.college})</span>
                            <span className="text-[10px] text-slate-500">{comm.createdAt}</span>
                          </div>
                          <p className="text-slate-300 leading-relaxed text-[11px]">{comm.content}</p>
                        </div>
                      ))}
                    </div>

                    {/* Add Comment Input */}
                    <div className="flex items-center space-x-2 pt-2">
                      <input
                        type="text"
                        placeholder="Write a constructive reply..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleAddComment(post.id);
                        }}
                        className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                      />
                      <button
                        onClick={() => handleAddComment(post.id)}
                        className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1 transition-colors"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Reply</span>
                      </button>
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Modal: Create New Post */}
        {isNewPostOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-2">
                  <Users2 className="w-5 h-5 text-indigo-400" />
                  <h3 className="text-base font-bold text-white">Create New Discussion Post</h3>
                </div>
                <button
                  onClick={() => setIsNewPostOpen(false)}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreatePost} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">Post Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. How to approach dynamic programming for Amazon OA?"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1 font-semibold">Category</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
                    >
                      {categories.filter(c => c !== 'All').map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1 font-semibold">Tags (comma separated)</label>
                    <input
                      type="text"
                      placeholder="LeetCode, DP, Amazon, Internship"
                      value={newTags}
                      onChange={(e) => setNewTags(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">Content</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Share context, code snippets, or specific questions..."
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-xs"
                  />
                </div>

                <div className="flex items-center justify-end space-x-2 pt-2 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setIsNewPostOpen(false)}
                    className="px-4 py-2 rounded-xl text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-md transition-colors"
                  >
                    Publish Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
