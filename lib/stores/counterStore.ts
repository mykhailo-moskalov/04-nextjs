import { create } from "zustand";

type CounterStore = {
  count: number;
  lang: string;
  increment: () => void;
  setLang: (lang: string) => void;
};

export const useStore = create<CounterStore>()((set) => ({
  count: 0,
  lang: "en",
  increment: () => set((state) => ({ count: state.count + 1 })),
  setLang: (lang: string) => set({ lang }),
}));
