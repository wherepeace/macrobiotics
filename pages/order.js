
import { useState, useRef} from "react";
import emailjs from 'emailjs-com';
import Router from 'next/router'
import styles from "../styles/Order.module.css" ;
import Circle from "../components/Circle";
import FormInput from "../components/FormInput";


const order = () => {
  const form = useRef();

   const  [values, setValues] = useState({
       user_name : "",
       user_subject : "",
       user_phone:"",
       user_email : "",
       messager: ""
   })
   const inputs = [
       {
        id:1,
        name: "user_name",
        type:"text",
        placeholder:"Username",
        label:"username",
        erroMessager: "Vui lòng nhập họ và tên",
        required : true
       },
       {
        id:2,
        name: "user_subject",
        type:"text",
        placeholder:"Subject",
        label:"Subject",
        erroMessager: "Vui lòng nhập chủ đề",
        required : true
      },
      {
       id:3,
       name: "user_phone",
       type:"number",
       placeholder:"Phone",
       label:"Phone",
       erroMessager: "Vui lòng nhập số điện thoại",
       required : true
     },
     {
      id:4,
      name: "user_email",
      type:"text",
      placeholder:"Email",
      label:"Email",
      erroMessager: "Vui lòng nhập email",
      required : true
    },
    {
     id:5,
     name: "messager",
     type:"text",
     placeholder:"Messager",
     label:"Messager",
     erroMessager: "Vui lòng để lại tin nhắn",
     required : true
   }
]
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_f98awwz',
                         'template_1qof1gd',
                          form.current,
                         'user_O64xtvU9E8frWbJXifRwR')
        .then((result) => {
            console.log(result.text);
            Router.push("/checkout")
        }, (error) => {
            console.log(error.text);
        });
    }
    console.log(values)
    return (

        <div className={styles.container}>
                <Circle background="#333" top="-40vh" left="-30vh"/>
                <Circle background="rgb(75, 143, 75)" bottom="-40vh" right="-50vh"/>
            <div className={styles.wrapperForm}>
            <h1 className={styles.title}> Quý khách hàng vui lòng điền thông tin đặt hàng</h1>
                <form className={styles.form}  ref={form} onSubmit={handleSubmit}>
                    {inputs.map(input=> 
                        <FormInput  key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                    )}
                    <button className={styles.button}>Đặt hàng !</button>
                </form>
            </div>
        </div>
         
    )
}

export default order ;