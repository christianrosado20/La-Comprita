import React from 'react';
import Axios from 'axios';
import Product from './Product';

export default class ItemList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [],
    
        }
    }
    

    componentDidMount(){
        Axios.get('http://localhost:4000/api/items').then(res => {
            console.log(res);
            this.setState({ items: res.data});
        });
    }

    getData(){
        const userType = this.props.data;
        console.log(this.props);
        return(
            <div>
                {
                    this.state.items.map(item =>{
                        if(item.type == userType) {
                            return (
                                <Product item={item} />
                            )
                        } else {
                            return (<Product item={item} />)
                        }
                        
                    })
                }
            </div>
        )
    }

    render(){
        return this.getData();
    }

}