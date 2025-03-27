import DiscountCard from "@/components/shared/cards/DiscoundCard"
import ProductCard from "@/components/shared/cards/ProductCard"
import Hero from "@/components/shared/Hero"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from "react"
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from 'uuid';
import { useWindowScroll } from 'react-use';
import { Link } from "react-router-dom"
import { TextEffect } from "@/components/ui/text-effect";
import axios from 'axios'
import { ProductsContext } from "@/store/products"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

const Home = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)
  const { x, y } = useWindowScroll();
  const [bgColor, setBgColor] = React.useState('#000')
  const [active, setActive] = React.useState(0)
  const { products } = React.useContext(ProductsContext)
  const { t } = useTranslation()
  const colors = ['#2C3E50', '#1ABC9C', '#F39C12', '#8E44AD', ' #F1C40F', '#95A5A6', 'orange']

  const random = () => {
    return Math.floor(Math.random() * colors.length)
  }

  const setBgColorFn = (id: number) => {
    setBgColor(colors[random()])
    setActive(id)
  }

  const categoryData = [
    {
      id: 1,
      img: 'https://api.idea.uz/storage/categories/October2023/KrxaMRhdDJZQmaSsZNyj.png',
      title: 'Смартфоны',
      bgColor: 'red'
    },
    {
      id: 2,
      img: 'https://api.idea.uz/storage/categories/August2024/ULScZWbdY6atRhIqKOwL.png',
      title: 'Кондиционеры',
      bgColor: 'blue'
    },
    {
      id: 3,
      img: 'https://api.idea.uz/storage/categories/October2023/KrxaMRhdDJZQmaSsZNyj.png',
      title: 'Телевизоры',
      bgColor: 'black'
    },
    {
      id: 4,
      img: 'https://api.idea.uz/storage/categories/October2023/KrxaMRhdDJZQmaSsZNyj.png',
      title: 'Холодильники',
      bgColor: 'green'
    },
    {
      id: 5,
      img: 'https://api.idea.uz/storage/categories/October2023/KrxaMRhdDJZQmaSsZNyj.png',
      title: 'Ноутбуки',
      bgColor: 'yellow'
    },
    {
      id: 6,
      img: 'https://api.idea.uz/storage/categories/October2023/KrxaMRhdDJZQmaSsZNyj.png',
      title: 'Мелкая техника для дома',
      bgColor: 'pink'
    },
  ]

  const discountProducts = [
    {
      id: uuidv4(),
      title: 'Выгодные цены на стиральные машины',
      img: 'https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Foffer-promotions%2FDecember2024%2FnLd4VeY8gZJaQoDdmevS.png&w=1920&q=75',
      date: '07.12.2024'
    },
    {
      id: uuidv4(),
      title: 'Выгодные цены на стиральные машины',
      img: 'https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Foffer-promotions%2FDecember2024%2FCQ9zflzh9LarzhBovYQU.png&w=1920&q=75',
      date: '07.12.2024'
    },
    {
      id: uuidv4(),
      title: 'Выгодные цены на стиральные машины',
      img: 'https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Foffer-promotions%2FDecember2024%2FOkWGYZ531g3gpqoLZawV.png&w=1920&q=75',
      date: '07.12.2024'
    },
    {
      id: uuidv4(),
      title: 'Выгодные цены на стиральные машины',
      img: 'https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Foffer-promotions%2FDecember2024%2FOkWGYZ531g3gpqoLZawV.png&w=1920&q=75',
      date: '07.12.2024'
    },
  ]

  return (
    <div className="overflow-scroll">
      <Hero />
      <main className="mt-8 container mx-auto px-8">
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))] mt-6">
          {products.map((product, index) => (
            <ProductCard key={index} data={product} />
          ))}
        </div>
        {y > 500 &&
          <a href={'#navbar'}>
            <Button className="fixed bottom-2 right-2 z-20 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 18V8.8l-3.6 3.6L6 11l6-6l6 6l-1.4 1.4L13 8.8V18z" /></svg>
            </Button>
          </a>
        }
        <section className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(320px,1fr))] mt-6">
          {categoryData.map((item) => (
            <Card className="transition"
              style={{
                backgroundColor: active === item.id ? bgColor : '',
              }}
              key={item.id}
              onMouseEnter={() => setBgColorFn(item.id)}
              onMouseLeave={() => setBgColorFn(null)}
            >
              <img width={150} src={item.img} alt="" />
              <p>{item.title}</p>
            </Card>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-8">Акции и видеообзоры</h2>
          <Tabs defaultValue="discount" className="w-full mt-4">
            <TabsList>
              <TabsTrigger className="w-[200px] data-[state=active]:text-white data-[state=active]:bg-primary" value="discount">{t('Акции')}</TabsTrigger>
              <TabsTrigger className="w-[200px] data-[state=active]:text-white data-[state=active]:bg-primary" value="lider-connect">{t('LiderConnect')}</TabsTrigger>
            </TabsList>
            <TabsContent value="discount">
              <div className="flex gap-[20px]">
                {discountProducts.slice(0, 3).map(({ id, img, title, date }) => (
                  <DiscountCard
                    key={id}
                    img={img}
                    title={title}
                    date={date}
                    id={id}
                    isInDiscountTab={true}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="lider-connect">
              <div className="flex gap-[20px]">
                {discountProducts.map(({ id, img, title, date }) => (
                  <DiscountCard
                    key={id}
                    img={img}
                    title={title}
                    date={date}
                    id={id}
                    isInDiscountTab={false}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">

              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Home