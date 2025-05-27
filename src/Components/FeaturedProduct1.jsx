
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FeaturedProduct1() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // axios.get('http://localhost:5000/style/all')
    axios.get(`${import.meta.env.VITE_APP_API_URL}/style/all`)

      .then(res => {
        if (res.status === 200) {
          setProducts(res.data.data); // Assuming your API sends data in res.data.data
        }
      })
      .catch(err => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div>
      <div className = 'text-center'>
      <span className='text-bold bg-purple-800 text-white text-3xl rounded-2xl inline-block px-4 py-2 mt-10'>
        FEATURED PRODUCT
      </span>
      </div>

      <div 
        className="grid gap-4 mt-6"
        style={{
          gridTemplateColumns: 'repeat(5, 1fr)',  // 5 columns
          gridAutoRows: 'auto',
          maxWidth: '100%', // adjust as needed
        }}
      >
        {products.slice(0, 15).map((product, index) => (  // 5 columns x 3 rows = 15 items max
          <div 
            key={product._id || index} 
            className="border p-4 rounded shadow"
            style={{ textAlign: 'center' }}
          >
            <img 
              src={product.img} 
              alt={product.name} 
              style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }}
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p>{new Date(product.Date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default FeaturedProduct1;
