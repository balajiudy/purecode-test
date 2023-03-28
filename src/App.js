import { BrowserRouter } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import "./App.css";
import SideMenu from "./components/SideMenu";
import Body from "./components/Body";

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <div className="bodyTabs">
        <SideMenu />
        <Body />
      </div>
    </BrowserRouter>
  );
}

export default App;
