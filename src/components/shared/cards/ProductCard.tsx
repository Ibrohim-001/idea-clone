import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ProductBag, Scales } from '@/components/icons'
import { useAudio } from "react-use"
import mp3 from '/music/mp3.mp3'
import { Link } from "react-router-dom"
import React from "react"
import { ProductsContext } from "@/store/products"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"

type ProductTypes = {
  name: string,
  brand: string,
  price: number,
  image: string
}

const ProductCard = ({ data }: ProductTypes) => {
  const [atClicked, setAtClicked] = React.useState(false)
  const [audio, state, controls, ref] = useAudio({
    src: mp3,
    autoPlay: true,
  });

  const { addToCart } = React.useContext(ProductsContext)

  const saveToCartPage = () => {
    addToCart(data)
    setAtClicked(true)
  }

  return (
    <>
      <Card>
        <CardContent className="relative">
          <div className="flex items-center gap-2 absolute right-2 top-2">
            <Scales className="product-svg cursor-pointer" width={20} />
            <Heart className="product-svg cursor-pointer" width={20} />
          </div>
          <img className="w-[160px] h-[160px] object-cover" width={160} height={160} src={data.image[0]} alt="" />
          <p className="font-bold text-[#20A752]">{data.price}</p>
          <Link to={`/product/${data.id}`}>
            <h2 className="font-bold">{data.name}</h2>
          </Link>
          <p className="text-gray-500 font-bold text-[13px]">{data.brand}</p>

          <div className="grid grid-cols-4 gap-2 mt-4">
            <Button variant="outline" className="col-span-3">Buy now</Button>
            <Button onClick={saveToCartPage}>
              {!atClicked ? <ProductBag /> : <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z" /></svg>}
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
              </DialogTrigger>
            </Dialog>
          </div>
          {audio}
        </CardContent>
      </Card>
    </>
  )
}

export default ProductCard