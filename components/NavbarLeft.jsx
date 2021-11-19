import styles from "../styles/NavbarLeft.module.css" ;
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {useState} from "react";
import Link from "next/link"

const NavbarLeft = () => {
    const [actived, setActived] = useState({a:true, b:false, c:false})
    const handleActive= (index)=> {
        index === 1 && setActived({a:true, b:false, c:false}) 
        index === 2 && setActived({a:false, b:true, c:false}) 
        index === 3 && setActived({a:false, b:false, c:true}) 
    }
    return (
        <div className={styles.container}>
            <ul className={styles.menu}>
                <li className={actived.a ? styles.active : styles.item  } onClick={()=> handleActive(1)} >
                    <Link href="/">
                    <AccountBalanceIcon className={styles.icon}/>
                    </Link>
                </li>
                <li className={actived.b ? styles.active : styles.item  } onClick={()=> handleActive(2)}>
                    <Link href="/order">
                    <ProductionQuantityLimitsIcon className={ styles.icon}/>
                    </Link>
                </li>
                <li className={actived.c ? styles.active : styles.item  } onClick={()=> handleActive(3)}>
                <Link href="">
                <YouTubeIcon className={styles.icon}/>
                </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavbarLeft
