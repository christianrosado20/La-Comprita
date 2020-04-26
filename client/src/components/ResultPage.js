import React, {Component} from 'react';
import '../stylesheets/ResultPage.scss';
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";

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
        const location = this.props.location.userType;
        return (
            <div className="ResultPage__container">
                <div className="ResultPage__Title">
                    <h2>PRODUCTOS</h2>
                    <hr className="new2"></hr>
                </div>

               <div>
                   <ItemsList data={location}/>
                </div>

            </div>
        )
    }
    
}
    

export default ResultPage;