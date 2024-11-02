import { useState, useEffect } from 'react'

function Citation (){
    const [citation, setCitation] = useState([])

    function fetchCitation(){
        fetch('https://api.adviceslip.com/advice')
        .then((res) => (res.json()))
        .then((data) => setCitation(data.slip))
        .catch((err) => console.error(err))
    }

useEffect(() =>{
    fetchCitation()

}, []);

return(
    <div>
        <h1> Citation</h1>
        <li> {citation.advice} </li>
    </div>
)

}
export default Citation