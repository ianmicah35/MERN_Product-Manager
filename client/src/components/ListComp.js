import React, { useEffect } from 'react';
import axios from 'axios';

const listComp = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data.products))
    }, [update])
}

export default listComp;