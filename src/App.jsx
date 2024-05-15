import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";
import Createpost from "./component/Createpost";
import Post from "./component/Post";
function App() {
  let [contentShow, setContentShow] = useState(false);
  const takeValueOfSideBar = (value) => {
    setContentShow(value);
  };
  return (
    <>
      <div className="app-content d-flex">
        <Sidebar takeValueOfSideBar={takeValueOfSideBar}></Sidebar>
        <div className="content d-flex flex-column justify-content-between">
          <Header></Header>
          {contentShow ? <Post /> : <Createpost />}
          {/* <Createpost></Createpost> */}
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
