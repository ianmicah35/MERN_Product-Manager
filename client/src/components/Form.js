import React from 'react';

const Form =  (props) => {

    return(
        <div className="container">
            <form className="form-group" onSubmit={props.onSubmitHandler}>
                <div class="input-group-prepend">
                    <div class="input-group-text">Title</div>
                    <input name="title" onChange={props.onChangeHandler} type="text" class="form-control" value={props.form.title}></input></div><br></br>

                <div class="input-group-prepend">
                    <div class="input-group-text">Price</div>
                    <input name="price" onChange={props.onChangeHandler} type="text" class="form-control" value={props.form.price}></input></div><br></br>

                <div class="input-group-prepend">
                    <div class="input-group-text">Description</div>
                    <input name="description" onChange={props.onChangeHandler} type="text" class="form-control" value={props.form.description}></input></div><br></br>

                <input type="submit" value="Update" class="btn btn-secondary btn-block"></input>
            </form>
        </div>

    )
}

export default Form;