import React, {Component} from 'react';
import '../stylesheets/LandingPage.scss';
import {Link} from "react-router-dom";

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            store: '',
            article: '',
            location: ''

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
            <div className="LandingPage__container">
                <div className="LandingPage__instrucciones">
                    <h2>Bienvenidos a La Comprita</h2>
                    <p>Esta aplicación está diseñada para que el usuario pueda saber si los productos están accesibles en las tiendas más cercana.</p>
                    <p>Las personas al día hacen filas masivas, teniendo un riesgo a la infección del COVID-19, no saben si los productos que buscan están en la tienda o no. Y es para prevenir la duda de si los productos estas disponibles.</p>
                </div>
                <hr className="new2"></hr>
                <form className="LandingPage__form">
                    {/* Categoria de Tienda */}
                    <div className="LandingPage__inputBox">
                        <label> Tipo de tienda</label>
                        <br/>
                        <select id="store" value={this.state.store} onChange={this.handleChange}>
                            <option value="ANY">Cualquiera</option>
                            <option value="SUPERMERCADO">Supermercado</option>
                            <option value="FARMACIA">Farmacia</option>
                            <option value="COLMADO">Colmado</option>
                        </select>
                        
                    </div>
                    
                    <br></br>

                    {/* Categoria de Tienda */}
                    <div className="LandingPage__inputBox"> 
                        <span>Tipo de Artículo</span>
                        <br/>
                        <select id="article" value={this.state.article} onChange={this.handleChange}>
                            <option value="ANY">Cualquiera</option>
                            <option value="Limpieza">Limpieza</option>
                            <option value="Alimentos">Alimentos</option>
                            <option value="Medicamentos">Medicamentos</option>
                        </select>
                    </div>
                    
                    <br></br>

                    {/* Categoria de Tienda */}
                    <div className="LandingPage__inputBox">
                        <span>Pueblo</span>
                        <br/>
                        <select id="location" value={this.state.location} onChange={this.handleChange}>
                            <option value="ANY">Cualquiera</option>
                            <option value="SANJUAN">San Juan</option>
                            <option value="MAYAGÜEZ">Mayagüez</option>
                            <option value="PONCE">Ponce</option>
                            <option value="DORADO">Dorado</option>
                        </select>
                        
                    </div>
                    <br></br>
                    <Link to={{pathname: '/Resultado',
                                userType: this.state.article,
                                userLocation: this.state.location,
                                userStore: this.state.store
                                }}>
                        <button type="submit">Buscar</button>
                    </Link>
                </form>
            </div>
        )
    }
}
    

export default LandingPage;