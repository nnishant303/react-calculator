import Styles from "./Button.module.css";
const button = ({keys , SetDisplay })=>{

    const handle_button_click = (key)=>{
        
        SetDisplay((currentDisplay)=>{

            if(currentDisplay=== ''){
                if(key === "+" || key === "-" || key==="*" || key==="/"|| key==="=" || key==="C" || key==="DEL"){
                    return currentDisplay;
                }
               
            }
           else if(key=== "DEL"){
                let new_display = currentDisplay.slice(0,-1);
            return new_display;
            }

            else if(key=== "C"){
                return "";
            }

            else if( key=== "="){
                return eval(currentDisplay).toString();
            }
            currentDisplay += key;

            return currentDisplay;
        });
    }
    return <div className={Styles.Button_container}>
    
    {keys.map((key) => {
        return <button key={key} className= {Styles.Button} onClick={()=>handle_button_click(key)}>
            {key}
        </button>
    })}
    </div>
}

export default button