import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from './Layout/Container';
function FeaturedProduct1() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // axios.get('http://localhost:5000/style/all')
     axios.get(`${import.meta.env.VITE_APP_API_URL}/style/all`)
      .then(res => {
        if (res.status === 200) {
          setProducts(res.data.data); 
        }
      })
      .catch(err => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <Container>
    <div className="p-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-md mb-8 text-center">
        <h3 className="text-2xl font-semibold mb-2 text-purple-800">About Clesto</h3>
        <p className="text-purple-900 text-lg">
          Clesto is a lifestyle brand that merges quality with innovation. Our curated range of 
          products aims to meet diverse customer needs, offering reliable and stylish solutions 
          for modern living. Discover the best with Clesto!
        </p>
      </div>
      <div 
        className="grid gap-4"
        style={{
          gridTemplateColumns: 'repeat(5, 1fr)',  
          maxWidth: '100%',
        }}
      >
        {products.slice(0, 15).map((product, index) => (
          <div 
            key={product._id || index} 
            className="border p-4 rounded shadow hover:shadow-lg transition-shadow duration-300 text-purple-800"
            style={{ textAlign: 'center' }}
          >
    
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-40 object-cover rounded hover:opacity-80 transition-opacity duration-300"
              />
           
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p>{new Date(product.Date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
    </Container>
  );
}
export default FeaturedProduct1;
