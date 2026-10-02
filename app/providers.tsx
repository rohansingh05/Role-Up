'use client';

import React, { useState } from 'react';
import { AppProvider } from '../lib/context/AppContext';
import { Navbar } from '../components/Navbar';
import { GlobalSearchModal } from '../components/GlobalSearchModal';

export function Providers({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <AppProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar onOpenSearch={() => setSearchOpen(true)} />
        <main className="flex-1 flex flex-col">{children}</main>
        <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      </div>
    </AppProvider>
  );
}
