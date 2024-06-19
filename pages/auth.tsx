import Input from "@/components/input";
import { useCallback, useState } from "react";
import axios from "axios";

const Auth = () => {
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [pass,setPass] = useState('');

    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    }, [])

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register',{
                email,
                name,
                pass
            })
        } catch (error) {
            console.log(error)
        }
    },[email, name, pass])

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.png')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo" className="h-14" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-1/4 min-w-96  rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? 'Sign in' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant == 'register' && (
                                <Input label="Username" onChange={(ev: any) => setName(ev.target.value)} id="name" type="text" value={name}/>
                            )}
                            <Input label="Email" onChange={(ev: any) => setEmail(ev.target.value)} id="email" type="text" value={email}/>
                            <Input label="Password" onChange={(ev: any) => setPass(ev.target.value)} id="pass" type="password" value={pass}/>
                        </div>
                        <button onClick={register} className="bg-rose-700 py-3 text-white rounded-md w-full mt-10 hover:bg-rose-800 transition">
                            {variant == 'login' ? 'login' : 'Create an account'}
                        </button>
                        <p className="text-neutral-500 mt-12">
                            {variant == 'login' ? 'First time using FrostAnime?' : 'Already have an account?'}
                            
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                {variant == 'login' ? 'Create an account' : 'Login'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth