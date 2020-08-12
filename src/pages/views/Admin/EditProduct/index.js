import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import apiRequest from '../../../../api/productApi'
import { useEffect } from 'react';

const EditProduct = ({ products, onUpdate }) => {
    let { id } = useParams();
    let history = useHistory();
    const [currentProduct, setCurrentProduct] = useState({});
    useEffect(()=>{
        const getProduct = async () =>{
            try {
                const {data} = await apiRequest.getProduct(id);
                setCurrentProduct(data)
            } catch (error) {
                console.log("error for API", error)
            }
        }
        getProduct();
    },{})
   

    const onHandleSubmit = (data) => {
      
        setCurrentProduct(data)
        onUpdate(id,currentProduct);
        history.push('/admin/products');
    }
    const onHandleChange = e => {
        const { name, value } = e.target;

        setCurrentProduct({
            ...currentProduct,
            [name]: value
        })
        
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit} className="w-50">
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input type="text" name="name" value={currentProduct.name} onChange={onHandleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Giá sản phẩm</label>
                    <input type="text" name="price" value={currentProduct.price} onChange={onHandleChange} className="form-control" />
                </div>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}

EditProduct.propTypes = {
    products: PropTypes.array
}

export default EditProduct
