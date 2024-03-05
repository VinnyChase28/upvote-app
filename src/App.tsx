import UpvotesList from "./components/UpvoteList";
import PostList from "./components/PostList";
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
        <UpvotesList posts={posts} />
        <PostList posts={posts} />
      </header>
    </div>
  );
}

export default App;
