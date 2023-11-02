import Link from "next/link"
import InputSearch from "./inputSearch"


const Navbar = () => {
  return (
    <header className="bg-color-accent">
        <div className="flex  md:flex-row flex-col justify-between md:items-center p-4 gap-2">
          <Link href="/" className="font-bold text2xl">CUYANIMELIST</Link>
          <InputSearch/>
        </div>
    </header>
  )
}

export default Navbar