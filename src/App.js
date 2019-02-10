import React, { Component } from 'react';

import {Route} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import './style/profile.css';
import Home from './component/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import Article from './component/Article';
import Navbar from './component/Navbar';
import Pricing from './component/Pricing';
import foto from './img/tom.jpg';
// import profile from './component/Profile';
import Persons from './component/Persons';
import Breadcrumbs from './component/Breadcrumbs';


class App extends Component {
  constructor(){
    super();
    this.state = {user:'Orang Asing'};
  }
  componentWillMount(){
    this.setState({user:'Yayan'});
    console.log('Ini Will Mount'+this.state.user);
  }
  componentDidMount(){
    console.log('Ini Did Mount'+this.state.user);
  }

//   state = {
//     persons: [
//       {name: "Meidi", age: 40},
//       {name: "Jefry", age: 25}
//     ]
//   }

// gantiNama = () => {

//     this.setState({
//         persons: [
//           {name: "Angga", age: 30},
//           {name: "Budi", age: 29}
//         ]
//       })

// } 
        
        

  render() {
    return (
      
<div>
        <Navbar/>
          <div className="container at-30">
              <h1>Selamat Datang!</h1>
              <h3>Hallo {this.state.user}!</h3>
              <Breadcrumbs/>
              <div className="row">

                <div className="col-4">                  
                  <div className="card">
                    <div className="card-body">
                        <img src={foto} className="profile" alt="logo"></img>
                        <h5 className="card-title">Meidi Tjahyady</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Front End Developer</h6>
                        <p className="card-text">Hi, My name is Meidi Tjahyady, welcome to my new site </p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                        <h3>Contact</h3>
                        <h6 className="card-subtitle mb-2 text-muted">Keep in touch with me</h6>
                        <p><i className="fas fa-phone"></i> 0811722668</p>
                        <p><i className="fas fa-envelope"></i> meidy.tj@gmail.com</p>
                        <p><i className="fas fa-map-marked-alt"></i> Jl. Sultan Agung Tirtayasa Blok B1 No.31</p>
                        <iframe title="ccpc-location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7944.156485635153!2d105.315498!3d-5.405052!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40dc806954e58d%3A0xf256cbbed8d49c0f!2zNcKwMjQnMTguMCJTIDEwNcKwMTgnNTMuOSJF!5e0!3m2!1sen!2sid!4v1547355022166" width="200rem">Location</iframe>    
                        <p><i className="fab fa-facebook"></i> Meidi Tjahyady</p> 
                    </div>
                  </div>
                </div>

                <div className="col-8">
                    <Route exact path="/" component={Home}/>
                    <Route path="/article" component={Article}/>
                    <Route path="/header" component={Header}/>
                    <Route path="/persons" component={Persons}/>
                    <Route path="/pricing" component={Pricing}/>
                
                
                </div>


              </div>
              {/* <div>
        <h1>Ini Person.</h1>
        <Persons Nama={this.state.persons[0].name} umur={this.state.persons[0].age} tahun/>
        <Persons Saya={this.state.persons[1].name} umur={this.state.persons[1].age} tahun/>
        
        <button onClick={this.gantiNama}>Update State</button>
      </div> */}
      </div>
      
      <Footer/>
</div>

    );
  }
}

export default App;
