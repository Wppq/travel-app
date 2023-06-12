import { useEffect, useState } from "react"
import PopupCard from "../components/popupCard"
import { useRouter } from 'next/router'
import { baseUrl } from "../config"

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPasword] = useState('')
    const [ok, setOk] = useState(false)
    const [msg, setMsg] = useState('')

    useEffect(() => {
        const role = localStorage.getItem('role')
        if (role) {
            route.push(`/${role}`)
        }
    }, [])

    const route = useRouter()

    const postLogin = async (e) => {
        e.preventDefault()
        if (username == '' || password == '') {
            setMsg("Field do not empty")
            setOk(true)
            return
        }
        const payload = {
            username, password
        }
        try {
            const response = await fetch(`${baseUrl}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            })
            setUsername('')
            setPasword('')
            const { data, code, status } = await response.json()
            if (code !== 200 && status !== "OK") {
                setMsg('Username or password is wrong')
                setOk(true)
                return
            }
            localStorage.setItem('token', data.token)
            localStorage.setItem('role', data.role)
            setOk(false)
            if(data.role == "admin"){
                route.push('/admin')
            }else if(data.role == "operator"){
                route.push('/operator')
            }
        } catch (err) {
            setMsg('Internal server error')
            setOk(true)
        }
    }

    return (
        <>
            <div className="w-full h-screen grid place-items-center h-screen">
                <div
                    className="bg-gradient-to-b from-blue-500 from-5% via-cyan-400 via-40% to-sky-300 to-100% w-[98%] h-[98vh] drop-shadow-2xl rounded-xl">
                    <div className="grid place-items-center h-full drop-shadow-2xl">
                        <div className="grid place-items-center w-[40rem] h-[35rem] bg-white rounded-xl drop-shadow-2xl">
                            {
                                ok ? <PopupCard message={msg} /> : <></>
                            }
                            <div className="h-96 w-80 text-center drop-shadow-xl pt-6">
                                <h2 className="font-bold text-5xl text-cyan-500">Login</h2>
                                <form className="my-8" action="">
                                    <input className="my-2 p-2 w-full rounded-full focus:outline-none focus:ring focus:ring-blue-300 border-2 border-blue-200" type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    <input className="my-2 p-2 w-full rounded-full focus:outline-none focus:ring focus:ring-blue-300 border-blue-200 border-2 border-blue-200" type="password" placeholder="password" value={password} onChange={(e) => setPasword(e.target.value)} />
                                    <input className="bg-blue-400 font-bold text-white cursor-pointer hover:bg-cyan-500 w-full h-10 mt-10 rounded-full drop-shadow-xl" type="submit" value="Login" onClick={postLogin} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}