// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const listComp = (props) => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         axios.get("http://localhost:8000/api/products")
//             .then(res => setProducts(res.data.products))
//             .catch(err=>console.log("Error", err))
//     }, [update])
// }

// export default listComp;

import React from 'react';

export default props => {

    // const { removeFromDom } = props;
    // const deleteProduct = (productId) => {
    //     axios.delete("http://localhost:8000/api/product/:_id/delete")
    //         .then(res => {
    //             removeFromDom(productId)
    //         })
    // }

    return(
        <div>
            {props.products.map((product, i) => {
                return <p key={i}>{product.title}</p>

                {/* <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button></p> */}
            })}
        </div>
    )
}
