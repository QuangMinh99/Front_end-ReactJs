import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Products from '../Products';
import { useForm } from "react-hook-form";


const AddProduct = props => {
    const [valueInput, setValueInput] = useState({});
    const onHandleChange = (e) => {setValueInput({name: e.target.value}); //lấy giá trị của input, set giá trị input
    }
    // const onHandleChange = (e) => { // lấy giá trị input
    //   const {name, value} = e.target
    //   setValueInput(// set giá trị input
    //     ...
    //     )
    // }

    const onHandleSubmit = (e) => {
        e.preventDefault(); //chặn sự kiện reload
        props.onAdd(valueInput) //gửi dữ liệu ra ngoài app thông qua props onAdd
    }

    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Thêm sản phẩm</h1>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <form action="" onSubmit={onHandleSubmit}>
                        <div className="form-group">
                            <label htmlFor="">Tên sản phẩm</label>
                            <input type="text"
                            className="form-control"
                            onChange={onHandleChange} />
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

AddProduct.propTypes = {

}

export default AddProduct
