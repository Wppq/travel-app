import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Image from 'next/image'
import hotel from '../public/hotel.png'
import dynamic from "next/dynamic"
import { baseUrl, baseUrlProps } from '../config'

const MyMapDest = dynamic(() => import("../components/mapDestination"), { ssr: false })

export default function Destination(data) {
    if (data.code != 200) {
        return <h1>{data.status}</h1>
    }
    const posted = data.data.date.split("T")[0]
    return (
        <>
            <div className="flex justify-center">
                <div className="sm:container p-2">
                    <div className="w-full">
                        <Navbar />
                        <h1 className="text-3xl font-bold">{data.data.title}</h1>
                        <h4 className="text-sm font-bold text-gray-500 pt-2">Posted {posted}</h4>
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
                                                    <Image className='text-center ' src={hotel} alt={`${e.category}.png`} width={40} height={40} />
                                                </div>
                                            )
                                        })
                                            : null
                                    }
                                </div>
                                <h3 className="font-semibold pt-4">Rating</h3>
                                <h3 className="font-semibold">5.0</h3>
                                <h3 className="font-semibold pt-4">Komentar</h3>
                                <div className="w-full md:h-[36rem] h-ful overflow-auto text-justify">
                                    <div className="border-2 m-2">
                                        <div className="m-4">
                                            <div className="flex">
                                                <div className="bg-gray-500 rounded-full w-10 h-10 overflow-hidden">
                                                    <Image className='w-full h-full' src={'/../public/user.png'} alt='img.jpg' width={100} height={100} />
                                                </div>
                                                <div className="pt-2 pl-2 font-semibold">kautsar</div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellat iste
                                                culpa ipsa beatae numquam voluptatem ut quidem rerum quam eligendi nobis facere
                                                qui corrupti mollitia? Vero quasi nemo nulla!</p>
                                        </div>
                                    </div>
                                    <div className="border-2 m-2">
                                        <div className="m-4">
                                            <div className="flex">
                                                <div className="bg-gray-500 rounded-full w-10 h-10 overflow-hidden">
                                                    <Image className='w-full h-full' src={'/../public/user.png'} alt='img.jpg' width={100} height={100} />
                                                </div>
                                                <div className="pt-2 pl-2 font-semibold">kautsar</div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellat iste
                                                culpa ipsa beatae numquam voluptatem ut quidem rerum quam eligendi nobis facere
                                                qui corrupti mollitia? Vero quasi nemo nulla!</p>
                                        </div>
                                    </div>
                                    <div className="border-2 m-2">
                                        <div className="m-4">
                                            <div className="flex">
                                                <div className="bg-gray-500 rounded-full w-10 h-10 overflow-hidden">
                                                    <Image className='w-full h-full' src={'/../public/user.png'} alt='img.jpg' width={100} height={100} />
                                                </div>
                                                <div className="pt-2 pl-2 font-semibold">kautsar</div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellat iste
                                                culpa ipsa beatae numquam voluptatem ut quidem rerum quam eligendi nobis facere
                                                qui corrupti mollitia? Vero quasi nemo nulla!</p>
                                        </div>
                                    </div>
                                </div>
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