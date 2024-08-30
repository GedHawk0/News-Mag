import { useState } from "react";
import Navbar from "./Components/Navbar";
import Newsbord from "./Components/Newsbord";
import NewsItem from "./Components/NewsItem";

export default function App() {
  const [category,setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsbord category={category}/>
      <NewsItem/>
    </div>
  )
}
