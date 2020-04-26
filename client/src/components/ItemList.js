import React from 'react';
import Axios from 'axios';
import Product from './Product';

export default class ItemList extends React.Component{
    state = {
        items: [],

    }

    componentDidMount(){
        Axios.get('http://localhost:4000/api/items').then(res => {
            console.log(res);
            this.setState({ items: res.data});
        });
    }

    getData(){
        return(
            <div>
                {
                    this.state.items.map(item =>{
                        return (
                            <Product item={item} />
                        )
                    })
                }
            </div>
        )
    }

    render(){
        return this.getData();
    }

}