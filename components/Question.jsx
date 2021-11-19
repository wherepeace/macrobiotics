import styles from "../styles/Question.module.css";
import { useState } from "react";
import Myaccrodion from "./Myaccrodion";



const contents = [
    {
        id:1,
        title: "Những câu hỏi hay về thực dưỡng",
        desc:  " Mang lại sức khỏe tốt nhất cho khách hàngsản phẩm được trồng thuận tự nhiên hoàn toàn 100% với phương pháp thủ công Chúng tôi tự tin mang đến sản phẩm tốt nhất để phục quíkhách hàng ",
    },
    {
        id:2,
        title: "Những câu hỏi hay về thực dưỡng",
        desc:  " Mang lại sức khỏe tốt nhất cho khách hàngsản phẩm được trồng thuận tự nhiên hoàn toàn 100% với phương pháp thủ công Chúng tôi tự tin mang đến sản phẩm tốt nhất để phục quíkhách hàng ",
    },
    {
        id:3,
        title: "Những câu hỏi hay về thực dưỡng",
        desc:  " Mang lại sức khỏe tốt nhất cho khách hàngsản phẩm được trồng thuận tự nhiên hoàn toàn 100% với phương pháp thủ công Chúng tôi tự tin mang đến sản phẩm tốt nhất để phục quíkhách hàng ",
    },
    {
        id:4,
        title: "Những câu hỏi hay về thực dưỡng",
        desc:  " Mang lại sức khỏe tốt nhất cho khách hàngsản phẩm được trồng thuận tự nhiên hoàn toàn 100% với phương pháp thủ công Chúng tôi tự tin mang đến sản phẩm tốt nhất để phục quíkhách hàng ",
    },
    {
        id:1,
        title: "Những câu hỏi hay về thực dưỡng",
        desc:  " Mang lại sức khỏe tốt nhất cho khách hàngsản phẩm được trồng thuận tự nhiên hoàn toàn 100% với phương pháp thủ công Chúng tôi tự tin mang đến sản phẩm tốt nhất để phục quíkhách hàng ",
    },
    {
        id:2,
        title: "Những câu hỏi hay về thực dưỡng",
        desc:  " Mang lại sức khỏe tốt nhất cho khách hàngsản phẩm được trồng thuận tự nhiên hoàn toàn 100% với phương pháp thủ công Chúng tôi tự tin mang đến sản phẩm tốt nhất để phục quíkhách hàng ",
    }
]
const idents = contents.map((data, index)=>{
    return data.id 
})
const Question = () => {

const [data, setdata] = useState(contents);

    return (
        <div className={styles.container}>
            <div className={styles.wrapperContainer}  >
                {data.map((item)=>{
                    const {id} = item ;
                    return (
                            <Myaccrodion key={id} {...item} />
                          )
                })}
            </div>
            
        </div>
    )
}

export default Question 
