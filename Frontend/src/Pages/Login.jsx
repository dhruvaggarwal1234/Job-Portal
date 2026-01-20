// import usenavigate from "react-router-dom"

import {Link} from "react-router"

export default function Login() {
  return (
    <div className="bg-blue-400 w-full h-screen flex justify-center items-center">
      <div className="bg-white w-[40%] h-[80%] rounded-3xl flex justify-evenly overflow-hidden">
        
        <div className="w-full h-full flex items flex-col bg-slate-200 px-10">
          {/* Heading */}
          <h3 className="mt-10 mb-5 text-2xl font-bold">JobPortal</h3>

          <div className="text-4xl font-bold flex items-center">Welcome Back!</div>
          <p className="mt-3 font-light">
            Please enter your details to sign in.
          </p>

          <form className="flex flex-col mt-10 gap-4">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Dhruv@example.com"
              className="w-full h-10 border-2 rounded-full px-4"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full h-10 border-2 rounded-full px-4"
              required
              minLength={8}
            />

            <button
              type="submit"
              className="bg-blue-500 w-32 h-10 rounded-2xl text-black font-bold hover:bg-blue-300 mt-4"
            >
              Submit
            </button>

            <div className="flex justify-between w-[90%] text-sm mt-3">
              <Link to="/signup"><p className="cursor-pointor hover:underline font-black"> Don’t have an account?</p></Link>
              <p className="cursor-pointer text-blue-600 hover:underline">
                Forgot password?
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
