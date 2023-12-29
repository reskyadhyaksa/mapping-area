export default function LoginPage() {
    return <>
        <div className="flex bg-white border-2 h-[95vh] justify-center items-center">
            <div className="flex flex-col border-2 rounded-md items-center px-7 py-5 gap-5">
                <h1 className="font-bold text-2xl">Login Page</h1>

                <div className="flex flex-col w-full">
                    <p className="w-full font-bold">Email</p>
                    <input className="nama bg-gray-200 focus:border-none rounded-md w-72 px-2" type="text"/>
                </div>

                <div>
                    <p className="w-full font-bold">Password</p>
                    <input className="nama bg-gray-200 focus:border-none rounded-md w-72 px-2" type="text"/>
                </div>
                
                <a href="/admin" className="font-bold bg-[#232323] text-white px-10 py-1 rounded-md ">LOGIN</a>
            </div>
            {/* <div>2</div> */}
        </div>
    </>
}