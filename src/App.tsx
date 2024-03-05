import UpvotesList from "./components/UpvoteList/UpvoteList";
import PostList from "./components/PostList/PostList";
import type { Post } from "./types";
import "./App.css";

const posts: Post[] = [
  { id: "1", title: "Post 1 Title", description: "Post 1 Description" },
  { id: "2", title: "Post 2 Title", description: "Post 2 Description" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex justify-between items-start w-full max-w-4xl p-4">
            <div className="w-1/2 p-4">
              <PostList posts={posts} />
            </div>
            <div className="w-1/2 p-4">
              <p>Upvoted posts</p>
              <UpvotesList posts={posts} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
