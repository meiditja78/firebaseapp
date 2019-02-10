import React, { Component } from 'react';

class Breadcrumbs extends Component {
    render() {
        return (
            <div>
<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a to="#">Home</a></li>
    <li className="breadcrumb-item"><a to="header">Header</a></li>
    <li className="breadcrumb-item"><a to="article">Article</a></li>

  </ol>
</nav>
            </div>
        );
    }
}

export default Breadcrumbs;