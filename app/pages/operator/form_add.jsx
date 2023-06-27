import { useState } from "react";
import DashboardNavbar from "../../components/dashboard_navbar";
import dynamic from "next/dynamic"
import { useRouter } from "next/router";
import { formats, modules } from '../../components/textEditorConfig'
import { baseUrl } from "../../config";
import PopupFacilities from "../../components/popupFacilities";

const MyMap = dynamic(() => import("../../components/map"), { ssr: false })
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})

export default function FormAdd() {
    const router = useRouter()
    const [position, setPosition] = useState({
        lat: 0,
        long: 0
    })
    const [title, setTitle] = useState('')
    const [img, setImg] = useState(null)
    const [text, setText] = useState('')
    const [facilities, setFacilities] = useState([])

    const handleFacilities = (data) => {
        setFacilities(data)
    }

    const handlePosition = (data) => {
        setPosition(data)
    }

    const submitPayload = async () => {
        const form = new FormData()
        form.append("title", title)
        form.append("image_file", img[0])
        form.append("lat", position.lat)
        form.append("long", position.long)
        form.append("text", text)
        form.append("facilities", JSON.stringify(facilities))
        try {
            const resp = await fetch(`${baseUrl}/destination`, {
                method: "POST",
                headers: {
                    "TOKEN": localStorage.getItem("token")
                },
                body: form
            })
            const msg = await resp.json()
            if (msg.code == 200) {
                setImg(null)
                setPosition({ lat: 0, long: 0 })
                setText('')
                setTitle('')
                router.push("/operator")
                return
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="h-[100vh] bg-gradient-to-b from-blue-500 from-5% via-cyan-400 via-40% to-sky-300 to-100% drop-shadow-2xl" >
                <div className="w-full flex p-2">
                    <DashboardNavbar />
                    <div className="w-full h-full drop-shadow-2xl rounded-xl">
                        <div className="flex">
                            <div className="w-full text-center">
                                <h2 className="font-bold text-2xl">Tambahkan Destinasi</h2>
                                <div className="p-4">
                                    <div className="bg-gray-200 drop-shadow-2xl w-full h-[91vh] rounded-xl grid overflow-auto pb-24">
                                        <div className="place-self-center w-[80%] h-[90%]">
                                            <form>
                                                <div className="w-full h-16 grid text-xl">
                                                    <label className="text-left ml-2 font-bold">Title</label>
                                                    <input type="text" className="border-2 focus:drop-shadow-2xl px-2" onChange={(e) => setTitle(e.target.value)} />
                                                </div>
                                                <div className="w-full h-16 grid text-xl my-2">
                                                    <label className="text-left ml-2 font-bold">Image File</label>
                                                    <input type="file" className="border-2 focus:drop-shadow-2xl bg-white cursor-pointer" onChange={(e) => setImg(e.target.files)} />
                                                </div>
                                                <div className="h-80 border-2">
                                                    <MyMap location={handlePosition} />
                                                </div>
                                                <div className="w-full text-xl my-2">
                                                    <div className="w-full text-left">
                                                        <label className="font-bold">Article</label>
                                                    </div>
                                                    <div>
                                                        <QuillNoSSRWrapper className="bg-white h-80 pb-20" theme="snow" onChange={(e) => setText(e)} formats={formats} modules={modules} />
                                                    </div>
                                                </div>
                                                <div className="w-full text-xl my-2">
                                                    <div className="w-full text-left">
                                                        <label className="font-bold">Fasilitas</label>
                                                    </div>
                                                    <div className="flex">
                                                        <PopupFacilities handleFacilities={handleFacilities}
                                                            facilities={facilities} />
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="w-full bg-sky-300 cursor-pointer hover:bg-sky-500" onClick={submitPayload} >
                                                <p className="p-4 rounded-md font-bold hover:text-white">SUBMIT</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}