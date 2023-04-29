import DashboardNavbar from "../../components/dashboard_navbar";

export default function Dashboard() {
    return (
        <>
            <div className="bg-gradient-to-b from-blue-500 from-5% via-cyan-400 via-40% to-sky-300 to-100% drop-shadow-2xl" >
                <div className="w-full flex p-2">
                    <DashboardNavbar/>
                    <div className="w-full h-full drop-shadow-2xl rounded-xl">
                        <div className="flex">
                            <div className="w-full text-center">
                                <h2 className="font-bold text-2xl">Tentang Pengunjung</h2>
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
                                </div>
                                <h2 className="font-bold text-2xl">Tentang Wisata</h2>
                                <div className="p-4 text-justify">
                                    <div className="bg-white drop-shadow-2xl w-full h-80 rounded-xl p-4 overflow-auto">
                                        <div className="h-14 flex place-items-center rounded-2xl my-2 p-2 bg-gray-100">
                                            <div className="font-semibold w-full">Tanjung Karang</div>
                                            <div className="flex w-60">
                                                <div className="font-semibold ">4.5</div>
                                                <div className="flex drop-shadow-2xl">
                                                    <div className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-green-500 bg-green-300">View</div>
                                                    <div className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-sky-500 bg-sky-300">Edit</div>
                                                    <div className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-red-500 bg-red-300">Delete</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-14 flex place-items-center rounded-2xl my-2 p-2 bg-gray-100">
                                            <div className="font-semibold w-full">Tanjung Karang</div>
                                            <div className="flex w-60">
                                                <div className="font-semibold ">4.5</div>
                                                <div className="flex drop-shadow-2xl">
                                                    <div className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-green-500 bg-green-300">View</div>
                                                    <div className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-sky-500 bg-sky-300">Edit</div>
                                                    <div className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-red-500 bg-red-300">Delete</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-14 flex place-items-center rounded-2xl my-2 p-2 bg-gray-100">
                                            <div className="font-semibold w-full">Tanjung Karang</div>
                                            <div className="flex w-60">
                                                <div className="font-semibold ">4.5</div>
                                                <div className="flex drop-shadow-2xl">
                                                    <div className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-green-500 bg-green-300">View</div>
                                                    <div className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-sky-500 bg-sky-300">Edit</div>
                                                    <div className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-red-500 bg-red-300">Delete</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-14 flex place-items-center rounded-2xl my-2 p-2 bg-gray-100">
                                            <div className="font-semibold w-full">Tanjung Karang</div>
                                            <div className="flex w-60">
                                                <div className="font-semibold ">4.5</div>
                                                <div className="flex drop-shadow-2xl">
                                                    <div className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-green-500 bg-green-300">View</div>
                                                    <div className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-sky-500 bg-sky-300">Edit</div>
                                                    <div className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-red-500 bg-red-300">Delete</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-14 flex place-items-center rounded-2xl my-2 p-2 bg-gray-100">
                                            <div className="font-semibold w-full">Tanjung Karang</div>
                                            <div className="flex w-60">
                                                <div className="font-semibold ">4.5</div>
                                                <div className="flex drop-shadow-2xl">
                                                    <div className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-green-500 bg-green-300">View</div>
                                                    <div className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-sky-500 bg-sky-300">Edit</div>
                                                    <div className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-red-500 bg-red-300">Delete</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-14 flex place-items-center rounded-2xl my-2 p-2 bg-gray-100">
                                            <div className="font-semibold w-full">Tanjung Karang</div>
                                            <div className="flex w-60">
                                                <div className="font-semibold ">4.5</div>
                                                <div className="flex drop-shadow-2xl">
                                                    <div className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-green-500 bg-green-300">View</div>
                                                    <div className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-sky-500 bg-sky-300">Edit</div>
                                                    <div className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-red-500 bg-red-300">Delete</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-14 flex place-items-center rounded-2xl my-2 p-2 bg-gray-100">
                                            <div className="font-semibold w-full">Tanjung Karang</div>
                                            <div className="flex w-60">
                                                <div className="font-semibold ">4.5</div>
                                                <div className="flex drop-shadow-2xl">
                                                    <div className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-green-500 bg-green-300">View</div>
                                                    <div className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-sky-500 bg-sky-300">Edit</div>
                                                    <div className="mx-1 font-semibold hover:font-white cursor-pointer rounded-2xl hover:text-white border-2 px-2 hover:bg-red-500 bg-red-300">Delete</div>
                                                </div>
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