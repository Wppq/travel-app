import { useState } from "react";
import Image from "next/image";

export default function PopupFacilities({ facilities, handleFacilities }) {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [category, setCategory] = useState('')

    const submitFacility = () => {
        if (name == "" || desc == "" || category == "") {
            console.log("Does not empty")
            return
        }
        const payload = {
            name, desc, category
        }
        const newData = facilities
        newData.push(payload)
        handleFacilities(newData)
        setName('')
        setDesc('')
        setCategory('')
    }
    return (
        <>
            <div className="flex">
                {
                    facilities ? facilities.map((e, i) => {
                        return (
                            <Image key={i} alt={e.catery + ".png"} className="p-4 rounded-md m-2 bg-white drop-shadow-2xl" src={`/${e.category}.png`} width={100} height={10} />
                        )
                    }) : null
                }
                <div
                    className="text-bold m-2 border-2 p-10 border-black cursor-pointer hover:bg-gray-400"
                    onClick={() => setShowModal(true)}
                >
                    +
                </div>
                {showModal ? (
                    <>
                        <div
                            className="items-center flex overflow-x-hidden overflow-y-auto fixed inset-10 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-10 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Tambah Faslitas
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                            <div className="py-2">
                                                <input
                                                    className="border-2 w-full"
                                                    type="text"
                                                    placeholder="Nama"
                                                    onChange={(e) => setName(e.target.value)} value={name
                                                    } />
                                            </div>
                                            <div className="h-20 overlfow-hidden w-full">
                                                <textarea style={{ resize: "none" }} className="border-2 h-full w-full" type="text" placeholder="Deskripsi" onChange={(e) => setDesc(e.target.value)} value={desc
                                                } />
                                            </div>
                                            <div className="w-full">
                                                <select
                                                    className="cursor-pointer p-2 w-full"
                                                    onChange={(e) => setCategory(e.target.value)} value={category}
                                                >
                                                    <option disabled value="">Pilih kategory</option>
                                                    <option value="hotel">Penginapan</option>
                                                    <option value="rmk">Rumah makan</option>
                                                    <option value="hbr">Hiburan</option>
                                                </select>
                                            </div>
                                        </p>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => {
                                                setShowModal(false)
                                                submitFacility()
                                            }}
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black h-[120%]"></div>
                    </>
                ) : null}
            </div>

        </>
    )
}