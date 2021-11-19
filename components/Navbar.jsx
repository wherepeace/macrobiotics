import styles from "../styles/Navbar.module.css";
import Link from "next/link" ;
import {useState} from "react";


const Navbar = () => {
    const [open, setOpen] =  useState(false)
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link href="/">
                    Vườn Rừng
                </Link>
            </div>
            <div className={styles.menuIcon } 
                 onClick={()=> {setOpen(!open)
                 document.body.style.overflowY = 'hidden';
               }}>
                  <div className={styles.line}></div>
                  <div className={styles.line}></div>
                  <div className={styles.line}></div>
              </div>
              <div className={styles.overlay}  style={{right : open ? "0px" : "-100%" } } 
                    onClick={()=>{setOpen(!open)
                    document.body.style.overflowY = 'auto';
               }}>
                <ul className={styles.menu} onClick={(e)=>e.stopPropagation()}>
                   <Link href="/order">
                    <li className={styles.item}> Đặt hàng </li>
                    </Link>
                    <li className={styles.item}> Về Chúng Tôi </li>
                    <li className={styles.item}> Sản Phẩm </li>
                    <li className={styles.item}> Video </li>
                </ul>
              </div>
        </div>
    )
}

export default Navbar
