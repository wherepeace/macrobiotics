
import styles from "../styles/Intro.module.css"
import Image from "next/image"
import Circle from "./Circle"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Intro = () => {
    return (
      
        <div className={styles.container}>
               <Circle background="#161e2a" bottom="-60vh" right="-60vh" />
               <div className={styles.left}>
              
                        <h1 className={styles.title}> 
                        <span className={styles.brand}>VƯỜN RỪNG </span> <span className={styles.brandtitle}> Đại lý cung cấp các sản phẩm </span>
                        </h1>
                        <p className={styles.desc}>
                         Mang lại sức khỏe tốt nhất cho khách hàng, 
                         sản phẩm được trồng thuận tự nhiên, hoàn toàn 100% với phương pháp
                         thủ công. Chúng tôi tự tin mang đến sản phẩm tốt nhất để phục quí 
                         khách hàng. 
                        </p>
                        <button className={styles.button}>CHI TIẾT ...<DoubleArrowIcon className={styles.icon}/> </button>
               </div>
               <div className={styles.right}>
                       <Image src="/img/logo.png" 
                       alt="" 
                       width= "160%" 
                       height="160%" 
                         />
               </div>
        </div>
    )
}

export default Intro

