import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from '../components/Form';
import { navigate } from "@reach/router";

// const Update = (props) => {
//     const [form, setForm] = useState({
//         title: `${props._id.title}`,
//         price: `${props._id.price}`,
//         description:`${props._id.description}`
//     })

const Update = (props) => {
    const [form, setForm] = useState({
        title: "",
        price:"",
        description:""

    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props._id}/update`)
            .then(res => {
                console.log(res.data);
                setForm(res.data.products);
                })
    }, [])

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.title]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(form);
        axios.put(`https://localhost:8000/api/products/${props._id}/update`, form)
            .then(res => console.log(res))
            .then(res => navigate("/"))
    }

    return(
        <div>
            <Form onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} form={form} />
        </div>
    )
}

export default Update;