import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      {/* Header */}
      <Header/>
      {/* main */}
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner/>
        {/* ProductFeed */}
        <ProductFeed products={products}/>
      </main>
    </div>
  );
}

// getServerSideProps will create a server inbetween our browser and api.. this is server side rendering
// so we are getting all the data need from the api and storing it in the server 
// to get the value from the server, we are using props as return
// which we are using in destructured from in our Home function above
export async function getServerSideProps(context){
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res)=>res.json()
  );
  return {
    props: {
      products,
    }
  }
}
