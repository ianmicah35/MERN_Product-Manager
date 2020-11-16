import React, { useEffect, useState } from 'react';
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
        axios.get("https://localhost:8000/api/products")
            .then(res => setProducts(res.data.products))
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(form);
            axios.post("https://localhost:8000/api/product/new", form)
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

    return(
        <div>
            <div>
                <form className="form-group" onSubmit={onSubmitHandler}>
                {/* <form className="form-group"> */}
                    <div class="input-group-prepend">
                        <div class="input-group-text">Title</div>
                        <input name="title" onChange={onChangeHandler} type="text" class="form-control" placeholder="Enter Title Here"></input></div><br></br>

                    <div class="input-group-prepend">
                        <div class="input-group-text">Price</div>
                        <input name="price" onChange={onChangeHandler} type="text" class="form-control" placeholder="Enter Price Here"></input></div><br></br>

                    <div class="input-group-prepend">
                        <div class="input-group-text">Description</div>
                        <input name="description" onChange={onChangeHandler} type="text" class="form-control" placeholder="Enter Description Here"></input></div><br></br>

                    <input type="submit" value="Create" class="btn btn-secondary btn-block"></input>
                </form>
            </div>

            <hr></hr>

            <h3>All Products:</h3>
            <ul>
                {
                    products.map(function(product, i){
                        return <li key={i}><a href={`http://localhost:8000/api/product/${product._id}`}>{product.title}</a></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Main;