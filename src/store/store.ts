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


//store for the tech challenge
interface ArrowListState {
  lists: Record<string, boolean[]>;
  toggleArrow: (listId: string) => void;
  addArrow: (listId: string) => void;
  removeArrow: (listId: string) => void;
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
      removeArrow: (listId: string) =>
        set((state) => {
          const listState = state.lists[listId] || [];
          listState.pop(); // Remove the last arrow from the list
          return {
            lists: {
              ...state.lists,
              [listId]: listState,
            },
          };
        }),
    }),
    {
      name: "arrow-up-list-storage", // Unique name for localStorage key
    }
  )
);


