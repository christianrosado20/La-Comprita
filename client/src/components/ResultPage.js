import React, {Component} from 'react';
import '../stylesheets/ResultPage.scss';
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";

import Product from '../components/Product.js';
import ItemsList from './ItemList';
class ResultPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            store: '',
            article: '',
            location: '',
            product: [],

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
        let { store, article, location } = useParams();
        console.log(store);
        console.log(article);
        console.log(location);
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

               <div><ItemsList/></div>

            </div>
        )
    }
    
}
    

export default ResultPage;