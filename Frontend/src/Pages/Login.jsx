import Bg_Img from "../assets/BG_login.jpg"

export default function Login() {

    return (

        <div className="bg-blue-400 w-full h-screen flex justify-center items-center">

            <div className="bg-white w-[80%] h-[80%] rounded-3xl flex  justify-evenly overflow-hidden 
            
            ">

                {/* Right Side */}


                <div className="flex w-full h-full bg-slate-800"><div className="flex w-full h-full  opacity-40">
                        <img src={Bg_Img} alt="" />

                        <div>JobPortal</div>
                        
                     

                </div>
                </div>



                {/*Left Side  */}
                <div className="w-full h-full flex items-baseline bg- flex-col bg-slate-200">
                    {/* This is heading */}
                    <h3 className="m-[10%] ml-10  mb-5 text-2xl font-bold">JobPortal</h3>

                    <div className="text-4xl font-bold" >Welcome Back!</div>
                    <p className="mt-3 font-light">Please enter your details to Sign in.</p>

                    <form className="flex flex-col m-10  w-full gap-3 ">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email" className="w-[80%] h-10.5 border-2 rounded-full" required autoSave="false" defaultValue={false} />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className="w-[80%] rounded-full h-10.5 border-2" required minLength={8} />

                    </form>
                </div>
            </div>
        </div>
    );
}