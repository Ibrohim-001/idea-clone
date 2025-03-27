import { useTranslation } from "react-i18next";
import { Map, Percent, Phone, Heart, Bag, Scales, User, Search } from "../icons";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ModeToggle } from "./mode-toggle";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isActiveMenu, setIsActiveMenu] = React.useState(false)
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <nav id="navbar" className="container mx-auto px-8">
                <div className="flex py-1 border-b justify-between items-center">
                    <div>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-3">
                                <Percent color="red" />
                                <p>{t('discount')}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Map color="red" />
                                <p>{t('Магазины')}</p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-3">
                                <Phone color="red" />
                                <p>71 230 77 99</p>
                            </div>
                            <Select onValueChange={changeLanguage} defaultValue="uz">
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="uz">O'zbekcha</SelectItem>
                                        <SelectItem value="ru">Русский</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <ModeToggle />
                        </div>
                    </div>
                </div>
                <div className="container py-4 mx-auto flex justify-between items-center">
                    <Link to='/'>
                        <img src="/vite.svg" alt="Vite Logo" />
                    </Link>
                    <Button onClick={() => setIsActiveMenu(!isActiveMenu)}>{t('Каталог товаров')}
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5 2H6m5 5H3.5m5 5h-8" /></svg>
                    </Button>
                    <div className="relative">
                        <Input className="w-[600px] pr-8" type="email" placeholder={t('search')} />
                        <Search className="absolute top-[8px] right-[8px]" />
                    </div>

                    <div className="flex items-center gap-4">
                        <Heart />
                        <Link to={'/products/cart'}>
                            <Bag />
                        </Link>
                        <Scales />
                        <User />
                    </div>
                </div>
            </nav>
            {isActiveMenu &&
                <div className="max-w-[1300px] absolute left-1/2 transform -translate-x-1/2 top-[120px] z-50 bg-white border w-full h-[400px]">
                    menus
                </div>
            }
        </>
    )
}

export default Navbar;