import React, { useState } from 'react';
import Bac from "../../../public/bac.png";
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import GoogleIcon from "../../../public/googleIcon.png"

function Registration() {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log("Google OAuth Token:", tokenResponse);

            navigate("/CoreContentAfter");
        },
        onError: () => {
            console.log("Login Failed");
        },
        scope: "profile email",
        ux_mode: "redirect"
    });

    return (
        <div className="flex h-screen">

            <div className="hidden md:flex w-1/2 bg-gradient-to-r from-black to-blue-900 relative justify-center items-center">
                <img src={Bac} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <h1 className="text-white text-4xl font-bold relative z-10 text-center">
                    Создай свой аккаунт
                </h1>
            </div>


            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6">
                <h2 className="text-2xl font-semibold mb-6">Вход</h2>

                <form className="w-full max-w-sm space-y-4">
                    <input
                        type="email"
                        placeholder=" Электронная почта"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"

                    />
                    <input
                        type="password"
                        placeholder="Пороль"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />


                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="staySignedIn"
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                            className="w-4 h-4"
                        />
                        <label htmlFor="staySignedIn" className="text-gray-700 cursor-pointer">
                            Прочитайте и примите
                            <a href="/agreements" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ml-1">
                                Пользовательское соглашение Top-Class.
                            </a>
                        </label>

                    </div>

                    <button type="submit"
                        className={`w-full p-3 bg-black text-white rounded-lg transition ${isChecked ? "hover:bg-gray-800" : "opacity-50 cursor-not-allowed"}`} disabled={!isChecked}>
                        Войти
                    </button>

                    <div className="flex items-center my-4 w-full max-w-sm">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-400">или</span>
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    <button
                        type="button"
                        onClick={() => login()}
                        className={`w-full max-w-sm p-3 border border-gray-300 rounded-lg flex items-center justify-center transition gap-1.5  ${isChecked ? "hover:bg-gray-100" : "opacity-50 cursor-not-allowed"}`}
                        disabled={!isChecked}>
                        <img src={GoogleIcon} alt="Google" width={24} height={24} />
                        Войти через Google
                    </button>

                </form>
            </div>
        </div>
    );
}

export default Registration;
