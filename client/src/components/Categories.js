import { useState } from 'react'
import '../styles/Categories.css'

export function SelectCategory() {
   const [categoryState, setCategoryState] = useState("Category")

   return (
      <div>
         <div className="header home-page"> What makes Calgary
            <br></br>
            <select
               style={{ fontSize: `0.3em` }}
               className="custom-select"
               value={categoryState}
               onChange={(e) => {
                  const selectedCategory = e.target.value
                  setCategoryState(selectedCategory)
               }}
            >
               <option value=""></option>
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
      </div>
   )
}