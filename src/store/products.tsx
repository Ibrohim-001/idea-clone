import axios from "axios";
import React from "react";

export const ProductsContext = React.createContext([])

const ProductsProvider = ({ children }) => {

  const [lovelyProducts, setLovelyProducts] = React.useState([{ "name": "Smartphone", "brand": "Apple", "price": 1300000, "image": "https://picsum.photos/id/29/200/360" }])
  const [products, setProducts] = React.useState([])

  const addToCart = (product: object) => {
    setLovelyProducts((prevProduct) => [...prevProduct, product])
    console.log('Works', products);
  }

  const fetchProduct = async () => {
    try {
      const response = await axios('http://localhost:3000/products')
      setProducts(response.data)
    } catch (error) {
      alert(error)
    }
  }

  React.useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <ProductsContext.Provider value={{ lovelyProducts, addToCart, products }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider