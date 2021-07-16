//  import './App.css'

import { SelectCategory } from './components/Categories'
// import Map from './components/Map/Map'
import MarkPointOnMap from './components/MarkPointOnMap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProjectPage from './pages/projectPage/ProjectPage'

function App() {
   return (
      <>
         <Router>
            <Navbar />
            <Switch>
               <Route path='/' exact component={SelectCategory} />
               <Route path='/MarkPointOnMap' component={MarkPointOnMap} />
               <Route path='/ProjectPage' component={ProjectPage} />
            </Switch>
         </Router>
      </>

   )
}

export default App