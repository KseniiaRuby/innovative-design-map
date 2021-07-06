import './App.css'

import { SelectCategory } from './components/Categories'
import Map from './components/Map/Map'
import MarkPointOnMap from './components/MarkPointOnMap'



function App() {
   return (
      <div>
         <div className="App">
            <header className="App-header">
            </header>
            <SelectCategory />
            {/* <Map /> */}
            <MarkPointOnMap />

         </div>
      </div>
   )
}

export default App