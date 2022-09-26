import React from 'react'

const Login = () => {
    return (
        <main className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
            <h1 className="font-bold text-2xl">Welcome Back 👋</h1>
            <div className="bg-white rounded p-12 shadow-lg mt-12">
                <div className='flex flex-col divide'>
                    <form className="flex flex-col" action="">
                        <label className="font-semibold text-xs" htmlFor="usernameField">Username or Email</label>
                        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" />
                        <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Password</label>
                        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" />
                        <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Login</button>
                    </form>

                    <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Login with Google</button>
                </div>

                <div className="flex mt-6 justify-center text-xs">
                    <a className="text-blue-400 hover:text-blue-500" href="#">Forgot Password</a>
                    <span className="mx-2 text-gray-300">/</span>
                    <a className="text-blue-400 hover:text-blue-500" href="#">Sign Up</a>
                </div>
            </div>

        </main>
    )
}

export default Login