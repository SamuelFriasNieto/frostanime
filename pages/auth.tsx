import Input from "@/components/input";
import { useState } from "react";

const Auth = () => {
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [pass,setPass] = useState('');

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.png')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo" className="h-14" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-1/4  rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            Sign in
                        </h2>
                        <div className="flex flex-col gap-4">
                            <Input label="Username" onChange={(ev: any) => setEmail(ev.target.value)} id="name" type="text" value={name}/>
                            <Input label="Email" onChange={(ev: any) => setName(ev.target.value)} id="email" type="text" value={email}/>
                            <Input label="Password" onChange={(ev: any) => setPass(ev.target.value)} id="pass" type="password" value={pass}/>
                        </div>
                        <button className="bg-rose-700 py-3 text-white rounded-md w-full mt-10 hover:bg-rose-800 transition">
                        Login 
                        </button>
                        <p className="text-neutral-500 mt-12">
                            First time using FrostAnime?
                            <span className="text-white ml-1 hover:underline cursor-pointer">
                                Create an account
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth