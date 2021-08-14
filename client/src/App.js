import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Gateway } from "./pages/Gateway";
import Category from "./pages/Category";
import Map from "./pages/Map";
import ProjectPage from "./pages/ProjectPage";
import ClassificationProvider from "./store/ClassificationProvider";
import GlossaryProvider from "./store/GlossaryProvider";

function App() {
  return (
    <ClassificationProvider>
      <GlossaryProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Gateway} />
            <Route path="/Category" component={Category} />
            <Route path="/Map" component={Map} />
            <Route path="/ProjectPage/:id" component={ProjectPage} />
          </Switch>
        </Router>
      </GlossaryProvider>
    </ClassificationProvider>
  );
}

export default App;
