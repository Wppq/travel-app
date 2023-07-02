import Image from "next/image"
import user from '../public/user.png'
import logo from '../public/logo.png'
import Link from "next/link"

export default function Navbar() {
    return (
        <header style={{ zIndex: 1111 }} className="sticky top-0 z-50 bg-white">
            <div className="h-20 mb-6 flex border-b-[2px]">
                <div className="h-full w-1/3 grid content-center">
                    <Link href="/">
                        <div className="flex">
                            <Image className="w-10" src={logo} alt="logo" />
                            <h2 className="ml-2 mt-4 text-xl font-bold top-10">
                                Nompesana
                            </h2>
                        </div>
                    </Link>
                </div>
                <div className="h-full w-full grid content-center text-center px-20 xl:px-40">
                    {/* <div className="flex">
                        <div className="cursor-pointer hover:font-bold text-xl basis-1/3">
                            <Link href={'/'} >Home</Link>
                        </div>
                        <div className="cursor-pointer hover:font-bold text-xl basis-1/3">
                            <Link href={'/'} >Paket</Link>
                        </div>
                        <div className="cursor-pointer hover:font-bold text-xl basis-1/3">
                            <Link href={'/about'} >Tentang</Link>
                        </div>
                    </div> */}
                </div>
                <div className="h-full w-1/3 grid content-center">
                    <div className="place-self-center overflow-hidden bg-gray-400 w-10 h-10 rounded-full">
                        <Image src={user} alt="user.png" />
                    </div>
                </div>
            </div>
        </header>
    )
}