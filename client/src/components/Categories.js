import { useState } from 'react'

export function SelectCategory() {
   const [categoryState, setCategoryState] = useState("Category")

   return (
      <div className="header"> What makes Calgary 
         <select
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
         </select> ?
      {categoryState, []}
</div>
   )
}