import {
    Breadcrumb as Br,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { HomeIcon } from "../icons"
import { useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next";


const Breadcrumb = () => {
    const location = useLocation();
    let mainPage = location.pathname.split('/')[1]
    let productName = location.pathname.split('/')[2].replace('%20', ' ')
    const { t } = useTranslation()

    return (
        <Br className="mt-4">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">
                        <HomeIcon />
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/product" className="capitalize">
                        {t(`${mainPage}`)}
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage className="capitalize">{productName}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Br>
    )
}

export default Breadcrumb;