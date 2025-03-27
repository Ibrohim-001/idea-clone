import { Link } from "react-router-dom";

type DiscoundCardType = {
    id: string,
    img: string,
    title: string,
    date: string,
    isInDiscountTab: boolean
}

const DiscountCard = ({ img, title, date, id, isInDiscountTab }: DiscoundCardType) => {

    return (
        <Link to={`products/${id}`} className="border p-4 rounded-lg mt-4">
            <img className={`${isInDiscountTab && 'rounded-lg'} `} src={img} alt={title} />
            <h2 className="font-bold mt-2">{title}</h2>
            {isInDiscountTab ?
                <time className="text-gray-600 text-[12px]" dateTime={date}>{date}</time>
                : <p className="text-[12px] mt-2">idea jamoasi ushbu farqlarni tushunishda Sizga yordam berishga tayyor! </p>
            }
        </Link>
    )
}

export default DiscountCard;