
import '../styles/Home.module.css'
import Intro from '../components/Intro'
import Service from '../components/Service'
import { data } from '../data'
import Slide from '../components/Slide'
import NavbarLeft from "../components/NavbarLeft"
import Question from '../components/Question'

export default function Home({services}) {
      
  
  return (
    <div>
        <Slide services={services}/>
        <Service services={services}/>
        <Question />
        <Intro/>
        <NavbarLeft/>
    </div>
  )
}

// Get Props - Axios API 
export const getStaticProps = async () =>{
       const services = data; 
       return {
         props: {services},
       };
};