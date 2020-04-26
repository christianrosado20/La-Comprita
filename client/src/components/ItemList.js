import React from 'react';
import Axios from 'axios';
import Product from './Product';

export default class ItemList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            stores: [],
    
        }
    }
    

    componentDidMount(){
        Axios.get('http://localhost:4000/api/items').then(res => {
            console.log(res);
            this.setState({ items: res.data});
        });

    }

    getData(){
        const userType = this.props.dataType;
        const userStore = this.props.dataStore;
        const userLocation = this.props.dataLocation;

        console.log("userstore", userStore);
        return(
            <div>
                {
                    this.state.items.map(item =>{
                        if(userLocation == "ANY" && userStore == "ANY" && userType == "ANY"){
                            return (
                                <Product item={item} />
                            )
                        }
                        else if(item.municipality == userLocation || 
                            item.type == userType || item.storeType == userStore){
                                if(item.municipality == userLocation){
                                    if(item.type == userType){
                                        if(item.storeType == userStore){
                                            return (
                                                <Product item={item} />
                                            )
                                        }
                                        else if(userStore == "ANY"){
                                             return (
                                            <Product item={item} />
                                            )
                                        }
                                    }
                                    else if(userType == "ANY"){
                                        if(item.storeType == userStore){
                                            return (
                                            <Product item={item} />
                                            )
                                        }
                                        else if(userStore == "ANY"){
                                            return (
                                           <Product item={item} />
                                           )
                                       }
                                    }  
                                }
                                else if(userLocation == "ANY"){
                                    if(item.type == userType){
                                        if(item.storeType == userStore){
                                            return (
                                                <Product item={item} />
                                            )
                                        }
                                        else if(userStore == "ANY"){
                                             return (
                                            <Product item={item} />
                                            )
                                        }
                                    }
                                    else if(userType == "ANY"){
                                        if(item.storeType == userStore){
                                            return (
                                            <Product item={item} />
                                            )
                                        }
                                        else if(userStore == "ANY"){
                                            return (
                                           <Product item={item} />
                                           )
                                       }
                                    }  
                                }

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