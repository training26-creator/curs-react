import { create } from "zustand";

export const useVotesStore = create((set) => ({
    votes: 0, // 'light' | 'dark'
    upVote: () => set((state) => ({ votes: state.votes + 1 })),
    downVote: () => set((state) => ({ votes: state.votes - 1 })),
}));