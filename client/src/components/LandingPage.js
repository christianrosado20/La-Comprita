import React, {Component} from 'react';
import '../stylesheets/LandingPage.scss';

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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum dictum risus, quis aliquet lectus vehicula vel. Cras ornare rutrum consectetur</p>
                </div>
                <hr></hr>
                <form className="LandingPage__form">
                    {/* Categoria de Tienda */}
                    <div className="LandingPage__inputBox">
                        <label> Tipo de tienda</label>
                        <br></br>
                        <select id="store" value={this.state.store} onChange={this.handleChange}>
                            <option  value="ANY">Cualquiera</option>
                            <option value="SUPERMERCADO">Supermercado</option>
                            <option value="FARMACIA">Farmacia</option>
                            <option value="COLMADO">Colmado</option>
                        </select>
                    </div>
                    
                    <br></br>

                    {/* Categoria de Tienda */}
                    <div className="LandingPage__inputBox"> 
                        <label>Tipo de Artículo</label>
                        <br></br>
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
                        <label>Pueblo</label>
                        <br></br>
                        <select id="location" value={this.state.location} onChange={this.handleChange}>
                            <option value="ANY">Cualquiera</option>
                            <option value="SANJUAN">San Juan</option>
                            <option value="MAYAGÜEZ">Mayagüez</option>
                            <option value="PONCE">Ponce</option>
                            <option value="DORADO">Dorado</option>
                        </select>
                        
                    </div>

                    <br></br>
                    <input type="submit" value="Buscar" />
                </form>
            </div>
        )
    }
}
    

export default LandingPage;