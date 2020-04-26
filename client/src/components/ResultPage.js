import React, {Component} from 'react';
import '../stylesheets/ResultPage.scss';
import Product from '../components/Product.js';
import ItemsList from './ItemList';
import Axios from 'axios';

class ResultPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            store: '',
            article: '',
            location: '',
            items: []

        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){
        Axios.get('/api/items/').then(res => {
            console.log(res);
            this.setState({ items: res.data});
        });
    }

    getData(){
        return(
            <ul>
                {this.state.items.map(item =>{
                    if(item.type == this.props.location.userType){
                        return (<div>
                         <p>{item.name}</p>
                         <p>inventory: {item.inventory}</p>
                         <p>{item.price}</p>
                         <p>{item.storeID}</p>
                     </div>)
                    }
                })
                }
            </ul>
        )
    };
    
    
      handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
      }

    render() {
        console.log("Holi");
        console.log(this.props.location);
        return (
            <div className="ResultPage__container">
                <div className="ResultPage__Title">
                    <h2>PRODUCTOS</h2>
                    <hr className="new2"></hr>
                </div>
                <div>
                    {/* <Product/> */}
                {/* {this.state.product.map((product, index) => (
                    <div key={index}>
                        <h3>{product.Name}</h3>
                        <h3>{product.City}</h3>
                        <h3>{product.Price}</h3>
                    </div>

                ))

                } */}
                </div>

               <div>{this.getData()}</div>

            </div>
        )
    }
    
}
    

export default ResultPage;