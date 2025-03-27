import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-[100vh] gap-16">
            <img src="https://idea.uz/_next/image?url=%2Fimg%2Fothers%2Fwarning.png&w=384&q=75" alt="" />
            <div>
                <p className="text-2xl font-semibold">Страница не найдена</p>
                <p className="mt-2">Похоже страница была удалена или перемещена по новому адресу</p>
                <Link to='/'>
                    <Button className="mt-8">Перейти в главное меню</Button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound