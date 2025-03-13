import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import Questions from './Questions';
import videoFile from "../../../public/0312.mp4";
import video from "../../../public/0312k.mp4";

import jii from "../../../public/jii.jpg";
import one from "../../../public/1.png";
import two from "../../../public/2.png";
import three from "../../../public/3.png";
import four from "../../../public/4.png";
import five from "../../../public/5.png";
import six from "../../../public/6.png";
import seven from "../../../public/7.png";
import eight from "../../../public/8.png";
import nine from "../../../public/9.png";
import ten from "../../../public/10.png";


function CoreContent() {


  const [activeCategory, setActiveCategory] = useState("3D MAX");
  const categories = [
    // 1
    {
      name: "3D MAX",
      data: [
        {
          id: 1,
          title: "Текстура уровня ААА, которые могут легко создать даже нов..",
          description: "3D-художник Пак Хи До",
          image: one,
          link: "/PageOne",
        },
        {
          id: 2,
          title: "Текстура уровня ААА, которые могут легко создать даже нов..",
          description: "3D-художник Пак Хи До",
          image: two,
          link: "/PageTwo",

        },
        {
          id: 3,
          title: "Реалистичное тексткрирование с помошю Substance Painter",
          description: "3D-художник Пак Хи До",
          image: three,
          link: "/PageThree",
        },
        {
          id: 3,
          title: "Реалистичное тексткрирование с помошю Substance Painter",
          description: "3D-художник Пак Хи До",
          image: three,
          link: "/PageThree",
        },

        {
          id: 6,
          title: "Видео о 3D Modelоплавдалпьльпио 2",
          description: "3D-художник Пак Хи До",
          image: six,
          link: "/PageSix",
        },
        {
          id: 6,
          title: "Видео о 3D Modelоплавдалпьльпио 2",
          description: "3D-художник Пак Хи До",
          image: six,
          link: "/PageSix",
        },
      ],
    },
    // 2
    {
      name: "3D Model",
      data: [
        {
          id: 3,
          title: "Реалистичное тексткрирование с помошю Substance Painter",
          description: "3D-художник Пак Хи До",
          image: three,
          link: "/PageThree",
        },
        {
          id: 4,
          title: "Реалистичное тексткрирование с помошю Substance Painter",
          description: "3D-художник Пак Хи До",
          image: four,
          link: "/PageFour",
        },
        {
          id: 6,
          title: "Видео о 3D Modelоплавдалпьльпио 2",
          description: "3D-художник Пак Хи До",
          image: six,
          link: "/PageSix",
        },
        {
          id: 6,
          title: "Видео о 3D Modelоплавдалпьльпио 2",
          description: "3D-художник Пак Хи До",
          image: six,
          link: "/PageSix",
        },
      ],
    },
    // 3
    {
      name: "Blender",
      data: [
        {
          id: 5,
          title: "Видео о 3D Modelбвдальипдбипльбам 1",
          description: "3D-художник Пак Хи До",
          image: five,
          link: "/PageFive",
        },
        {
          id: 6,
          title: "Видео о 3D Modelоплавдалпьльпио 2",
          description: "3D-художник Пак Хи До",
          image: six,
          link: "/PageSix",
        },
      ],
    },
    // 4
    {
      name: "Uniti",
      data: [
        {
          id: 7,
          title: "Видео о 3D Modelбвдальипдбипльбам 1",
          description: "3D-художник Пак Хи До",
          image: seven,
          link: "/PageSeven",
        },
        {
          id: 5,
          title: "Видео о 3D Modelбвдальипдбипльбам 1",
          description: "3D-художник Пак Хи До",
          image: five,
          link: "/PageFive",
        },
        {
          id: 5,
          title: "Видео о 3D Modelбвдальипдбипльбам 1",
          description: "3D-художник Пак Хи До",
          image: five,
          link: "/PageFive",
        },
        {
          id: 8,
          title: "Видео о 3D Modelоплавдалпьльпио 2",
          description: "3D-художник Пак Хи До",
          image: eight,
          link: "/PageEight",
        },
      ],
    },
    // 5
    {
      name: "grafic",
      data: [
        {
          id: 9,
          title: "Видео о 3D Modelбвдальипдбипльбам 1",
          description: "3D-художник Пак Хи До",
          image: nine,
          link: "/PageNine",
        },

        {
          id: 8,
          title: "Видео о 3D Modelоплавдалпьльпио 2",
          description: "3D-художник Пак Хи До",
          image: eight,
          link: "/PageEight",
        },
        {
          id: 8,
          title: "Видео о 3D Modelоплавдалпьльпио 2",
          description: "3D-художник Пак Хи До",
          image: eight,
          link: "/PageEight",
        },
        {
          id: 10,
          title: "Видео о 3D Modelоплавдалпьльпио 2",
          description: "3D-художник Пак Хи До",
          image: ten,
          link: "/PageTen",
        },
      ],
    },

  ];
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <main >
        <div className='bg-black  '>

          <div className='flex justify-evenly container mx-auto ' >
            <div className="container mx-auto flex flex-col md:space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8 justify-evenly">
              <div className="text-center lg:text-left">
                <h1 className="text-white mt-4 text-5xl font-semibold">
                  Создавайте 3D-графику, <br /> которая работает
                </h1>
                <h1 className="text-white mt-4 text-2xl">Создавайте 3D-графику, которая работает</h1>

                <div className="mt-8">
                  <video autoPlay loop muted playsInline width="600" className="rounded-[60px]">
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              </div>

              <div className="rounded-t-3xl">
                <video autoPlay loop muted playsInline width="600" className="rounded-t-[60px]">
                  <source src={videoFile} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>


        <div className='bg-white'>


        






          <div className="bg-[#dfdede] container mx-auto px-12 py-12 flex rounded-3xl mt-16">
            <div>
              <img src={jii} alt="" className='w-96 rounded-xl' />
            </div>


          </div>

          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 ">
            {/* Кнопки */}
            <div className="overflow-x-auto ">
              <div className="flex justify-center space-x-4 pb-6 mt-4">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => handleCategoryChange(category.name)}
                    className={`whitespace-nowrap px-4 py-2 rounded transition ${activeCategory === category.name
                      ? "bg-[#646464] text-white"
                      : "bg-[#E2E2E2] text-[#404040]"
                      }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Карточки */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories
                .find((category) => category.name === activeCategory)
                ?.data.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link || "#"}
                    className="block p-2 rounded-lg shadow hover:shadow-lg transition bg-white w-full"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover rounded"
                    />
                    <h3 className="font-semibold text-lg mt-2">{item.title}</h3>
                    <p className="text-[#555555]">{item.description}</p>
                  </Link>
                ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-center lg:py-16 md:py-12 py-8 px-4 md:px-10 lg:px-20 gap-10">
            {/* FAQ  */}
            <div className="md:w-1/2 w-full">
              <Questions />
            </div>

            {/* Contact Us  */}
            <div className="md:w-1/2 w-full bg-white p-6 shadow-md rounded-lg">
              <h1 className="text-2xl font-semibold mb-4">Свезаться с нами?</h1>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Имя Фамилия"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                />
                <input
                  type="text"
                  placeholder="Номер"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                />
                <textarea
                  placeholder="Ваша сообщения"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                ></textarea>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 text-sm"
                  >
                    Отправить
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* контакт end */}
        </div>
      </main>


      {/* контакт end */}






    </>
  )
}

export default CoreContent