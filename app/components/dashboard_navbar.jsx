export default function DashboardNavbar() {
    return (
        <>
            <div className="border-2 bg-white p-2 mr-2 w-60 text-white rounded-xl drop-shadow-2xl">
                <div className="text-slate-700 text-center text-2xl font-bold my-2">OPERATOR</div>
                <div className="text-slate-700 px-2 cursor-pointer drop-shadow-xl hover:font-semibold">Dashboard</div>
                <div className="text-slate-700 px-2 cursor-pointer drop-shadow-xl hover:font-semibold">Promo</div>
                <div className="text-slate-700 px-2 cursor-pointer drop-shadow-xl hover:font-semibold">Tambah Tempat</div>
                <div className="text-slate-700 px-2 cursor-pointer drop-shadow-xl hover:font-semibold">Logout</div>
            </div>
        </>
    )
}