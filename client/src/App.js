// import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SelectCategory } from "./components/Categories";
import MarkPointOnMap from "./components/MarkPointOnMap";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={SelectCategory} />
          <Route path="/MarkPointOnMap" component={MarkPointOnMap} />
        </Switch>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
