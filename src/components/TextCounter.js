import {useState} from "react";

function TextCounter() {
    const [val,setVal]=useState('')
    const [word,setWord]=useState(0)

    const handleChange = (e) => {
        const data = e.target.value.split(' ').length
        setVal(e.target.value)
        setWord(data)
    }
 return(
    <div>
        <h2>Responsive Paragraph Word Counter</h2>
        <input value = {val} onChange={(e)=>handleChange(e)} />
        <h4>Word count: {word}</h4>
    </div>
 )
}

export default TextCounter;