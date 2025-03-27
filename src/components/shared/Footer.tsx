import { Link } from "react-router-dom"
import { InstaLogo, TGLogo, TwitterLogo } from "../icons"

const Footer = () => {
    return (
        <footer className="bg-[#282F3C] pt-8">
            <div className="container mx-auto px-8">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center gap-4">
                        <img src="/vite.svg" alt="vite logo" />
                        <div className="flex items-center gap-2">
                            <Link className="border p-2 rounded-full border-[#444753] hover:border-white" to={''}>
                                <TGLogo />
                            </Link>
                            <Link to={''} className="border p-2 rounded-full border-[#444753] hover:border-white">
                                <InstaLogo />
                            </Link>
                            <Link to={''} className="border p-2 rounded-full border-[#444753] hover:border-white">
                                <TwitterLogo />
                            </Link>
                        </div>
                    </div>
                    <ul className="[&>li]:text-gray-500 [&>li]:text-[13px]">
                        <li className="font-bold text-[18px] mb-2">
                            Покупателям
                        </li>
                        <li>
                            <Link to={'Вопросы и ответы'}>Вопросы и ответы</Link>
                        </li>
                        <li >
                            <Link to={'/'}>Как сделать заказ на сайте</Link>
                        </li>
                    </ul>
                    <ul className="[&>li]:text-gray-500 [&>li]:text-[13px]">
                        <li className="font-bold text-[18px] mb-2">
                            Покупателям
                        </li>
                        <li>
                            <Link to={'Вопросы и ответы'}>Вопросы и ответы</Link>
                        </li>
                        <li >
                            <Link to={'/'}>Как сделать заказ на сайте</Link>
                        </li>
                    </ul>
                    <ul className="[&>li]:text-gray-500 [&>li]:text-[13px]">
                        <li className="font-bold text-[18px] mb-2">
                            Покупателям
                        </li>
                        <li>
                            <Link to={'Вопросы и ответы'}>Вопросы и ответы</Link>
                        </li>
                        <li >
                            <Link to={'/'}>Как сделать заказ на сайте</Link>
                        </li>
                    </ul>
                    <ul className="[&>li]:text-gray-500 [&>li]:text-[13px]">
                        <li className="font-bold text-[18px] mb-2">
                            Покупателям
                        </li>
                        <li>
                            <Link to={'Вопросы и ответы'}>Вопросы и ответы</Link>
                        </li>
                        <li >
                            <Link to={'/'}>Как сделать заказ на сайте</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-white py-2 mt-3">
                <div className="flex items-center justify-between container mx-auto px-8">
                    <p className="text-gray-600 font-bold text-[12px]">2024 © «idea.uz - интернет-магазин»</p>
                    <Link className="flex items-center gap-3 text-gray-600 font-bold text-[12px]" to="">Разработка <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 268"><path fill="#5A3E85" d="M17.458 0L0 46.556v186.201h63.983v34.934h34.931l34.898-34.934h52.36L256 162.954V0zm23.259 23.263H232.73v128.029l-40.739 40.741H128L93.113 226.92v-34.886H40.717zm64.008 116.405H128V69.844h-23.275zm63.997 0h23.27V69.844h-23.27z" /></svg> </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer