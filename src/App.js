import "./App.css";
import Header from "./Components/Header";
import Headlines from "./Components/Headlines";
import Navbar from "./Components/Navbar";
import NewsBox from "./Components/NewsBox";
import Slides from "./Components/Slides";

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Headlines />
      <Slides className="slides" />
      <NewsBox />
    </div>
  );
}

export default App;
