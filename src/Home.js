import React from 'react'
import Header from './Header'
import "./Home.css";
import Product from './Product';


function Home() {
  return (
    <div className="home">
      <img className="home_image" src="https://m.media-amazon.com/images/G/31/highvelocityevents/og_image/primeday._CB633113658_.png" alt=""/>

      <div className='home_row'>
      <Product
        id="12327741"
        title="New Super Mario Bros. U Deluxe Switch - Standard Edition"
        price={79.99}
        rating={5}
        image="https://m.media-amazon.com/images/I/8177Ba7g0JL._AC_UF894,1000_QL80_.jpg"
        />
        <Product
        id="12322241"
        title="Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal"
        price={69.99}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/61mu3UykGQL._AC_UL600_SR600,600_.jpg"
        />
      </div>
      
      <div className='home_row'>
      <Product
        id="12334341"
        title="OXO Good Grips 12 Frying Pan"
        price={99.99}
        rating={3}
        image="https://m.media-amazon.com/images/I/81AjWNWch9L._AC_UF1000,1000_QL80_.jpg"
        />
        <Product
        id="12366341"
        title="Marshall Acton II Bluetooth Speaker Black"
        price={305.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/71hUapOXayL.jpg"
        />
         <Product
        id="12355341"
        title="GaraTia Women Plush Fuzzy House Slipper"
        price={20.99}
        rating={3}
        image="https://m.media-amazon.com/images/I/61v2fh-trjL._AC_UY780_.jpg"
        />
      </div>

      <div className='home_row'>
      <Product
        id="12344341"
        title="Alienware Ultrawide Curved Gaming Monitor 38 Inch"
        price={1299.99}
        rating={5}
        image="https://m.media-amazon.com/images/I/71WMnbicESL._AC_UF894,1000_QL80_.jpg"
        />
      </div>

    </div>
  )
}

export default Home