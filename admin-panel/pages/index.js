import { useEffect, useState } from "react";

export default function Home(){
  const [title, setTitle] = useState("Penulis");

  useEffect(()=> {
    setTitle("Beranda")
  }, [])

  return (
    <div>Ini adalah halaman : {title}</div>
  )
}
