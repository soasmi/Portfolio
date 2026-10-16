'use client';

import React from 'react';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full">
      {children}
    </div>
  );
}