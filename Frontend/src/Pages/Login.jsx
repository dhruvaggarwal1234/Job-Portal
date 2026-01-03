

export default function Login() {

    return (

        <div className="bg-blue-400 w-full h-screen flex justify-center items-center">

            <div className="bg-white w-[80%] h-[80%] rounded-3xl shadow-md  ring-4 ring-blue-800 flex  justify-evenly overflow-hidden 
            
            ">  

                {/* Right Side */}
                <div className="w-full h-full ">Right</div>


                {/*Left Side  */}
                <div className="w-full h-full flex items-baseline flex-col">
                    {/* This is heading */}
                    <h3 className="m-[10%] ml-10  mb-5 text-2xl font-bold">JobPortal</h3>
                  
                    <div className="text-4xl font-bold" >Welcome Back!</div>
                    <p className="mt-3 font-light">Please enter your details to Sign in.</p>
                    
                    <form className="flex flex-col m-10  w-full gap-3">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email" className="w-[80%] h-10.5 border-2" required />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className="w-[80%] h-10.5 border-2" required minLength={8}/>

                    </form>
                </div>
            </div>
        </div>
    );
}