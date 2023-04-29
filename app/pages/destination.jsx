import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Image from 'next/image'

export default function Destination({ data }) {
    if (data.code == 404) return <h1>{data.status}</h1>
    return (
        <>
            <div className="flex justify-center">
                <div className="sm:container p-2">
                    <div className="w-full">
                        <Navbar />
                        <h1 className="text-3xl font-bold">{data.title}</h1>
                        <h4 className="text-sm font-bold text-gray-500 pt-2">Posted {data.date}</h4>
                        <div className="md:flex">
                            <div className="w-full h-full">
                                <div id="img">
                                    <Image className='w-full xl:h-[30rem] h-80' src={`/../public/${data.img}`} alt='img.jpg' width={300} height={300} />
                                </div>
                                <div className="pt-4 text-justify">
                                    {
                                        data.text.map((e, i) => {
                                            return (
                                                <div>
                                                    <p key={`${i}-txt`} >{e}</p>
                                                    <br />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="xl:w-[40rem] md:w-96 w-full h-full px-4 text-sm md:text-md">
                                <h3 className="font-semibold">Lokasi Destinasi</h3>
                                <iframe className="bg-gray-200 w-full h-60"
                                    src="https://maps.google.com/maps?ll=-8.4553718,114.7913904&q=-8.4553718,114.7913904&t=&z=10&ie=UTF8&output=embed">
                                </iframe>
                                <h3 className="font-semibold pt-4">Fasilitas</h3>
                                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-5 gap-3">
                                    {
                                        data.facilities.map((e, i) => {
                                            for (const key in e) {
                                                return (
                                                    <div key={`${i}-fac`} className="p-2 border-2 flex rounded-xl flex-col items-center">
                                                        <Image className='text-center ' src={`/../public/${e[key].img}`} alt='logo.png' width={40} height={40} />
                                                        <h4>{key}</h4>
                                                    </div>
                                                )
                                            }
                                        })
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
                                                    <Image className='w-full h-full' src={'/../public/abc.jpg'} alt='img.jpg' width={100} height={100} />
                                                </div>
                                                <div className="pt-2 pl-2 font-semibold">Ibnu</div>
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
                                                    <Image className='w-full h-full' src={'/../public/abc.jpg'} alt='img.jpg' width={100} height={100} />
                                                </div>
                                                <div className="pt-2 pl-2 font-semibold">Ibnu</div>
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
                                                    <Image className='w-full h-full' src={'/../public/abc.jpg'} alt='img.jpg' width={100} height={100} />
                                                </div>
                                                <div className="pt-2 pl-2 font-semibold">Ibnu</div>
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
    const res = await fetch(`http://localhost:3000/api/user/destination?id=${id}`)
    const data = await res.json()
    return { props: { data } }
}