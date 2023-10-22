import Link from "next/link"
import InputSearch from "./inputSearch"


const Navbar = () => {
  return (
    <header className="bg-indigo-500">
        <div className="flex  md:flex-row flex-col justify-between p-4 gap-2">
          <Link href="/" className="font-bold text-white text2xl">CUYANIMELIST</Link>
          <InputSearch/>
        </div>
    </header>
  )
}

export default Navbar