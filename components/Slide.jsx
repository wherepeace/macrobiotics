import styles from "../styles/Slide.module.css";
import { useState, useEffect } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Slide = ({services}) => {
   const [currentIndex,  setcurrenIndex] = useState(0)
   const handleSlide = (way) =>{
       way === "previ" && setcurrenIndex(currentIndex > 1 ? currentIndex - 1 : services.length - 1  ) 
       way === "next" && setcurrenIndex(currentIndex < services.length- 1 ? currentIndex + 1 : 0) 
   }
   useEffect(() => {
        const timeID = setTimeout(()=>{
            handleSlide("next")
        }, 6000)
       return ()=>{
            clearTimeout(timeID)
       }
   }, [currentIndex])
     
    return (
        <div className={styles.container}>
            <div className={styles.arrowPrev} onClick={()=> handleSlide("previ")}>
            <ArrowBackIosIcon className={styles.icon}/>
            </div>
                    <div className={styles.slideContainer}>
                         <div className={styles.wrapper} style={{transform :`translate(-${currentIndex*80}vw)`}}>
                            { services.map((service)=>(
                                <div className={styles.slide} key={service.id} style={{backgroundColor: `${service.bg}`}}>
                                    <div className={styles.imgContainer}>
                                        <img src={service.img} className={styles.img} alt="" />
                                    </div>
                                    <div className={styles.infoContainer}>
                                        <div className={styles.title}>{service.title}</div>
                                        <div className={styles.desc}>
                                            {service.desc}
                                        </div>
                                        <button className={styles.button}> Messenger !</button>
                                    </div>
                                </div>
                            ))}
                      </div>
                </div>
            <div className={styles.arrowNext} onClick={()=> handleSlide("next")}>
            <ArrowForwardIosIcon  className={styles.icon}/>
            </div>
        </div>
    )
}

export default Slide
