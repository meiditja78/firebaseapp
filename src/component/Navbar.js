import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Home from './Home'
// import Header from './Header';
// import Footer from './Footer';
// import Article from './Article';
// import Pricing from './Pricing';


class Navbar extends Component {
    render() {
        return (

            <div>
                <h1>settimostudio</h1>
                {/* <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/header">Header</Link></li>
                    <li><Link to="/article">Article</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                </ul> */}

                {/* <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/article" component={Article}/>
                    <Route path="/header" component={Header}/>
                    <Route path="/pricing" component={Pricing}/>
                </div> */}


<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
    aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="header">Header</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="article">Article</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="persons">Persons</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="pricing">Pricing</Link>
        </li>
    </ul>
    <span className="navbar-text">
        settimostudio 
    </span>

    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>

</div>
</nav>


            </div>

        );
    }
}

export default Navbar;