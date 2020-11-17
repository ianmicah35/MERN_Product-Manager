import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Detail = props => {
    const { _id } = props;
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + _id)
            .then(res => {
                setProduct(res.data.product);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }, [])

    return (
        <div className="container">
            <hr></hr>
            <h6>Title: {product.title}</h6>
            <h6>Price: {product.price}</h6>
            <h6>Description: {product.description}</h6>
            <br></br>
            <a href="http://localhost:3000/">Home</a> | <a href={`http://localhost:3000/product/${props._id}/delete`}>Delete</a>
        </div>
    )
}

export default Detail;