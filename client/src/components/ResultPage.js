import React, {Component} from 'react';
import '../stylesheets/ResultPage.scss';
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
            return (
            <div className="ResultPage__container">
                <div className="ResultPage__Title">
                    <h2>PRODUCTOS</h2>
                    <hr className="new2"></hr>
                </div>

               <div>
                  <ItemsList/>
                </div>

            </div>
        )
    }
    
}
    

export default ResultPage;