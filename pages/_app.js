import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.css';
import Loading from "../components/Loading";
import { useState, useEffect} from "react";
import Router from 'next/router';


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false) ;

  useEffect(() => {
        Router.events.on("routeChangeStart", () => {
          setLoading(true)
        })
        Router.events.on("routeChangeComplete", ()=>{
          setLoading(false)
        })
        Router.events.on("routeChangeError", ()=>{
        setLoading(false)
        })
return () => {
        Router.events.off("routeChangeStart", () => {
          setLoading(true)
        })
        Router.events.off("routeChangeComplete", ()=>{
          setLoading(false)
        })
        Router.events.off("routeChangeError", ()=>{
        setLoading(false)
        })
}
  }, [loading])

  return (
    <div>
      <Head>
       <meta name="viewport" content="width=device-width"/>
        <title>Vườn Rừng</title>
        <meta name="description" content="Sản Phẩm Vườn Rừng" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout> 
          {loading && <Loading/> }
   </div>
)
}

export default MyApp