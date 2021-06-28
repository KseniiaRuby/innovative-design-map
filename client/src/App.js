import './App.css'
import { SelectCategory } from './components/Categories'
import Map from './components/Map/Map'




function App() {
   return (
      <div>
         <div className="App">
            <header className="App-header">
            </header>
            <SelectCategory />
            <Map />

         </div>
      </div>
   )
}

export default App