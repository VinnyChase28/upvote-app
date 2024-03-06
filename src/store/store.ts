import { create } from "zustand";
import { persist } from "zustand/middleware";

//updoots
interface UpvoteState {
  upvotes: Record<string, boolean>;
  toggleSelected: (postId: string) => void;
}

export const useUpvoteStore = create<UpvoteState>()(
  persist(
    (set) => ({
      upvotes: {},
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

interface ArrowListState {
  lists: Record<string, boolean[]>; // Each key represents a list ID, each value is an array indicating the selection state of arrows in the list
  toggleArrow: (listId: string) => void; // Updated to no longer need the index parameter
  addArrow: (listId: string) => void;
}

export const useArrowUpStore = create<ArrowListState>()(
  persist(
    (set) => ({
      lists: {},
      toggleArrow: (listId: string) =>
        set((state) => {
          const listState = state.lists[listId] || [];
          const newState = listState.length > 0 ? !listState[0] : true; // Determine the new state based on the first arrow's current state, default to true if list is empty
          const updatedList = listState.map(() => newState); // Set all arrows in the list to the new state

          return {
            lists: {
              ...state.lists,
              [listId]: updatedList,
            },
          };
        }),
      addArrow: (listId: string) =>
        set((state) => {
          const listState = state.lists[listId] || [];
          const newState = listState.length > 0 ? listState[0] : false; // New arrows match the state of the first arrow in the list, default to false if list is empty
          return {
            lists: {
              ...state.lists,
              [listId]: [...listState, newState], // Add a new arrow with the determined state
            },
          };
        }),
    }),
    {
      name: "arrow-up-list-storage", // Unique name for localStorage key
    }
  )
);


