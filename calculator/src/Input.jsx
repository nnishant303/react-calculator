import Styles from "./Input.module.css"

const input = ({display})=>{
    return <>
    
    <input 
    type="text" 
    className={Styles.Input}
    readOnly
    value={display}
    />
    
    </>
}

export default input;