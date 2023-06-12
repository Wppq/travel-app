import Image from "next/image";
import img from '../public/abc.jpg'
import Link from "next/link";
import { useState } from "react";
import { dataLocation as data } from "../dataCity";
import { baseUrlProps } from "../config";

export default function Home({ destinations }) {
  const [inputValueDest, setInputValueDest] = useState('')
  const [filterOptionsDest, setFilterDest] = useState('')

  const [inputValue, setInputValue] = useState('')
  const [filterOptions, setFilter] = useState('')

  const handleInputChange = (e) => {
    const value = e.target.value
    setInputValue(value)

    if (value.length >= 3) {
      const filtered = data.filter(location => {
        const regex = new RegExp(value, 'i')
        return regex.test(location.name)
      })
      setFilter(filtered)
    } else {
      setFilter([])
    }
  }

  const handleInputChangeDest = (e) => {
    const value = e.target.value
    setInputValueDest(value)

    if (value.length >= 3 && destinations) {
      const filtered = destinations.filter(dest => {
        const regex = new RegExp(value, 'i')
        return regex.test(dest.title)
      })
      setFilterDest(filtered)
    } else {
      setFilterDest([])
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="w-full">
          <div className="bg-red-300 w-full h-screen relative">
            <Image src={img} className="w-full h-full" alt="img.jpg" />
            <div className="absolute top-40 w-full">
              <div className="box-border h-96 flex justify-center p-10 rounded-md">
                <div className="box-content py-6 px-30 transparant w-[50rem] text rounded-md">
                  <div className="pb-2 text-gray-200 text-center font-semibold text-[1.3rem]">
                    Selamat Datang Di Website Travel
                    Destinasi Sulawesi Tengah Dengan
                    Fasilitas Menarik Yang Membuat Kesan
                    Indah Selama Liburan Anda.
                  </div>
                  <div className="grid place-content-center my-6 h-20 bg-gray-800/50">
                    <div className="flex">
                      {/* <div className="flex-row">
                        <input type="text" placeholder="Kota keberangkatan" value={inputValue} onChange={handleInputChange} className="bg-white h-8 w-60 mx-2 p-2" />
                        {
                          filterOptions.length > 0 ? (
                            <div className="mx-1 w-60 h-0">
                              {
                                filterOptions.map((e, i) => {
                                  return (
                                    <div key={i}>
                                      {
                                        e.transport.map(transport => {
                                          return (
                                            <div key={transport} className="border-2 border-gray-500 w-full px-2 mx-1 bg-white hover:bg-gray-200 cursor-pointer" onClick={() => {
                                              setInputValue(`${e.name},${transport}`)
                                              setFilter([])
                                            }}>
                                              {e.name}, {transport}
                                            </div>
                                          )
                                        })
                                      }
                                    </div>
                                  )
                                })
                              }
                            </div>
                          ) : null
                        }
                      </div> */}
                      <div className="flex-row">
                        <input type="text" placeholder="Destinasi Tujuan" value={inputValueDest} onChange={handleInputChangeDest} className="bg-white h-8 w-60 mx-2 p-2" />
                        {
                          filterOptionsDest.length > 0 ? (
                            <div className="mx-1 w-60 h-0">
                              {
                                filterOptionsDest.map(e => {
                                  return (
                                    <div key={e.title} className="border-2 border-gray-500 w-full px-2 mx-1 bg-white hover:bg-gray-200 cursor-pointer">
                                      {e.title}
                                    </div>
                                  )
                                })
                              }
                            </div>
                          ) : null
                        }
                      </div>
                      {
                        filterOptionsDest[0] ? <Link className="bg-white rounded-md text-center pt-1 px-4 cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-bold"
                          href={{
                            pathname: '/destination',
                            query: {
                              name: filterOptionsDest[0].name,
                              id: filterOptionsDest[0].id_dest
                            }
                          }}
                        >CARI</Link> : null
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid place-content-center mt-20">
                <div className="mx-auto ">
                  <Link href="/explore"
                    className="rounded-md p-4 font-bold text-gray-300 hover:text-white bg-gray-800 hover:bg-black">LIHAT SEMUA DESTINASI</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${baseUrlProps}/search`)
  const { data } = await res.json()
  return { props: { destinations: data } }
}