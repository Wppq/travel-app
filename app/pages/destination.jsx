import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Image from 'next/image'
import dynamic from "next/dynamic"
import { baseUrlProps } from '../config'

const MyMapDest = dynamic(() => import("../components/mapDestination"), { ssr: false })

export default function Destination(data) {
    if (data.code != 200) {
        return <h1>{data.status}</h1>
    }
    const posted = data.data.date.split("T")[0].split("-")
    return (
        <>
            <div className="flex justify-center">
                <div className="sm:container p-2">
                    <div className="w-full">
                        <Navbar />
                        <h1 className="text-3xl font-bold">{data.data.title}</h1>
                        <h4 className="text-sm font-bold text-gray-500 pt-2">Posted {`${posted[2]}-${posted[1]}-${posted[0]}`}</h4>
                        <div className="md:flex">
                            <div className="w-full h-full">
                                <div id="img">
                                    <Image className='w-full xl:h-[30rem] h-80' src={`${baseUrlProps}/img/${data.data.image_file}`} alt='img.jpg' width={1000} height={1000} />
                                </div>
                                <div className="pt-4 text-justify">
                                    <article dangerouslySetInnerHTML={{ __html: data.data.text }} >
                                    </article>
                                </div>
                            </div>
                            <div className="xl:w-[40rem] md:w-96 w-full h-full px-4 text-sm md:text-md">
                                <h3 className="font-semibold">Lokasi Destinasi</h3>
                                <MyMapDest location={data.data.location} />
                                <h3 className="font-semibold pt-4">Fasilitas</h3>
                                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-5 gap-3">
                                    {
                                        data.data.facilities ? data.data.facilities.map((e, i) => {
                                            return (
                                                <div key={i} className="p-2 border-2 flex rounded-xl flex-col items-center group cursor-pointer">
                                                    <div className='bg-gray-100 w-96 h-40 absolute right-60 invisible group-hover:visible p-4'>
                                                        <p className='font-bold text-center'>{e.name}</p>
                                                        <p>{e.desc}</p>
                                                    </div>
                                                    <Image className='text-center ' src={`/../public/${e.category}.png`} alt={`${e.category}.png`} width={40} height={40} />
                                                </div>
                                            )
                                        })
                                            : null
                                    }
                                </div>
                                <h3 className="font-semibold pt-4">Rating</h3>
                                <h3 className="font-semibold">5.0</h3>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const id = context.query.id
    const name = context.query.name
    try {
        const res = await fetch(`${baseUrlProps}/user/${name}/destinations/${id}`)
        const destination = await res.json()
        return { props: destination }
    } catch (err) {
        console.log(err)
    }
}