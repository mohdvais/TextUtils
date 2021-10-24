import React, {useState} from 'react';



export default function TextForm(props) {
    const handleUpclick = ()=>{
        // console.log("Uppercase was clicked:" + text);
        // setText("You have clicked on handleUpclick")
        let newText =text.toUpperCase();
        setText(newText)

    }

    const handleLoclick = ()=>{
        // console.log("Uppercase was clicked:" + text);
        // setText("You have clicked on handleUpclick")
        let newText =text.toLowerCase();
        setText(newText)

    }

    const handleClearClikc =()=> {
        let newText = '';
        setText(newText)
    }

    const handleOnChange =(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here");
    // text= "new text"; //Wrong way to change the state
    // setTeext("new text"); //Correct way to change the state
    return(
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to upercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClikc}>Clear Text</button>

            <div className="container my-3">
                <h3>This is your text Summary</h3>
                <p> {text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minuts read</p>
                <h2>Priview</h2>
                <p>{text}</p>
            </div>
        </div>
        
    );
}