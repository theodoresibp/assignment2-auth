'use client';

import React, { useState } from 'react';

export function CounterApp() {
  const [counterState, setCounterState] = useState(0);

  function handleBtnMin() {
    if (counterState === 0) {
      // eslint-disable-next-line no-alert
      alert('Counter already zero!');
      return;
    }

    setCounterState(counterState - 1);
  }

  function handleBtnAdd() {
    setCounterState(counterState + 1);
  }
  return (
    <div>
      <div className="relative">
        <div className="absolute -inset-0.5 m-auto flex h-[330px] w-[330px] animate-pulse bg-pink-500 blur" />
        <div className="relative m-auto flex h-[300px] w-[300px] flex-col items-center justify-between rounded bg-slate-500 p-8">
          <h2>Counter App</h2>
          <h1 className="text-5xl text-white">{counterState}</h1>
          <div className="flex w-full justify-between gap-6">
            <button
              type="button"
              className="h-[50px] w-full rounded border-2 bg-red-400 font-bold transition-transform duration-300 hover:scale-110 hover:border-slate-800 hover:bg-white hover:text-red-400"
              id="btnMin"
              onClick={handleBtnMin}
            >
              Min
            </button>

            <button
              type="button"
              className="h-[50px] w-full rounded border-2 bg-amber-400 font-bold transition-transform duration-300 hover:scale-110 hover:border-slate-800 hover:bg-white  hover:text-amber-400"
              id="btnAdd"
              onClick={handleBtnAdd}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
