const App = () => {
    //Buttons
    const [buttonText1, setButtonText1] = React.useState('Loser')
    const [buttonText2, setButtonText2] = React.useState('Loser')
    const [buttonText3, setButtonText3] = React.useState('Click me!')
    const [buttonText4, setButtonText4] = React.useState('Loser')
    const [buttonText5, setButtonText5] = React.useState('Loser')

    const changeButton1 = (buttonText1) => {
        if (buttonText1 === 'Click me!') {
            setButtonText1('Loser')
            setButtonText5('Click me!')
        }
    }

    const changeButton2 = (buttonText2) => {
        if (buttonText2 === 'Click me!') {
            setButtonText2('Loser')
            setButtonText1('Click me!')
        }
    }

    const changeButton3 = (buttonText3) => {
        if (buttonText3 === 'Click me!') {
            setButtonText3('Loser')
            setButtonText4('Click me!')
        }
    }

    const changeButton4 = (buttonText4) => {
        if (buttonText4 === 'Click me!') {
            setButtonText4('Loser')
            setButtonText2('Click me!')
        }
    }

    const changeButton5 = (buttonText5) => {
        if (buttonText5 === 'Click me!') {
            setButtonText5('Loser')
            setButtonText3('Click me!')
        }
    }

    //Counter
    let [count, setCount] = React.useState(0)

    function increment(){
        setCount(count += 1)
    }

    function decrement(){
        setCount(count -= 1)
    }

    return (
    <div id="app-container" style= {{backgroundColor: "dimgray", width: "650px", padding: "10px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", borderRadius: "10px", display: "grid", gridTemplateColumns: "1fr 1fr"}}>   
        <div className="left-side" style={{border: "2px dashed lightgrey", borderRadius: "10px", margin:"10px", padding:"10px", display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "space-evenly", alignItems: "stretch"}}>
            <button className="text-button" onClick={() => changeButton1(buttonText1)} style={buttonText1 === 'Click me!' ? {backgroundColor:"seagreen"} : {backgroundColor: "indianred"}}>{buttonText1}</button>
            <button className="text-button" onClick={() => changeButton2(buttonText2)} style={buttonText2 === 'Click me!' ? {backgroundColor:"seagreen"} : {backgroundColor: "indianred"}}>{buttonText2}</button>
            <button className="text-button" onClick={() => changeButton3(buttonText3)} style={buttonText3 === 'Click me!' ? {backgroundColor:"seagreen"} : {backgroundColor: "indianred"}}>{buttonText3}</button>
            <button className="text-button" onClick={() => changeButton4(buttonText4)} style={buttonText4 === 'Click me!' ? {backgroundColor:"seagreen"} : {backgroundColor: "indianred"}}>{buttonText4}</button>
            <button className="text-button" onClick={() => changeButton5(buttonText5)} style={buttonText5 === 'Click me!' ? {backgroundColor:"seagreen"} : {backgroundColor: "indianred"}}>{buttonText5}</button>
        </div>
        <div className="right-side"  style={{border: "2px dashed lightgrey", borderRadius: "10px", margin:"10px", position:"relative" }}>
            <div className="counter" style={{position:"absolute", top: "50%", left: "50%", transform:"translate(-50%, -50%)", width:"200px"}}>
              <button className="counter-min" onClick={decrement}>-</button>
              <input className="counter-input" type="text" value={count} pattern="[-999-999]" ></input>
              <button className="counter-plus" onClick={increment}>+</button>
            </div>
        </div>
    </div>    
    )
}