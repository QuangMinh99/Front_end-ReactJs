import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const AddProduct = ({ onAdd }) => {
    const { register, handleSubmit, errors } = useForm(); // Sử dụng hook form
    let history = useHistory();

    // const [valueInput, setValueInput] = useState({});

    // const onHandleChange = (e) => {
    //     const { name, value } = e.target;
    //     setValueInput({
    //         ...valueInput,
    //         [name]: value
    //     })
    // }

    const onHandleSubmit = (data) => {
        const newData = {
            id: Math.random().toString(36).substr(2, 9),
            ...data
        }
        onAdd(newData);
        history.push('/admin/products');
    }

    return (
        <div>
            <form action="" className="w-50" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="productName"
                        ref={register({ required: true, minLength: 1 })}
                        aria-describedby="nameHelp"
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>This field is required</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Min Length 10</span>}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Ảnh sản phẩm</label>
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="text" className="form-control" id="inputGroupFile02" name="image" ref={register}
                            />
                            {/* <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label> */}
                        </div>
                    </div>
                    <small id="imageHelp" className="form-text text-danger">{errors.image && <span>This field is required</span>}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Giá sản phẩm</label>
                    <input
                        type="text"
                        name="price"
                        className="form-control"
                        id="productPrice"
                        ref={register({ required: true })}
                        aria-describedby="priceHelp"
                    />
                    <small id="priceHelp" className="form-text text-danger">{errors.price && <span>This field is required</span>}</small>
                </div>
                <button type="submit" className="btn btn-primary">Thêm sản phẩm</button>
            </form>
        </div>
    )
}

AddProduct.propTypes = {
    onAdd: PropTypes.func
}

export default AddProduct