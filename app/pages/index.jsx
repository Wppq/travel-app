import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import img from '../public/abc.jpg'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full mx-10">
          <Navbar />
          <div className="bg-red-300 w-full lg:h-[30rem] h-80 relative">
            <Image src={img} className="w-full h-full" alt="img.jpg" />
            <div className="absolute lg:top-20 top-0 w-full">
              <div className="box-border h-80 flex justify-center p-10 rounded-md">
                <div className="box-content py-6 px-30 transparant w-[35rem] text rounded-md">
                  <div className="pb-2 text-gray-200 text-center font-semibold text-[1.3rem]">
                    Selamat Datang Di Website Travel
                    Destinasi Sulawesi Tengah Dengan
                    Fasilitas Menarik Yang Membuat Kesan
                    Indah Selama Liburan Anda.
                  </div>
                  <div className="grid place-content-center pt-7 ">
                    <div className="mx-auto ">
                      <Link href="/explore"
                        className="rounded-md p-2 bg-gradient-to-r from-cyan-500 to-blue-500 font-bold text-gray-300 hover:text-white">CARI
                        LOKASI</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-20 w-full md:w-auto">
            <div className="text-center font-semibold text-[2rem]">
              Mengapa Anda Harus Memilih Kami Sebagai Penyedia Layanan Pejalanan Anda?
            </div>
          </div>
          <div className="flex justify-center pb-20 items-center">
            <div className="sm:flex justify-center items-center">
              <div className="relative m-2">
                <Image src={img} alt="img.jpg" className="w-64 h-64 object-cover rounded-md" />
                <div
                  className="absolute top-30 left-0 right-0 bottom-0 flex justify-center items-center bg-black opacity-50">
                  <span className="text-white text-center text-2xl font-bold">
                    Memberi informasi sedetail mungkin terkait destinasi yang dikunjungi
                  </span>
                </div>
              </div>
              <div className="relative m-2">
                <Image src={img} alt="img.jpg" className="w-64 h-64 object-cover rounded-md" />
                <div
                  className="absolute top-30 left-0 right-0 bottom-0 flex justify-center items-center bg-black opacity-50">
                  <span className="text-white text-center text-2xl font-bold">
                    Menyediakan fasilitas jemput dari bandara sampai ke lokasi destinasi wisata
                  </span>
                </div>
              </div>
              <div className="relative m-2">
                <Image src={img} alt="img.jpg" className="w-64 h-64 object-cover rounded-md" />
                <div
                  className="absolute top-30 left-0 right-0 bottom-0 flex justify-center items-center bg-black opacity-50">
                  <span className="text-white text-center text-2xl font-bold">
                    Menyediakan pilihan paket perjalanan yang menarik
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}
