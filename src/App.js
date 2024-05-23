import "./App.css";
import Header from "./components/Header";
import LeftViewContainer from "./components/LeftViewContainer";
import Signup from "./views/Signup";

function App() {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <LeftViewContainer />
        <Signup />
      </div>
    </>
  );
}

export default App;
