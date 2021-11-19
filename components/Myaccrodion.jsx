import { useState } from "react";
import styles from "../styles/Question.module.css";
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

const Myaccrodion = ({title, desc}) => {

    const [show, setShow] = useState(false)
    return (
        <div  className={styles.containerQuestion} >
           <div className={styles.header}  onClick={()=>setShow(!show)}>
              {show ? <ClearIcon className={styles.icon}/> :  <AddIcon  className={styles.icon}/> } 
              <h5 className={styles.title}>{title}</h5>
           </div>
            <div style={{ height:  show ? "150px" : "0px",
                          backgroundColor:  show ? "rgb(230,239,235)" : "rgb(245, 243, 236)"}} className={styles.content} >
                    {desc}
            </div>
        </div>
    )
}

export default Myaccrodion
