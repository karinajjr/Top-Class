import React from 'react'
import Kartina from "../../../public/kartina.jpg"
import statistika from "../../../public/statistika.png"
import { Link } from "react-router-dom";
import Modal from "../CourseMain/CourseIfsef"

function PageOne() {
  return (

    <main>
      <div className="relative w-full h-[400px] md:h-[600px]">
        <img src={Kartina} alt="" className="w-full h-full object-cover" />
        <div className="absolute bottom-0 w-full p-2 bg-gradient-to-t from-black via-black/80 via-black/50 to-transparent">
          <h1 className="font-semibold text-center text-white text-lg sm:text-2xl md:text-4xl leading-snug md:leading-relaxed">
            Практический проект по созданию игры, включающий <br className="hidden md:block" />
            планирование, дизайн и продвижение <br className="hidden md:block" />
            с использованием ИИ.
          </h1>
        </div>
      </div>

      <div className="bg-black flex flex-col items-center px-4 md:px-8">
        <p className="text-white text-center text-lg sm:text-xl md:text-2xl">Продюсер игры Reactor</p>
        <div className="flex gap-4 mt-6 ">
          <div>
            <i className="bi bi-clock text-white text-2xl bg-[#747474] mt-4 rounded-lg px-3 py-2 mx-4 "></i>
            <p className='text-white mt-2 text-[12px] text-center'>Пожизненные <br /> просмотр</p>
          </div>
          <div>
            <i className="bi bi-arrow-repeat text-white text-2xl bg-[#747474] mt-4 rounded-lg px-3 py-2 mx-4 "></i>
            <p className='text-white mt-2 text-[12px] text-center'>Бронирование <br /> курса</p>
          </div>
          <div>
            <i className="bi bi-ticket-perforated text-white text-2xl bg-[#747474] mt-4 rounded-lg px-3 py-2 mx-4 "></i>
            <p className='text-white mt-2 text-[12px] text-center'>Скидка <br /> по купону</p>
          </div>
        </div>

        <div className="text-white text-lg mt-3">
          <span className="text-[#9A9A9A] line-through">242 000 сум</span> максимум{" "}
          <span className="text-red-500 font-bold">4%</span> скидка{" "}
          <span className="text-white font-bold">232 000 сум</span>
        </div>

        <div className='flex '>

          <Link className="btn mt-8 rounded px-16 py-2.5 mr-4" to=''>
            Купить
          </Link>

          <button className=" border border-white text-white mt-8 rounded px-12 py-2.5" onClick={() => document.getElementById('my_modal_3').showModal()}> Открытый урок</button>

          <dialog id="my_modal_3" className="modal">
            <div className="modal-box w-full h-full max-w-[1000px] max-h-[500px] p-6 rounded-lg bg-white shadow-lg md:rounded-xl ">
              <form method="dialog" className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-bold">3D курс</h1>
                <button className="btn btn-sm btn-circle btn-ghost">✕</button>
              </form>
              <Modal />
            </div>
          </dialog>




        </div>



    



        <div className="bg-black text-white p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-4">Подробности о курсе</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <i className="bi bi-clock text-white "></i>
                Видео открывается после оплаты
              </li>
              <li className="flex items-center gap-2">
                <img src={statistika} alt="" className=" w-[15px]" />
                Видение-Основы
              </li>
              <li className="flex items-center gap-2">
                <i class="bi bi-play-circle"></i>
                Всего 41 раз
              </li>
              <li className="flex items-center gap-2">
                <i class="bi bi-volume-up"></i>
                Русский
              </li>
              <li className="flex items-center gap-2">
                <i class="bi bi-file-earmark"></i>
                Лекционные материалы включены
              </li>
            </ul>
          </div>

          <div className="hidden md:block w-px bg-[#B9B9B9] h-[190px]"></div>

          <div className="flex-1">
            <div className='flex justify-between '>
              <p className="text-gray-300">
                Скидка до <span className="text-red-500">4%</span>
              </p>
              <p className="text-lg ">
                <span className="text-[#9A9A9A] line-through">242 000 сум</span>{" "}
                <span className="text-white font-semibold">232 000 сум</span>
              </p>

            </div>

            <hr className="my-2 border-[#B9B9B9]" />
            <p className="text-gray-300">
              Купон на скидку <span className="text-red-500">максимум %10 000 сум</span>
            </p>
            <hr className="my-2 border-[#B9B9B9]" />
            <p className="text-[#BBBBBB] text-sm">
              *Обязательно ознакомьтесь с мерами предосторожности для каждого продукта внизу
            </p>
          </div>

        </div>


      </div>



    </main>




  )
}

export default PageOne