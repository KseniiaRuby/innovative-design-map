import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Gateway } from "./pages/Gateway"
import Category from "./pages/Category"
import Map from "./pages/Map"
import ProjectPage from "./pages/ProjectPage/ProjectPage"
import ClassificationProvider from "./store/ClassificationProvider"
import ProjectProvider from "./store/ProjectProvider"
import GlossaryProvider from "./store/GlossaryProvider"

function App() {
   return (
      <ProjectProvider>
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
      </ProjectProvider>
   )
}

export default App
