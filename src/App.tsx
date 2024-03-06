import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpvotesList from "./components/UpvoteList/UpvoteList";
import PostList from "./components/PostList/PostList";
import ArrowList from "./components/ArrowList/ArrowList";
import { Navbar } from "./components/Extras/Nav";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex justify-center p-4">
                <div className="max-w-2xl w-full">
                  <ArrowList />
                </div>
              </div>
            }
          />
          <Route
            path="/extras"
            element={
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
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
