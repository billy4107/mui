import { Nav } from "../components/Nav";
import { SideBar } from "../components/SideBar";
import { useSelector } from "react-redux";

function Home() {
  const switchValue = useSelector((state) => state.toggle.active);
  console.log(switchValue);

  return (
    <div className="App">
      <div className="nav">
        <Nav />
      </div>
      <div className="side">
          <SideBar />
        </div>
      {!switchValue ? (
        <p>qweqwe</p>
      ) : (
        <p>asdsd</p>
      )}
    </div>
  );
}

export default Home;
