import { useRouter } from "next/router"
import Link from 'next/link'

export default function DashboardNavbarAdmin() {
    const router = useRouter()

    const logout = () => {
        localStorage.clear()
        router.push("/login")
    }

    return (
        <>
            <div className="h-[96vh] border-2 bg-white p-2 mr-2 w-60 text-white rounded-xl drop-shadow-2xl">
                <div className="text-slate-700 text-center text-2xl font-bold my-2">Admin</div>
                <div className="text-slate-700 px-2 cursor-pointer drop-shadow-xl hover:font-semibold">
                    <Link href={"/admin"} >Dashboard</Link>
                </div>
                <div className="text-slate-700 px-2 cursor-pointer drop-shadow-xl hover:font-semibold">
                    <Link href={'/admin/form_add'}>Create</Link>
                </div>
                <div className="text-slate-700 px-2 cursor-pointer drop-shadow-xl hover:font-semibold" onClick={logout} >Logout</div>
            </div>
        </>
    )
}