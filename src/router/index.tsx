import { Route, Routes } from "react-router-dom"
import Home from "@/pages/home"
import Snowfall from "react-snowfall"
import Footer from "@/components/shared/Footer"
import ProductSlug from "@/pages/home/slug/slug"
import Cart from "@/pages/home/cart"
import NotFound from "@/pages/home/NotFound"

const Routers = () => {
    return (
        <div style={{ height: '100%', width: "100%", position: 'relative' }}>
            <Snowfall />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/cart" element={<Cart />} />
                <Route path="/product/:id" element={<ProductSlug />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            {/* <Footer /> */}
        </div>
    )
}

export default Routers