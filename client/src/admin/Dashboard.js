import React, { Component } from 'react';
import '../stylesheets/Dashboard.scss';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            type: '',
            storeID: '',
            price: '',
            inventory: '',
            image: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        const newItem = {
            name: this.state.name,
            description: this.state.description,
            type: this.state.type,
            storeID: this.state.storeID,
            price: this.state.price,
            inventory: this.state.inventory,
            image: this.state.image
        }
        axios.post('http://localhost:4000/api/items/addItem', {newItem}, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div className="Dashboard__container">
                <h2>Añadir Producto</h2>
                <form className="Dashboard__form" onSubmit={this.handleSubmit}>
                    <div className="Dashboard__formInput"> 
                        <label>
                            Nombre:
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={this.state.name}
                                onChange={this.handleChange} />
                        </label>
                    </div>
                    
                    <div className="Dashboard__formInput">
                        <label>
                            Descripción:
                            <textarea 
                                type="text" 
                                id="description" 
                                name="description" 
                                value={this.state.description}
                                onChange={this.handleChange} />
                        </label>
                    </div>
                    
                    <div className="Dashboard__formInput">
                        <label>
                            Tipo de Artículo:
                            <select 
                                id="type"
                                name="type"
                                value={this.state.type} 
                                onChange={this.handleChange} 
                                
                            >
                                <option value="Limpieza">Limpieza</option>
                                <option value="Alimentos">Alimentos</option>
                                <option value="Medicamentos">Medicamentos</option>
                            </select>
                        </label>
                    </div>
                    
                    <div className="Dashboard__formInput">
                        <label>
                            ID de Tienda:
                            <input 
                                type="text" 
                                id="storeID" 
                                name="storeID" 
                                value={this.state.storeID}
                                onChange={this.handleChange} />
                        </label>
                    </div>
                    
                    <div className="Dashboard__formInput">
                        <label>
                            Precio:
                            <input 
                                type="text" 
                                id="price"
                                name="price"
                                value={this.state.price}
                                onChange={this.handleChange} />
                        </label>
                    </div>
                    
                    <div className="Dashboard__formInput">
                        <label>
                            Inventario:
                            <input 
                                type="text" 
                                id="inventory"
                                name="inventory"
                                value={this.state.inventory}
                                onChange={this.handleChange} />
                        </label>
                    </div>
                    
                    <div className="Dashboard__formInput">
                        <label>
                            URL de imagen:
                            <input 
                                type="text" 
                                id="image"
                                name="image"
                                value={this.state.image}
                                onChange={this.handleChange} />
                        </label>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Dashboard;