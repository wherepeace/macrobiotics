import styles from "../styles/Service.module.css";
import Link from "next/link";
import Image from "next/image";

const Service = ({services}) => {
    return (
        <div className={styles.container}>
           <div className={styles.title}>Sản phẩn của chúng tôi</div>
           <div className={styles.subtitle}>Chúng tôi cung cấp những sản phẩm và giải pháp để bảo vệ sức khỏe cho bạn và gia đình !</div>
           <div className={styles.services}>
               { services.map((service)=>(
                     <Link passHref key={service.id} href={`/products/${service.name}`} alt="">
                     <div className={styles.service}>
                         <div className={styles.desc}>{service.desc}</div>
                         <span className={styles.cat}>{service.title}</span>
                         <div className={styles.media}>
                              {service.video ? (<video loop autoPlay className={styles.video}/>) : 
                               ( 
                                <Image src={service.img} 
                                        width="100%"
                                        height="100%" 
                                        layout="responsive"
                                        objectFit="cover" 
                                        alt="" />
                               )
                              }       
                         </div>
                     </div>
                 </Link>
               ))}
           </div>
        </div>
    )
}

export default Service ;
