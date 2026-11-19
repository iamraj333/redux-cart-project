import { Book } from "lucide-react"
import Product from "./Product"
import Navbar from "./components/Navbar"
import MyCart from "./MyCart"

function App() {
  return(
    <>
    <Navbar/>
    <div className="flex gap-4 w-full p-4">
      <Product/>
      <MyCart/>
    </div>
    </>
  )
}

export default App
