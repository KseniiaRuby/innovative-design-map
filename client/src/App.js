import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Gateway } from "./pages/Gateway";
import { Category } from "./pages/Category";
import MarkPointOnMap from "./components/MarkPointOnMap";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Gateway} />
          <Route path="/category" pages={Category} />
          <Route path="/MarkPointOnMap" component={MarkPointOnMap} />
        </Switch>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
