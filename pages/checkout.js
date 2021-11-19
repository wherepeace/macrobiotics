import styles from "../styles/Checkout.module.css"
import Image from "next/image"

const checkout = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.infoUser}>
                    <h3 className={styles.title}> Quý khách hàng đã đặt hàng thành công</h3>
                    <p> <b>Nhân viên </b> sẽ liên lạc cho quý trong thời gian sớm nhất!</p>
                    <span><b> Vui lòng bật máy 24/7 </b></span>
                </div>
                <div className={styles.imgContainer}>
                    <Image 
                    src="/img/success.png"
                    alt="" 
                    width= "300%" 
                    height="300%" 
                    />
                </div>
            </div>
        </div>
    )
}

export default checkout