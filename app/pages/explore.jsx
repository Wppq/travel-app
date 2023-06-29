import Image from "next/image"
import img from '../public/sulteng-3.jpeg'
import img2 from '../public/sulteng-1.jpeg'
import img3 from '../public/sulteng-2.jpg'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Link from "next/link"
import { baseUrlProps } from "../config"


export default function Explore({ data }) {
    return (
        <>
            <div className="flex justify-center">
                <div className="sm:container p-2">
                    <div className="w-full">
                        <Navbar />
                        <h1 className="text-4xl font-bold">JELAJAHI SULAWESI TENGAH</h1>
                        <div className="bg-gray-300 w-full h-80 xl:h-[35rem] lg:h-[30rem] mt-4 flex">
                            <div className="bg-gray-300 w-full h-full border-2">
                                <Image className="w-full h-full" src={img} alt="img.png" />
                            </div>
                            <div className="bg-gray-300 w-[25rem] lg:w-[40rem] md:w-[30rem] h-full sm:block hidden">
                                <div className="bg-gray-200 h-1/2 border-2">
                                    <Image className="w-full h-full" src={img2} alt="img.png" />
                                </div>
                                <div className="bg-gray-200 h-1/2 border-2">
                                    <Image className="w-full h-full" src={img3} alt="img.png" />
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/3 w-full">
                            <h1 className="text-3xl font-bold py-2">Tentang Sulawesi Tengah</h1>
                            <p className="text-justify">
                                Sulawesi Tengah merupakan provinsi yang terletak di tengah-tengah wilayah Pulau Sulawesi. Provinsi ini memiliki banyak destinasi wisata alam yang menarik dan memukau. Wisata alam di Sulawesi Tengah terkenal dengan keindahan alam yang masih asri dan belum banyak tersentuh oleh manusia.
                                <br />
                                Salah satu destinasi wisata alam yang terkenal di Sulawesi Tengah adalah Danau Poso. Danau ini merupakan danau terbesar di Sulawesi Tengah dan memiliki pesona keindahan yang luar biasa. Air danau yang berwarna hijau toska dipadukan dengan pemandangan gunung yang hijau membuat suasana yang sangat menenangkan.
                                <br />
                                Tak hanya Danau Poso, Sulawesi Tengah juga memiliki destinasi wisata alam lain seperti Taman Nasional Lore Lindu, Pegunungan Napu, Pantai Kelapa Dua, dan masih banyak lagi. Setiap destinasi wisata alam di Sulawesi Tengah memiliki keunikan dan daya tarik tersendiri yang dapat memanjakan pengunjung dengan keindahan alamnya.
                                <br />
                                Tidak hanya keindahan alamnya yang menarik, Sulawesi Tengah juga memiliki keanekaragaman flora dan fauna yang unik, seperti tarsius, kuskus, dan anoa. Selain itu, Sulawesi Tengah juga memiliki kekayaan budaya yang kaya, seperti rumah adat dan upacara adat yang masih dilestarikan oleh masyarakat setempat.
                                <br />
                                Dengan segala keindahan alamnya, Sulawesi Tengah patut menjadi salah satu destinasi wisata alam yang wajib dikunjungi bagi pecinta alam dan penggemar petualangan.
                            </p>
                        </div>
                        <h1 className="text-3xl font-bold py-2">Destinasi</h1>
                        <div
                            className="grid md:grid-cols-3 md:gap-3 grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-5">
                            {
                                data ? data.map(e => {
                                    return (
                                        <div key={e} className="border-4 hover:bg-white bg-black border-gray-600 rounded-md p-1 relative text-center">
                                            <Link
                                                href={{
                                                    pathname: `/location`,
                                                    query: { name: e }
                                                }}
                                            >
                                                <div className="w-full h-20 bg-gray-600">
                                                    <h4 className="absolute text-3xl text-white font-bold top-6 w-full">{e}</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                }) : null
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
    const response = await fetch(`${baseUrlProps}/regions`)
    const regions = await response.json()
    return { props: { data: regions.data } }
}