import DashboardNavbar from "../../components/dashboard_navbar";

export default function FormAdd() {
    return (
        <>
            <div className="bg-gradient-to-b from-blue-500 from-5% via-cyan-400 via-40% to-sky-300 to-100% drop-shadow-2xl" >
                <div className="w-full flex p-2">
                    <DashboardNavbar />
                    <div className="w-full h-full drop-shadow-2xl rounded-xl">
                        <div className="flex">
                            <div className="w-full text-center">
                                <h2 className="font-bold text-2xl">Tentang Pengunjung</h2>
                                <div className="p-4">
                                    <div className="bg-white drop-shadow-2xl w-full h-screen rounded-xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}