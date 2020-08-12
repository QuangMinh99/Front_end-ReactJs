import React, { useState, useEffect } from 'react';
import Routers from './routers';
import apiRequest from './api/productApi';
function App() {

  const [products, setProducts] = useState([]);

  // Danh sách sản phẩm
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();
  }, []);


  // Xóa sản phẩm
  const onHandleRemove = async (id) => {
    try {
      const { data } = await apiRequest.remove(id);
      const newProducts = products.filter(product => product.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log('failed to request API: ', error)
    }

  }
  // Thêm sản phẩm
  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiRequest.create(product);
      setProducts([
        ...products,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }


  // Cập nhật product 
  // const onHandleUpdate = (id,updateProduct) => {
  //   const newProducts = products.map(product => (
  //     product.id === updateProduct.id ? updateProduct : product // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
  //   ));
  //   try {
  //     const { data } = apiRequest.update(updateProduct);
  //     setProducts([
  //       ...products,
  //       data
  //     ])
  //     // localStorage.setItem('products', JSON.stringify(newProducts))
  //     // setProducts(newProducts);
  //     // console.log(newProducts)
  //     // console.log(products)
  //   } catch (error) {
  //     console.log('failed to request API: ', error)
  //   }
    
  // }s
  const onHandleUpdate = async (id, updateProduct)=>{
    try {
      const {data} = await apiRequest.update(id, updateProduct);
      const newProduct = products.map(product =>(product.id === data.id ? data :product))
      setProducts(newProduct);
    } catch (error) {
      console.log("error api", error)
    }
  }


  return (
    <div className="App">
      <Routers products={products} onRemove={onHandleRemove} onAdd={onHandleAdd} onUpdate={onHandleUpdate} />
    </div>
  )

}
export default App;