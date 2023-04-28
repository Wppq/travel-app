import Image from "next/image"
import img from '../public/abc.jpg'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Explore({ data }) {

    const router = useRouter()
    const name = router.query

    return (
        <>
            <div className="flex justify-center">
                <div className="sm:container p-2">
                    <div className="w-full">
                        <Navbar />
                        <h1 className="text-4xl font-bold">JELAJAHI {name.name}</h1>
                        <div className="bg-red-300 w-full h-80 xl:h-[35rem] lg:h-[30rem] mt-4 flex">
                            <div className="bg-yellow-300 w-full h-full border-2">
                                <Image className="w-full h-full" src={img} alt="img.png" />
                            </div>
                            <div className="bg-green-300 w-[25rem] lg:w-[40rem] md:w-[30rem] h-full sm:block hidden">
                                <div className="bg-gray-200 h-1/2 border-2">
                                    <Image className="w-full h-full" src={img} alt="img.png" />
                                </div>
                                <div className="bg-sky-200 h-1/2 border-2">
                                    <Image className="w-full h-full" src={img} alt="img.png" />
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/3 w-full">
                            <h1 className="text-3xl font-bold py-2">Tentang {name.name}</h1>
                            <p className="text-justify">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam necessitatibus iusto omnis
                                laudantium iste provident dolores molestias inventore quam labore, amet dignissimos repellendus
                                deserunt, expedita, qui dolor dolorum ratione veritatis.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, repellat eligendi necessitatibus
                                voluptates quisquam cum. Necessitatibus ipsum officiis beatae, dolore, quo adipisci tenetur
                                dolorum, possimus modi hic non architecto minus.
                            </p>
                        </div>
                        <h1 className="text-3xl font-bold py-2">Destinasi</h1>
                        <div
                            className="grid md:grid-cols-3 md:gap-3 grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-5">
                            {
                                data.map(e => {
                                    return (
                                        <div key={e.id} className="border-4 hover:bg-white bg-black border-gray-600 rounded-md p-1 relative text-center">
                                            <Link 
                                                href={{
                                                    pathname : '/destination',
                                                    query : e.name
                                                }}
                                            >
                                                <Image className="w-full h-full" src={`/../public/${e.path}`} width={300} height={300} alt="img.png" />
                                                <h4 className="absolute text-3xl text-white font-bold bottom-2 w-full">{e.name}</h4>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/user/destination')
    const data = await res.json()

    return { props: { data } }

}