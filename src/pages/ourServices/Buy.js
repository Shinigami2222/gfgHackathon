import './Buy.css'

const ProductCategory = ({ category, items }) => (
  <div>
    <h2 className='category-name'>{category}</h2>
    <div className="category-grid">
      {items.map(item => (
        <div key={item.id} className='category-card'>
          <img src={item.image} alt={item.name} className='category-image' />
          <div className="category-text">
             <h3 className="category-title">{item.name}</h3>
           </div>
        </div>
      ))}
    </div>
  </div>
);

var Barley = require('../../assets/images/buy/Barley.jpeg')
var Wheat = require('../../assets/images/buy/wheat.jpeg')
var Rice = require('../../assets/images/buy/rice.jpeg')
var Oats = require('../../assets/images/buy/oats.jpeg')
var Millet = require('../../assets/images/buy/millet.jpeg')
var Sorghum = require('../../assets/images/buy/sorghum.jpeg')
var Maize = require('../../assets/images/buy/maize.jpeg')
var Apple = require('../../assets/images/buy/apple.jpeg')
var Banana = require('../../assets/images/buy/banana.jpeg')
var Mango = require('../../assets/images/buy/mango.jpeg')
var Orange = require('../../assets/images/buy/orange.jpeg')
var Watermelon = require('../../assets/images/buy/watermelon.jpeg')
var Strawberry = require('../../assets/images/buy/strawberry.jpeg')
var Pomegranate = require('../../assets/images/buy/pomegranate.jpeg')
var Kiwi = require('../../assets/images/buy/kiwi.jpeg')
var Tomato = require('../../assets/images/buy/tomato.jpeg')
var Potato = require('../../assets/images/buy/potato.jpeg')
var Carrot = require('../../assets/images/buy/carrot.jpeg')
var Onion = require('../../assets/images/buy/onion.jpeg')
var Cabbage = require('../../assets/images/buy/cabbage.jpeg')
var Peas = require('../../assets/images/buy/peas.jpeg')
var Bittergourd = require('../../assets/images/buy/bittergourd.jpeg')


const Buy = () => {return (
  <div>
    <h1 className='heading'>PRODUCT CATEGORIES</h1>
    <ProductCategory
      category="Cereals"
      items={[
        { id: 1, name: 'Wheat', image: Wheat },
        { id: 2, name: 'Rice', image: Rice},        
        { id: 3, name: 'Barley', image: Barley},
        { id: 4, name: 'Oats', image: Oats },
        { id: 5, name: 'Millet', image: Millet },
        { id: 6, name: 'Sorghum', image: Sorghum },
        { id: 7, name: 'Maize', image: Maize}
      ]}
    />

    <ProductCategory
      category="Fruits"
      items={[
        { id: 8, name: 'Apple', image: Apple},
        { id: 9, name: 'Banana', image: Banana},
        { id: 10, name: 'Orange', image: Orange },
        { id: 11, name: 'Mango', image: Mango },
        { id: 12, name: 'Watermelon', image: Watermelon},
        { id: 13, name: 'Strawberry', image: Strawberry},
        { id: 14, name: 'Pomegranate', image: Pomegranate},
        { id: 23, name: 'Kiwi', image: Kiwi}
      ]}
    />
    <ProductCategory
      category="Vegetables"
      items={[
        { id: 15, name: 'Tomato', image: Tomato},
        { id: 16, name: 'Potato', image: Potato },
        { id: 17, name: 'Carrot', image: Carrot},
        { id: 18, name: 'Onion', image: Onion},
        { id: 19, name: 'Cabbage', image: Cabbage },
        { id: 20, name: 'Peas', image: Peas},
        { id: 21, name: 'Bittergourd', image: Bittergourd}
      ]}
    />
    
  </div>
);
}

export default Buy;
