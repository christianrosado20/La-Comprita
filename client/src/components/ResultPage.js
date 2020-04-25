import React, {Component} from 'react';
import '../stylesheets/ResultPage.scss';
import Product from '../components/Product.js';
class ResultPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            store: '',
            article: '',
            location: '',
            product: [
                {
                    Name:'Brocoli',
                    City:'Aguada',
                    Price:'3',

                },
                {
                    Name:'Tomate',
                    City:'Ponce',
                    Price:'5',

                },
                {
                    Name:'Zanahoria',
                    City:'San Juan',
                    Price:'2',

                }
            ]

        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
      }

    render() {
        return (
            <div className="ResultPage__container">
                <div className="ResultPage__Title">
                    <h2>PRODUCTOS</h2>
                    <hr className="new2"></hr>
                </div>
                <div>
                    <Product/>
                {/* {this.state.product.map((product, index) => (
                    <div key={index}>
                        <h3>{product.Name}</h3>
                        <h3>{product.City}</h3>
                        <h3>{product.Price}</h3>
                    </div>

                ))

                } */}
                </div>
            </div>
        )
    }
}
    

export default ResultPage;