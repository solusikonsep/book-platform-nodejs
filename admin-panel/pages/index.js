import { useEffect, useState } from "react";

export default function Home({ result }){
  const [title, setTitle] = useState("Penulis");
  const [count, setCount] = useState(0);

  useEffect(()=> {
    setTitle("Beranda")
  }, []);

  // const getData = async () => {
  //   console.log("Calling API");
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  //   const result  = await response.json();
  //   console.log("Ini adalah hasil dari pemanggilan API", result);


  // }

  // useEffect(getData, []);

  return (
    <>
    <div>Ini adalah halaman : {title}</div>
    <div>Ini adalah counter : {count}</div>
    <div>{result.body}</div>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export async function getServerSideProps(){
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const result  = await response.json();
  return {
    props: { result }
  }
}
