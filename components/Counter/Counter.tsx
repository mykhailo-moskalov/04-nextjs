"use client";

import { useStore } from "@/lib/stores/counterStore";

export const Counter = () => {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);

  return <button onClick={increment}>Click: {count}</button>;
};
