export default function Login() {
    return (
        <>
            <div class="w-full h-screen grid place-items-center h-screen">
                <div
                    class="bg-gradient-to-b from-blue-500 from-5% via-cyan-400 via-40% to-sky-300 to-100% w-[98%] h-[98vh] drop-shadow-2xl rounded-xl">
                    <div class="grid place-items-center h-full drop-shadow-2xl">
                        <div class="grid place-items-center w-[40rem] h-[35rem] bg-white rounded-xl drop-shadow-2xl">
                            <div class="h-96 w-80 text-center drop-shadow-xl pt-6">
                                <h2 class="font-bold text-5xl text-cyan-500">Login</h2>
                                <form class="my-8" action="">
                                    <input class="my-2 p-2 w-full rounded-full focus:outline-none focus:ring focus:ring-blue-300 border-2 border-blue-200" type="text" placeholder="username" required />
                                    <input class="my-2 p-2 w-full rounded-full focus:outline-none focus:ring focus:ring-blue-300 border-blue-200 border-2 border-blue-200" type="password" placeholder="password" required />
                                    <input class="bg-blue-400 font-bold text-white cursor-pointer hover:bg-cyan-500 w-full h-10 mt-10 rounded-full drop-shadow-xl" type="submit" value="Login" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}