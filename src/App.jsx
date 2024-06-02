import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";
import Createpost from "./component/Createpost";
import PostList from "./component/PostList";
import PostListProvider from "./store/post-list-store";
function App() {
  let [contentShow, setContentShow] = useState(true);
  const takeValueOfSideBar = (value) => {
    setContentShow(value);
  };
  return (
    <PostListProvider>
      <div className="app-content d-flex">
        <Sidebar takeValueOfSideBar={takeValueOfSideBar}></Sidebar>
        <div className="content d-flex flex-column justify-content-between">
          <Header></Header>

          {contentShow ? <PostList /> : <Createpost />}
          {/* <Createpost></Createpost> */}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
