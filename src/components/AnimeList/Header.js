import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="flex justify-between items-center p-4 mb-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            {
                    linkHref && linkTitle ?
                    <Link href={linkHref} className="md:text-xl text-md underline hover:text-indigo-500 transision-all">
                        {linkTitle}
                    </Link>
                    : null
            }
        </div>
    )
}


export default Header