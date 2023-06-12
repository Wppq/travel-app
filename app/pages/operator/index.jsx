import { useEffect, useState } from "react";
import DashboardNavbar from "../../components/dashboard_navbar";
import { useRouter } from "next/router";
import Link from "next/link";
import { baseUrl } from "../../config";

export default function Dashboard() {
    const [data, setData] = useState([])
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        // check if token valid from server and check the role if not operator can not access this page

        // This implement bad practice do not check token from server
        if (!token) {
            router.push('/operator/login')
            return
        }
        fecthDestination(token)
            .then(resp => {
                resp.code !== 200 ? setData([]) : setData(resp.data)
            })
    }, [])

    const deleteDestination = async (id) => {
        try {
            const res = await fetch(`${baseUrl}/destination/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        "TOKEN": localStorage.getItem("token")
                    }
                })
            const msg = await res.json()
            if (msg.code == 200) {
                router.reload()
            }
        } catch (err) {
            setData()
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
                                <h2 className="font-bold text-2xl">Tentang Wisata</h2>
                                <div className="p-4 text-justify">
                                    <div className="bg-white drop-shadow-2xl w-full h-[91vh] rounded-xl p-4 overflow-auto">
                                        {
                                            data ? data.map((e,i) => {
                                                return (
                                                    <div key={e._id} className="h-14 flex place-items-center rounded-2xl my-2 p-2 bg-gray-100">
                                                         <div className="font-semibold w-10 pr-4">{i+1}.</div>
                                                        <div className="font-semibold w-full">{e.title}</div>
                                                        <div className="flex w-80">
                                                            <div className="font-semibold px-10">{e.rete}</div>
                                                            <div className="flex drop-shadow-2xl">
                                                                <div className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-sky-500 bg-sky-300">
                                                                    <Link
                                                                        href={{
                                                                            pathname: '/operator/edit',
                                                                            query: {
                                                                                id: e._id
                                                                            },
                                                                        }}
                                                                    >Edit</Link>
                                                                </div>
                                                                <div onClick={() => deleteDestination(e._id)} className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-red-500 bg-red-300">Delete</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }) : null
                                        }
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

const fecthDestination = async (token) => {
    try {
        const resp = await fetch(`${baseUrl}/destination`, {
            method: "GET",
            headers: {
                "TOKEN": token
            }
        })
        const data = await resp.json()
        return data
    } catch (err) {
        return {
            code: 500,
            msg: "SOMETHING WHEN WRONG"
        }
    }
}

/**<h2 className="font-bold text-2xl">Tentang Pengunjung</h2>
                                <div className="m-4 flex justify-center">
                                    <div
                                        className="rounded-2xl mx-2 w-52 h-28 bg-white drop-shadow-xl grid place-items-center">
                                        <div>
                                            <h2 className="text-slate-700">BULAN</h2>
                                            <h2 className="text-slate-700 font-semibold">2.000</h2>
                                        </div>
                                    </div>
                                    <div
                                        className="rounded-2xl mx-2 w-52 h-28 bg-white drop-shadow-xl grid place-items-center">
                                        <div>
                                            <h2 className="text-slate-700">TOTAL</h2>
                                            <h2 className="text-slate-700 font-semibold">20.000</h2>
                                        </div>
                                    </div>
                                    <div
                                        className="rounded-2xl mx-2 w-52 h-28 bg-white drop-shadow-xl grid place-items-center">
                                        <div>
                                            <h2 className="text-slate-700">RATING</h2>
                                            <h2 className="text-slate-700 font-semibold">5.0</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="bg-white drop-shadow-2xl w-full h-[60vh] rounded-xl"></div>
                                </div> */