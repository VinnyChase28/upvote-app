import { create } from "zustand";
import { persist } from "zustand/middleware";


interface Post {
  id: string;
  title: string;
  description: string;
}

interface PostState {
  posts: Post[];
  addPost: (newPost: Post) => void;
  removePost: (postId: string) => void;
  updatePost: (updatedPost: Post) => void;
}

//would normally fetch and sync with store
export const usePostStore = create<PostState>()(
  persist(
    (set) => ({
      posts: [
        {
          id: "1",
          title: "Sunny Day Musings",
          description: "Reflections on a bright and cheerful day.",
        },
        {
          id: "2",
          title: "Tech Innovations",
          description:
            "Exploring the latest in technology and its impact on society.",
        },
        {
          id: "3",
          title: "Culinary Adventures",
          description: "A journey through diverse cuisines and flavors.",
        },
        {
          id: "4",
          title: "Nature's Wonders",
          description:
            "Discovering the beauty and mysteries of the natural world.",
        },
      ],
      addPost: (newPost) =>
        set((state) => ({
          posts: [...state.posts, newPost],
        })),
      removePost: (postId) =>
        set((state) => ({
          posts: state.posts.filter((post) => post.id !== postId),
        })),
      updatePost: (updatedPost) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === updatedPost.id ? updatedPost : post
          ),
        })),
    }),
    {
      name: "post-storage", 
    }
  )
);

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
          const newState = listState.length > 0 ? !listState[0] : true;
          const updatedList = listState.map(() => newState);
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
          const newState = listState.length > 0 ? listState[0] : false;
          return {
            lists: {
              ...state.lists,
              [listId]: [...listState, newState],
            },
          };
        }),
      removeArrow: (listId: string) =>
        set((state) => {
          const listState = state.lists[listId] || [];
          listState.pop(); 
          return {
            lists: {
              ...state.lists,
              [listId]: listState,
            },
          };
        }),
    }),
    {
      name: "arrow-up-list-storage",
    }
  )
);


