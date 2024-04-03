import React, { useEffect, useState } from "react";
import './styles.css'

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div>Loading data! Please wait...</div>
  }

  return (
    <div className="load-container">
        <div className="product-container">
            {
                products && products.length ? 
                products.map((item) => (
                    <div className="product" key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                ))
                 : null
            }
        </div>
        <div className="button-container">
            <button    className="custom-button" onClick={() => setCount(count + 1)}>Load More Products</button>
        </div>
    </div>
  )
};

export default LoadMoreData;
