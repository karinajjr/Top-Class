/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../public/logo2.png";
import Payme from "../../../public/payme.png";

const Layout = ({ children }) => {
    const location = useLocation();
    return (
        <div className='min-h-screen flex flex-col'>
            {/* Header */}
            <header className='bg-black text-white'>
                <div className='container mx-auto py-4 flex justify-between items-center'>
                    <div className='flex'>
                        <Link to='/' className='flex text-2xl font-bold'>
                            <img src={logo} alt='Logo' className='w-8 h-8 mr-2' />
                            Top-class
                        </Link>
                        <div className='relative ml-5'>
                            <div className='flex items-center bg-white text-gray-500 py-1.5 px-2 rounded-lg'>
                                <i className='bi bi-search text-gray-500 mr-2'></i>
                                <input
                                    type='text'
                                    placeholder='Какой курс вы ищите?'
                                    className='bg-transparent flex-1 outline-none placeholder-gray-500'
                                />
                            </div>
                        </div>
                    </div>

                    {/* Авторизация */}
                    <div className='flex items-center space-x-2'>
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="border px-2 py-1 rounded-md border-white hover:underline"
                            >
                                RU
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box  w-10 p-2 shadow">
                                <li className="text-black"> RU</li>
                                <li className="text-black">EN</li>
                            </ul>
                        </div>
                        <Link
                            className='border px-2 py-1 rounded-md border-white hover:underline'
                            to='/registration'
                        >
                            Login
                        </Link>
                    </div>
                </div>

                {/* Навигация */}
                <nav className='bg-black'>
                    <div className='container mx-auto py-3 flex justify-start space-x-5 text-sm'>
                        {[
                            "/",
                            "/Game",
                            "/Graphics",
                            "/Engine",
                            "/Portfolio",
                            "/Jobs",
                            "/Customer",
                        ].map((path) => (
                            <Link
                                key={path}
                                to={path}
                                className={`relative ${location.pathname === path ? "text-yellow-500" : "text-white"
                                    }`}
                            >
                                {path.replace("/", "") || "Home"}
                                {location.pathname === path && (
                                    <span className='absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500'></span>
                                )}
                            </Link>
                        ))}
                    </div>
                </nav>
            </header>

            <main className='flex-1'>{children}</main>

            {/* Footer */}
            <footer className='bg-black text-white py-8 mt-auto'>
                <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm'>
                 

                    <div className='flex flex-col'>
                        <Link className='hover:underline' to='/agreements'>
                            Соглашение о конфиденциальности
                        </Link>
                        <Link className='hover:underline' to='/conditions'>
                            Условия использования
                        </Link>
                    </div>

                    <div>
                        <h1 className='font-semibold'>Yuridik manzili:</h1>
                        <p>Yangiobod(Dom)MFY Yangiobod ko'chasi, 42-uy</p>
                    </div>
                </div>

                <div className='border-t border-gray-600 mt-4'></div>

                <div className='container mx-auto px-4 mt-4 flex flex-col md:flex-row items-center justify-between text-sm'>
                    <div className='flex'>
                        <img src={logo} alt='Logo' className='w-7 h-7 mr-2' />
                        <p className='font-semibold text-xl'>Top-Class</p>
                    </div>

                    <div>
                        <img src={Payme} alt='Payment Method 1' className='h-20 w-20' />
                    </div>

                    <p className='mt-4 md:mt-0'>"WeaYaa" MCHJ</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;