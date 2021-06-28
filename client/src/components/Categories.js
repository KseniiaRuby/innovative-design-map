import { useState } from 'react'
import background from "./Calgary_DT.jpg"
import './Categories.css'

export function SelectCategory() {
   const [categoryState, setCategoryState] = useState("Category")

   return (
      <div className="header"> What makes Calgary
      <br></br>
         <select
            style={{ fontSize:`0.7em` }}
            className="custom-select"            
            value={categoryState}
            onChange={(e) => {
               const selectedCategory = e.target.value
               setCategoryState(selectedCategory)
            }}
         >
         <option value="green">green</option>
         <option value="resilient">resilient</option>
         <option value="adaptive">adaptive</option>
         <option value="clean">clean</option>
         <option value="vibrant">vibrant</option>
         <option value="safe">safe</option>
         <option value="healthy">healthy</option>
         <option value="smart">smart</option>
         <option value="accessible">accessible</option>
         </select> ?
      {categoryState, []}
</div>
   )
}