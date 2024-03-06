import UpvotesList from "./components/UpvoteList/UpvoteList";
import PostList from "./components/PostList/PostList";
import ArrowList from "./components/ArrowList/ArrowList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
          <ArrowList />
        </div>
        <div className="flex justify-center items-center min-h-screen p-4">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-start w-full max-w-6xl">
            <div className="md:w-1/2 p-4 bg-white rounded-lg shadow-md">
              <PostList />
            </div>
            <div className="md:w-1/2 p-4 bg-white rounded-lg shadow-md">
              <p className="text-lg font-semibold mb-4">Upvoted Posts</p>
              <UpvotesList />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
