import Image from "next/image"
import Navbar from "../components/navbar"
import Link from "next/link"
import { useRouter } from "next/router"
import { baseUrl, baseUrlProps } from "../config"

export default function Explore({ data }) {
    const router = useRouter()
    const name = router.query

    return (
        <>
            <div className="flex justify-center">
                <div className="sm:container p-2">
                    <div className="w-full">
                        <Navbar />
                        <h1 className="text-4xl font-bold">Jelajahi {name.name}</h1>
                        <div
                            className="grid md:grid-cols-3 md:gap-3 grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-5 pt-10">
                            {
                                data ? data.map(e => {
                                    return (
                                        <div key={e._id} className="border-4 hover:bg-white bg-black border-gray-600 rounded-md p-1 relative text-center grid">
                                            <Link
                                                href={{
                                                    pathname: '/destination',
                                                    query: {
                                                        name: name.name,
                                                        id: e._id
                                                    }
                                                }}
                                            >
                                                <Image className="w-full h-40" src={`${baseUrlProps}/img/${e.image_file}`} width={250} height={200} alt="img.png" />
                                                <h4 className="absolute text-3xl text-white font-bold bottom-2 w-full">{e.title}</h4>
                                            </Link>
                                        </div>
                                    )
                                }) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(contex) {
    const name = contex.query.name
    const res = await fetch(`${baseUrlProps}/user/${name}/destinations`)
    const destinations = await res.json()
    return { props: { data: destinations.data } }
}