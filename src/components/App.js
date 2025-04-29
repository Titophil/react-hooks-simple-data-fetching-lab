// create your App component here
import React, {useState, useEffect} from "react";

function App(){
    const[dogImage, setDogImage]=useState(null)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response)=>response.json())
        .then((json)=>setDogImage(json.message))
    },[])

    return(
        <div>
            {dogImage?(
            <img src={dogImage} alt="A Random Dog"/>
 ):(
    <p>Loading...</p>
 )}
        </div>
    )
}

export default App

