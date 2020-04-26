import React from 'react';
import Axios from 'axios';

export default class ItemList extends React.Component{
    state = {
        items: [],

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
                    if(item.inventory > 110){
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
    }

    render(){
        console.log(this.state.items)
        return this.getData();
    }

}