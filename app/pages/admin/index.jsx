import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DashboardNavbarAdmin from "../../components/dashboardAdminSide";
import { baseUrl } from "../../config";

export default function Dashboard() {
    const [data, setData] = useState([])
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        const role = localStorage.getItem('role')
        if (!token && role !== "admin") {
            router.push('/login')
            return
        }
        getAllOperator(token)
            .then(accounts => {
                if (accounts.code == 200) {
                    setData(accounts.data)
                }
            })
    },[])

    const resetPassword = async (id) => {
        try {
            const resp = await fetch(`${baseUrl}/account/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "TOKEN": localStorage.getItem("token")
                    }
                })
            const accounts = await resp.json()
            if (accounts.code == 200) {
                router.reload()
                return
            }
            console.log(accounts.status)
        } catch (err) {
            console.log(err)
        }
    }

    const deleteAccount = async (id) => {
        try {
            const resp = await fetch(`${baseUrl}/account/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        "TOKEN": localStorage.getItem("token")
                    }
                })
            const accounts = await resp.json()
            if (accounts.code == 200) {
                router.reload()
                return
            }
            console.log(accounts.status)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="h-[100vh] bg-gradient-to-b from-blue-500 from-5% via-cyan-400 via-40% to-sky-300 to-100% drop-shadow-2xl" >
                <div className="w-full flex p-2">
                    <DashboardNavbarAdmin />
                    <div className="w-full h-full drop-shadow-2xl rounded-xl">
                        <div className="flex">
                            <div className="w-full text-center">
                                <h2 className="font-bold text-2xl">Tentang Region</h2>
                                <div className="p-4 text-justify">
                                    <div className="bg-white drop-shadow-2xl w-full h-80 rounded-xl p-4 overflow-auto">
                                        {
                                            data ? data.map(e => {
                                                return (
                                                    <div key={e._id} className="h-14 flex place-items-center rounded-2xl my-2 p-2 bg-gray-100">
                                                        <div className="font-semibold w-full">{e.username}</div>
                                                        <div onClick={() => resetPassword(e._id)} className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-red-500 bg-green-300">Reset</div>
                                                        <div onClick={() => deleteAccount(e._id)} className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-red-500 bg-red-300">Delete</div>
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

const getAllOperator = async (token) => {
    try {
        const resp = await fetch(`${baseUrl}/account`,
            {
                method: "GET",
                headers: {
                    "TOKEN": token
                }
            })
        const accounts = await resp.json()
        return accounts
    } catch (err) {
        console.log(err)
    }
}