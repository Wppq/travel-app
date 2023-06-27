import { useEffect, useState } from "react";
import DashboardNavbar from "../../components/dashboardAdminSide";
import { useRouter } from "next/router";
import { baseUrl } from "../../config";
import dynamic from "next/dynamic"

const MyMap = dynamic(() => import("../../components/mapAdmin"), { ssr: false })


export default function FormAdd() {
    const router = useRouter()
    const [name, setName] = useState('')
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState('')
    const [position, setPosition] = useState([])
    const [polygons, setPolygons] = useState([])

    useEffect(() => {
        getPolygon(localStorage.getItem("token"))
            .then(res => {
                if (res.data !== null) {
                    const newPols = res.data.map(e => e.position)
                    setPolygons(newPols)
                }
            })
    },[])

    const handlePosition = (data) => {
        const newPosition = data
        setPosition(newPosition)
    }

    const submitPayload = async () => {
        const payload = {
            username, password, name, position
        }
        const resp = await fetch(`${baseUrl}/account`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "TOKEN": localStorage.getItem('token')
            },
            body: JSON.stringify(payload)
        })
        const msg = await resp.json()
        if (msg.code == 200) {
            setName('')
            setPassword('')
            setUsername('')
            router.reload()
            return
        }
        console.log(msg)
    }

    return (
        <>
            <div className="h-[100vh] bg-gradient-to-b from-blue-500 from-5% via-cyan-400 via-40% to-sky-300 to-100% drop-shadow-2xl" >
                <div className="w-full flex p-2">
                    <DashboardNavbar />
                    <div className="w-full h-full drop-shadow-2xl rounded-xl">
                        <div className="flex">
                            <div className="w-full text-center">
                                <h2 className="font-bold text-2xl">Tambahkan Operator</h2>
                                <div className="p-4">
                                    <div className="bg-gray-200 drop-shadow-2xl w-full h-[90vh] rounded-xl grid ">
                                        <div className="place-self-center w-[80%] h-[90%]">
                                            <form>
                                                <div className="w-full h-16 grid text-xl">
                                                    <label className="text-left ml-2 font-bold">Name</label>
                                                    <input type="text" className="border-2 focus:drop-shadow-2xl px-2" onChange={(e) => setName(e.target.value)} />
                                                </div>
                                                <div className="w-full h-16 grid text-xl">
                                                    <label className="text-left ml-2 font-bold">Username</label>
                                                    <input type="text" className="border-2 focus:drop-shadow-2xl px-2" onChange={(e) => setUsername(e.target.value)} />
                                                </div>
                                                <div className="w-full h-16 grid text-xl">
                                                    <label className="text-left ml-2 font-bold">Password</label>
                                                    <input type="password" className="border-2 focus:drop-shadow-2xl px-2" onChange={(e) => setPassword(e.target.value)} />
                                                </div>
                                                <div className="h-96 border-2 py-10">
                                                    <MyMap pols={polygons} location={handlePosition} />
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

const getPolygon = async (token) => {
    try {
        const resp = await fetch(`${baseUrl}/account`, {
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