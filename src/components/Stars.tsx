import React from "react";

interface props{
  score: number
}

function Stars({score}: props){
  return (
      <div>
        {Array(score).fill(0).map((_, index)=>
          <img key={index} src="https://blackrabbit-frontend-assignment.azurewebsites.net/star.b544c3f2.svg" className="stars" alt=""/>
        )}

        {Array(5 - score).fill(0).map((_, index)=>
          <img key={index} src="https://blackrabbit-frontend-assignment.azurewebsites.net/star-hollow.ac2928eb.svg" className="stars" alt=""/>
        )}
    </div>
  )
}

export default Stars;