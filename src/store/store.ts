import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UpvoteState {
  upvotes: { [postId: string]: boolean };
  toggleSelected: (postId: string) => void;
}

export const useUpvoteStore = create<UpvoteState>()(
  persist(
    (set) => ({
      upvotes: {}, // Empty object to start
      toggleSelected: (postId: string) =>
        set((state) => ({
          upvotes: {
            ...state.upvotes,
            [postId]: !state.upvotes[postId],
          },
        })),
    }),
    {
      name: "upvote-storage",
    }
  )
);
