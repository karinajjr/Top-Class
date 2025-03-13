import React, { useEffect } from "react";

function Questions() {
    useEffect(() => {
        let elements = document.querySelectorAll("[data-menu]");

        function toggleMenu(event) {
            let main = event.currentTarget;
            let element = main.closest("#mainHeading").parentElement;
            let child = element.querySelector("#menu");
            let h = element.querySelector("#mainHeading > div > p");
            let icon = main.querySelector("i");

            h.classList.toggle("font-semibold");
            child.classList.toggle("hidden");

            if (icon.classList.contains("bi-plus")) {
                icon.classList.remove("bi-plus");
                icon.classList.add("bi-x");
            } else {
                icon.classList.remove("bi-x");
                icon.classList.add("bi-plus");
            }
        }

        elements.forEach((el) => el.addEventListener("click", toggleMenu));

        return () => {
            elements.forEach((el) => el.removeEventListener("click", toggleMenu));
        };
    }, []);

    return (

        <div className="lg:container md:px-6 w-full bg-white p-6 shadow-md rounded-lg px-4">

            <div className=" w-full ">
                <h1 className="text-2xl font-semibold mb-4" >Вопросы?</h1>
                <hr className="w-full  my-3" />

                <div className="w-full md:px-2">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="flex items-center">
                            <p className="dark:text-black font-medium text-base leading-6 md:leading-4 text-gray-800">
                                How do I know if a product is available in boutiques?
                            </p>
                        </div>

                        <button aria-label="toggler" data-menu className="flex items-center">
                            <i className="bi bi-plus transition-all duration-700 text-3xl"></i>
                        </button>
                    </div>
                    <div id="menu" className="hidden  w-full">
                        <p className="text-sm text-black ">
                            Remember you can query the status of your orders any time in My Orders in the My Account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your email address and order number.
                        </p>
                    </div>
                </div>

                <hr className="w-full my-3" />


                <div className="w-full md:px-2">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="flex items-center">
                            <p className="dark:text-black font-medium text-base leading-6 md:leading-4 text-gray-800">
                                How do I know if a product is available in boutiques?
                            </p>
                        </div>

                        <button aria-label="toggler" data-menu className="flex items-center">
                            <i className="bi bi-plus transition-all duration-700 text-3xl"></i>
                        </button>
                    </div>
                    <div id="menu" className="hidden  w-full">
                        <p className="text-sm text-black ">
                            Remember you can query the status of your orders any time in My Orders in the My Account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your email address and order number.
                        </p>
                    </div>
                </div>

                <hr className="w-full my-3" />


                <div className="w-full md:px-2">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="flex items-center">
                            <p className="dark:text-black font-medium text-base leading-6 md:leading-4 text-gray-800">
                                How do I know if a product is available in boutiques?
                            </p>
                        </div>

                        <button aria-label="toggler" data-menu className="flex items-center">
                            <i className="bi bi-plus transition-all duration-700 text-3xl"></i>
                        </button>
                    </div>
                    <div id="menu" className="hidden  w-full">
                        <p className="text-sm text-black ">
                            Remember you can query the status of your orders any time in My Orders in the My Account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your email address and order number.
                        </p>
                    </div>
                </div>

                <hr className="w-full my-3" />


                <div className="w-full md:px-2">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="flex items-center">
                            <p className="dark:text-black font-medium text-base leading-6 md:leading-4 text-gray-800">
                                How do I know if a product is available in boutiques?
                            </p>
                        </div>

                        <button aria-label="toggler" data-menu className="flex items-center">
                            <i className="bi bi-plus transition-all duration-700 text-3xl"></i>
                        </button>
                    </div>
                    <div id="menu" className="hidden  w-full">
                        <p className="text-sm text-black ">
                            Remember you can query the status of your orders any time in My Orders in the My Account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your email address and order number.
                        </p>
                    </div>
                </div>

                <hr className="w-full my-3" />


                <div className="w-full md:px-2">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="flex items-center">
                            <p className="dark:text-black font-medium text-base leading-6 md:leading-4 text-gray-800">
                                How do I know if a product is available in boutiques?
                            </p>
                        </div>

                        <button aria-label="toggler" data-menu className="flex items-center">
                            <i className="bi bi-plus transition-all duration-700 text-3xl"></i>
                        </button>
                    </div>
                    <div id="menu" className="hidden  w-full">
                        <p className="text-sm text-black ">
                            Remember you can query the status of your orders any time in My Orders in the My Account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your email address and order number.
                        </p>
                    </div>
                </div>


            

        




            </div>
        </div>

    );
}

export default Questions;
