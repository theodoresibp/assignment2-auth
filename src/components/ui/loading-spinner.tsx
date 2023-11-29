'use client';

import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/25 backdrop-blur-sm">
      <div
        className="relative -right-[88px] h-24 w-24 rotate-[-360] animate-spin rounded-full border-4 border-dotted border-current border-white border-r-transparent align-[-0.125em] text-primary
      transition-transform duration-500 motion-reduce:animate-[spin_2.5s_linear_infinite]
      "
      />
      <div className="h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-yellow-600 border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_2.5s_linear_infinite] " />
      <div className="relative -left-[68px] h-14 w-14 -rotate-180 animate-spin  rounded-full border-4 border-solid border-blue-300 border-current border-r-transparent align-[-0.125em] text-primary transition-transform duration-300 motion-reduce:animate-[spin_2s_linear_infinite]" />
      <div className="relative -left-[111px] h-8 w-8 animate-spin rounded-full  border-4 border-dashed border-current border-pink-500 border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1s_linear_infinite]" />

      <h1 className="animate-pulse text-2xl font-bold text-amber-600">Loading...</h1>
    </div>
  );
}
