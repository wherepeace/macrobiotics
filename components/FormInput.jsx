import styles from "../styles/FormInput.module.css";
import { useState } from "react";


const FormInput = (props) => {
    const {placeholder, label, erroMessager, onChange, id, ...inputProps} =  props ;
    const [focused, setFocused] = useState(false)

    const handleBlur = () => {
        setFocused(!focused)
    }
    return (
        <div className={styles.formInput}>
        
            <input  {...inputProps}  onChange={onChange} onBlur={handleBlur} focused={focused.toString()}/>
            <label htmlFor={inputProps.name} className={styles.label}>
                 <span className={styles.containerName}>{label}</span>    
            </label>
            <span className={styles.erroMessager}>{erroMessager}</span>
            
        </div>
    )
}

export default FormInput;
