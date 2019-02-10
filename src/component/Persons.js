// import React, {Component} from 'react';

// const Person = (props) => {
//     return (
//         <div>
//             <h1>Ini Person.</h1>
//             <p>Saya {props.name}, Umur{props.age} tahun</p>
//         </div>
//     );
// };

// export default Person;

// ================================================


import React, { Component } from 'react';

class Persons extends Component {
    state = {
        persons: [
          {name: "Meidi", age: 40},
          {name: "Jefry", age: 25},
          {name: "Yayan", age: 30}
        ]
      }

    gantiNama = () => {

        this.setState({
            persons: [
              {name: "Angga", age: 39},
              {name: "Budi", age: 29}
            ]
          })

    } 
    render() {
        return (
            <div>
            <h1>Ini Person.</h1>
            <p>Saya {this.state.persons[0].name}, Umur{this.state.persons[0].age} tahun</p>
            <p>Saya {this.state.persons[1].name}, Umur{this.state.persons[1].age} tahun</p>
            
            <button onClick={this.gantiNama}>Update State</button>
            </div>
        );
    }
}

export default Persons;