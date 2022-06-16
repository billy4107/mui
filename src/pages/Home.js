import { Nav } from "../components/Nav";
import { SideBar } from "../components/SideBar";
import { useSelector } from "react-redux";

function Home() {
  const switchValue = useSelector((state) => state.side.active);
  return (
    <div className="App">
      <div className="nav">
        <Nav />
      </div>
      
      {switchValue ? <div className="side">
        <SideBar />
      </div> : ''}
          </div>
  );
}

export default Home;
