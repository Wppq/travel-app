import { useEffect, useState } from "react";
import DashboardNavbar from "../../components/dashboard_navbar";
import dynamic from "next/dynamic"
import { useRouter } from "next/router";
import { formats, modules } from '../../components/textEditorConfig'
import { baseUrl } from "../../config";

const MyMap = dynamic(() => import("../../components/map"), { ssr: false })
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})

export default function FormAdd() {
    const router = useRouter()
    const id = router.query.id

    const [position, setPosition] = useState({
        lat: 0,
        long: 0
    })
    const [title, setTitle] = useState('')
    const [img, setImg] = useState(null)
    const [text, setText] = useState('')

    useEffect(() => {
        if (id == undefined) {
            router.push("/operator")
            return
        }
        findOne(id, localStorage.getItem("token"))
            .then(resp => {
                setTitle(resp.data.title)
                setText(resp.data.text)
                setPosition(resp.data.location)
                if (resp.code !== 200) {
                    router.push("/operator")
                    return
                }
            })
            .catch(() => router.push("/operator"))
    }, [])

    const handlePosition = (data) => {
        setPosition(data)
    }

    const submitPayload = async () => {
        if (title == '' || img == null || position == {} || text == '') {
            console.log("kosong")
            return
        }
        const form = new FormData()
        form.append("title", title)
        form.append("image_file", img[0])
        form.append("lat", position.lat)
        form.append("long", position.long)
        form.append("text", text)
        try {
            const resp = await fetch(`${baseUrl}/destination/${id}`, {
                method: "PUT",
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
            }
        } catch (err) {
            router.push("/operator")
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
                                <h2 className="font-bold text-2xl">Ubah Desitinasi</h2>
                                <div className="p-4">
                                    <div className="bg-gray-200 drop-shadow-2xl w-full h-[90vh] rounded-xl grid overflow-auto">
                                        <div className="place-self-center w-[80%] h-[90%]">
                                            <form>
                                                <div className="w-full h-16 grid text-xl">
                                                    <label className="text-left ml-2 font-bold">Title</label>
                                                    <input required value={title} type="text" className="border-2 focus:drop-shadow-2xl px-2" onChange={(e) => setTitle(e.target.value)} />
                                                </div>
                                                <div className="w-full h-16 grid text-xl my-2">
                                                    <label className="text-left ml-2 font-bold">Image File</label>
                                                    <input required type="file" className="border-2 focus:drop-shadow-2xl bg-white cursor-pointer" onChange={(e) => setImg(e.target.files)} />
                                                </div>
                                                <div className="h-80 flex border-2">
                                                    <MyMap location={handlePosition} />
                                                </div>
                                                <div className="w-full grid text-xl my-2">
                                                    <label className="text-left ml-2 font-bold">Article</label>
                                                    <QuillNoSSRWrapper className="bg-white h-80 overflow-auto" theme="snow" onChange={(e) => setText(e)} formats={formats} modules={modules} value={text} />
                                                </div>
                                                <div className="w-full bg-sky-300 cursor-pointer hover:bg-sky-500" onClick={submitPayload} >
                                                    <p className="p-4 rounded-md font-bold hover:text-white">SUBMIT</p>
                                                </div>
                                            </form>
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

const findOne = async (id, token) => {
    try {
        const resp = await fetch(`${baseUrl}/destination/${id}`, {
            method: "GET",
            headers: {
                "TOKEN": token
            },
        })
        const data = await resp.json()
        return data
    } catch (err) {
        return err
    }
}