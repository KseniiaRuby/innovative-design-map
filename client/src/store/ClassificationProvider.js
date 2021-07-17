import ClassificationContext from "./ClassificationContext"
import { useState } from "react"

export default function ClassificationProvider({ children }) {
   const [gatewayWords, setgatewayWords] = useState(["green", "resilient", "adaptive", "clean", "efficient", "vibrant", "inclusive", "healthy", "active", "smart", "human-oriented", "dynamic", "accessible", "connected"])

   function getAllGatewayWords() {
      return gatewayWords
   }

   return (
      <ClassificationContext.Provider value={{ getAllGatewayWords }}>
         {children}
      </ClassificationContext.Provider>
   )
}