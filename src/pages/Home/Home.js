import React from "react"
import Cover from "./Cover/Cover"
import TopProphets from "./TopProphets/TopProphets"
import TopPredictions from "./TopPredictions/TopPredictions"
import "./Home.css"


export const Home = () => {   
   return (
      <div className="Home">
         <Cover />
         <TopProphets />
         <TopPredictions />
      </div>
   )
}
