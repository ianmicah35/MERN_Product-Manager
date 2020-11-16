import React from 'react';

const Form = (props) => {

    return(
        <div className="container">
            <form className="form-group" onSubmit={props.onSubmitHandler}>
                <div class="input-group-prepend">
                    <div class="input-group-text">Title</div>
                    <input name="title" onChange={props.onChangeHandler} type="text" class="form-control" value={props.form.title}></input></div><br></br>

                <div class="input-group-prepend">
                    <div class="input-group-text">Price</div>
                    <input name="price" onChange={props.onChangeHandler} type="number" class="form-control" value={props.form.price}></input></div><br></br>

                <div class="input-group-prepend">
                    <div class="input-group-text">Description</div>
                    <input name="description" onChange={props.onChangeHandler} type="text" class="form-control" value={props.form.description}></input></div><br></br>

                <input type="submit" value="Update" class="btn btn-secondary btn-block"></input>
            </form>
        </div>

    )
}

export default Form;

// import React, { useState } from 'react'
// import axios from 'axios';

// export default () => {
//     //keep track of what is being typed via useState hook
//     const [title, setTitle] = useState("");
//     const [price, setPrice] = useState("");
//     const [description, setDescription] = useState("");
//     //handler when the form is submitted
//     const onSubmitHandler = e => {
//         //prevent default behavior of the submit
//         e.preventDefault();
//         //make a post request to create a new person
//         axios.post('http://localhost:8000/api/product', {
//             title,
//             price,
//             description
//         })
//             .then(res=>console.log(res))
//             .catch(err=>console.log(err))
//     }
//     //onChange to update firstName and lastName
//     return (
//         <form onSubmit={onSubmitHandler}>
//             <p>
//                 <label>Title</label><br/>
//                 <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
//             </p>
//             <p>
//                 <label>Price</label><br/>
//                 <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
//             </p>
//             <p>
//                 <label>Description</label><br/>
//                 <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
//             </p>
//             <input type="submit"/>
//         </form>
//     )
// }