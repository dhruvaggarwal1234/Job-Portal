import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="bg-blue-400 w-full h-screen flex justify-center items-center">
      <div className="bg-white w-[40%] h-[95%] rounded-3xl flex justify-evenly overflow-hidden">
        
        <div className="w-full h-full flex flex-col bg-slate-200 px-10">
          {/* Heading */}
          <h3 className="mt-10 mb-5 text-2xl font-bold">JobPortal</h3>

          <div className="text-4xl font-bold">Create Account</div>
          <p className="mt-3 font-light">
            Please enter your details to sign up.
          </p>

          <form className="flex flex-col mt-7 gap-3.5">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              placeholder="Dhruv Aggarwal"
              className="w-full h-9 border-2 rounded-full px-4"
              required
            />

            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="dhruv@example.com"
              className="w-full h-9 border-2 rounded-full px-4"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full h-9 border-2 rounded-full px-4"
              required
              minLength={8}
            />

            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              id="confirm_password"
              placeholder="Confirm Password"
              className="w-full h-9 border-2 rounded-full px-4"
              required
              minLength={8}
            />

            <button
              type="submit"
              className="bg-blue-500 w-32 h-9 rounded-2xl text-black font-bold hover:bg-blue-300 mt-4 "
            >
              Submit
            </button>

            <div className="flex justify-between w-[90%] text-sm mt-3">
              <Link to="/">
                <p className="cursor-pointer hover:underline text-[1rem] mb-5 font-black">
                  Have an account?
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
