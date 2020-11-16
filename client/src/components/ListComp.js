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
    return(
        <div>
            {props.products.map((product, i) => {
                return <p key={i}>{product.title}</p>
            })}
        </div>
    )
}
