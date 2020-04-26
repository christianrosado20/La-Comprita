import React, { Component } from 'react';
import '../stylesheets/Product.scss';

// Components

class Product extends Component {

  render() {
      var data = this.props.item;
    return (
        <div className='Product__Box'> 
            {/* Image */}
            <div className='picture'> 
                <img src={data.image} />
            </div>
            {/* Information */}
            <div className="Product__information"> 
                 <h3>{data.name}</h3>
                 <p>{data.store}</p>
                  <h5>$ {(data.price / 100).toFixed(2)}</h5>
                 <p>{data.description}</p>
                 <p>Inventory: {(data.inventory) >= 100 ? 'HIGH' : 'LOW'}</p>
                
            </div>
        </div>
    )
  }

}

export default Product;
