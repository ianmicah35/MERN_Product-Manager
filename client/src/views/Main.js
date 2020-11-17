import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { navigate } from "@reach/router";

const Main = (props) => {
    const [products, setProducts] = useState([]);

    const [form, setForm] = useState({
        title: "",
        price: "",
        description:""
    })

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res => setProducts(res.data.products))
            .catch(err => console.log("Error: ", err))
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(form);
            axios.post("http://localhost:8000/api/product/new", form)
                .then(res => console.log(res))
                .then(res => navigate("/"))
        }

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const deleteProduct = _id => {
        axios.delete(`http://localhost:8000/api/product/${_id}/delete`)
            .then(res => console.log("Product was deleted"))
            .catch(err => console.log("Error: ", err))
            // .then(res => navigate ("/"))
    }

    return(
        <div>
            <div>
                <form className="form-group" onSubmit={onSubmitHandler}>
                    <div class="input-group-prepend">
                        <div class="input-group-text">Title</div>
                        <input name="title" onChange={onChangeHandler} type="text" class="form-control" placeholder="Add product title here"></input></div><br></br>

                    <div class="input-group-prepend">
                        <div class="input-group-text">Price</div>
                        <input name="price" onChange={onChangeHandler} type="text" class="form-control" placeholder="Enter product price here"></input></div><br></br>

                    <div class="input-group-prepend">
                        <div class="input-group-text">Description</div>
                        <input name="description" onChange={onChangeHandler} type="text" class="form-control" placeholder="Enter product description here"></input></div><br></br>

                    <input type="submit" value="Create" class="btn btn-secondary btn-block"></input>
                </form>
            </div>

        <hr></hr>

        <h3>All Products:</h3>
        {
            products.map((product, i) => {
                return <ul key={i}><a href={`http://localhost:3000/api/product/${product._id}/detail`}>{product.title}</a> |
                <a href={"/api/product/" + product._id + "/update"} className="btn btn-outline-secondary btn-sm" role="button">Update</a> |
                <button onClick={() => deleteProduct(product._id)} className="btn btn-outline-secondary btn-sm">Delete</button></ul>})
        }
        </div>
    )
}
export default Main;