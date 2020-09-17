import React from "react"
import "./TopPredictions.css"
import PredictionCard from "./PredictionCard/PredictionCard"
//Button
import Button from "@material-ui/core/Button"

function TopPredictions(props) {
   
   return (
      <div className="TopPredictions">
         <div className="TitleAndButtons">
            <h2>Top Predictions</h2>
            <div className="TitleButtons">
               <Button variant="outlined">ALL</Button>
            </div>
         </div>
         <div className="PredictionCards">
            <PredictionCard />
            <PredictionCard />
            <PredictionCard />
            <PredictionCard />
            <PredictionCard />
            <PredictionCard />
         </div>
         <div className="TitleButtons">
            <Button variant="outlined">SHOW MORE</Button>
         </div>
      </div>
   )
}

export default TopPredictions
