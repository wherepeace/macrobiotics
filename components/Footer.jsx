import styles from "../styles/Footer.module.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from "next/link"

const Footer = () => {
    return (
        <div className={styles.container} >
          <h5 className={styles.title}> Copyright @ 2021 </h5>
           <Link href="https://www.facebook.com/profile.php?id=100054003760287">
             <FacebookIcon className={styles.icon}/>
           </Link>
        </div>
    )  
}

export default Footer ;