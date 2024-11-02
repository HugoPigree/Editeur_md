import { useState, useEffect } from 'react'

function Blague (){
    const [blague, setBlague] = useState([])

    function fetchCitation(){
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then((res) => (res.json()))
        .then((data) => setBlague(data))
        .catch((err) => console.error(err))
    }

useEffect(() =>{
    fetchCitation()
}, []);

return(
    <div>
        <h1> Blague du jour</h1>
        <li> Type  : {blague.type} </li>
        <li>  Setup : {blague.setup} </li>
        <li> Punchline : {blague.punchline} </li>

    </div>
)

}
export default Blague