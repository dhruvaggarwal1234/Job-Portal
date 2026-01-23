import React from "react";
import { Link } from "react-router";

function LoginForm() {
  return (
    <div className="bg-[#F8FAFC] w-[420px] max-w-full rounded-3xl shadow-xl overflow-hidden">
      
      <div className="w-full h-full flex flex-col bg-white px-10 py-10">
        
        {/* Brand */}
        <h3 className="text-2xl font-extrabold text-[#101FF2]">
          JobPortal
        </h3>

        {/* Heading */}
        <h2 className="mt-8 text-3xl font-bold text-[#0F172A]">
          Welcome Back!
        </h2>
        <p className="mt-2 text-sm text-[#64748B]">
          Please enter your details to sign in.
        </p>

        {/* Form */}
        <form className="flex flex-col mt-8 gap-5">
          
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-[#334155]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="dhruv@example.com"
              className="h-11 rounded-xl border border-[#E2E8F0] px-4 text-sm
                         focus:outline-none focus:ring-2 focus:ring-[#101FF2]/40
                         focus:border-[#101FF2] transition"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-[#334155]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="h-11 rounded-xl border border-[#E2E8F0] px-4 text-sm
                         focus:outline-none focus:ring-2 focus:ring-[#101FF2]/40
                         focus:border-[#101FF2] transition"
              required
              minLength={8}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-4 h-11 rounded-xl bg-[#101FF2] text-white font-semibold
                       hover:bg-[#0E1CE0] active:scale-[0.98] transition-all"
          >
            Sign In
          </button>

          {/* Footer */}
          <div className="flex justify-between items-center text-sm mt-2">
            <Link
              to="/signup"
              className="text-[#334155] hover:text-[#101FF2] hover:underline transition"
            >
              Don’t have an account?
            </Link>

            <button
              type="button"
              className="text-[#101FF2] font-medium hover:underline"
            >
              Forgot password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
