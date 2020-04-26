import React, { Component } from 'react';
import '../stylesheets/Product.scss';

// Components

class Product extends Component {
  render() {
    //   var data=this.props.product;
    //   var value=this.props.location;
    return (
        <React.Fragment>
        <div className='Product_Box'> 
            {/* Image */}
            <div className='picture1'> 
                {/* <img> </img> */}
            </div>
            {/* Information */}
            <div> 
                {/*<h3>{data.Name}</h3>
                 <h4>{data.City}</h4>
                <h5>{data.Price}</h5> */}
            </div>
        </div>
        </React.Fragment>
    )
  }

}

export default Product;
