import React from 'react';
import { motion } from "motion/react"
import { Link } from 'react-router-dom';

const ProductDetail = () => {

  const boxData = [
    {
      id: 1,
      image: require('../assets/images/herbsimage.png'),
      title: 'Herbs In Crude , Powder & Extracts',
      description: 'Pure herbs in crude, powder, and concentrated extract forms.'
    },
    {
      id: 2,
      image: require('../assets/images/healthingradients.png'),
      title: 'Health Ingredients',
      description: 'Vital ingredients to boost health and wellness naturally.'
    },
    {
      id: 3,
      image: require('../assets/images/oilproduct.png'),
      title: 'Herbal Essential Oils',
      description: 'Aromatic oils distilled from premium herbal sources.'
    },
    {
      id: 4,
      image: require('../assets/images/botanicalextracts.jpeg'),
      title: 'Herbal Botanical Extracts',
      description: 'Potent plant-based extracts for natural healing.'
    }
  ];


  return (
    <>
      <section className="product-d-section py-5 text-center">
        <div className="container">
          <h2 className="section-title text-center mb-4">Products</h2>
          <div className="row mt-5">
            {boxData.map((box, index) => (
              <div key={box.id} className="col-md-3 mb-4">
                <motion.div
                  className="card h-100 shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: 'spring', stiffness: 100, delay: index * 0.2 }}
                >
                  <img
                    src={box.image}
                    alt={box.title}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between text-center align-items-center">
                    <div>
                      <h5 className="card-title">{box.title}</h5>
                      <p className="card-text">{box.description}</p>
                    </div>
                    <Link to="/products" className="text-decoration-none">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="read-more-btn mt-3"
                        style={{ width: "fit-content", textAlign: "center" }}
                      >
                        Know More
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
