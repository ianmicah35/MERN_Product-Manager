import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from '../components/Form';
import { navigate } from "@reach/router";

const Update = (props) => {
    const [form, setForm] = useState({
        title: "",
        price:"",
        description:""

    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props._id}`)
            .then(res => {
                console.log(res.data.product);
                setForm(res.data.product);
                })
    }, [])

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(form);
        axios.put(`http://localhost:8000/api/product/${props._id}/update`, form)
            .then(res => console.log(res))
            .then(res => navigate("/"))
    }

    return(
        <div>
        <hr></hr>
            <Form onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} form={form} />
        </div>
    )
}

export default Update;

