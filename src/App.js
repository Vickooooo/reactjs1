import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Action from "./components/Action";
import Multiverse from "./components/Multiverse";
import "./style/landingPage.css";

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="action">
        <Action />
      </div>

      <div className="multiverse">
        <Multiverse />
      </div>
    </div>
  );
}

export default App;
