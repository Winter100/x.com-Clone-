import { create } from "zustand";

interface State {
  content: string;
  upDateContentName: (content: State["content"]) => void;
}

export const useUpdateContentName = create<State>((set) => ({
  content: "추천",

  upDateContentName: (contentName) => set(() => ({ content: contentName })),
}));
