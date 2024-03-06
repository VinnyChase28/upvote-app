import UpvotesList from "./components/UpvoteList/UpvoteList";
import PostList from "./components/PostList/PostList";
import ArrowList from "./components/ArrowList/ArrowList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="text-xl p-6">All functionality persists.</h1>
      <header className="App-header">
        <div className="flex justify-center p-4">
          <div className="max-w-2xl w-full">
            <ArrowList />
          </div>
        </div>
        <h1 className="text-xl p-6">Extras</h1>
        <div className="flex justify-center items-center p-4">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-start w-full max-w-6xl">
            <div className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow-md">
              <PostList />
            </div>
            <div className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow-md">
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
