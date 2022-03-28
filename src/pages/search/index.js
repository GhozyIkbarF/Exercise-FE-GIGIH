import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'



import { Component } from 'react';
const giphy = (process.env.REACT_APP_GIPHY_KEY)

export default class Sample extends Component {
    state = {
      gifs: [],
      text: ""
    };
    
    handleInput = (e) => {
      this.setState({text: e.target.value})
    };

    getGifs = async (e) => {
      e.preventDefault();
      const gifs = await fetch(
        `http://api.giphy.com/v1/gifs/search?q=${this.state.text}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12`
      ).then((response) => response.json());

      this.setState({gifs: gifs.data });
    };

  render() {
    console.log(process.env.REACT_APP_GIPHY_KEY)
    return (
      <div className="container">
        <form className="form-inline" onSubmit={this.getGifs} >
        <input onChange={this.handleInput} placeholder='cari...'/>
        </form>

        {this.state.gifs.map((gif) => (
          <div>
            <img src={gif.images.fixed_width.url} alt=""/>
          </div>
        ))}
      </div>
    );
  }
}

// export default class Sample extends Component {
//     state = {users: []};

//     getUser = async () => {
//         const users = await fetch(
//             'https://jsonplaceholder.typicode.com/users'
//             ).then(response => response.json());
//         this.setState({users});
//     };

//   render() {
//       const {users} = this.state;
//     return (
//       <>
//       {users.length > 0 && (
//             <ul>
//                 {users.map((user, index) => (
//                     <li key={index}>
//                         {user.name} {user.email}
//                     </li>
//                 ))}
//             </ul>
//         )}
//         <button onClick={this.getUser}>Get Users</button>
//       </>
//     );
//   }
// }


// export default class index extends Component {
//     state = {counter: 0};

//     handleIncrement = () => {
//         this.setState(prevState => ({counter: prevState.counter + 1}));
//     };

//     handleDecrement = () => {
//         this.setState(prevState => ({counter: prevState.counter - 1}));
//     }

//   render() {
//       const {counter} = this.state;
//     return (
//         <>
//         <h1>{counter}</h1>
//         <br />
//         <button onClick={this.handleIncrement}>+</button>
//         <button onClick={this.handleDecrement}>-</button>
//         </>
//     )
//   }
// }


// const  Sample = () => {
//     s counter  = 0;

//     return(
//         <>
//             Counter is {counter}
//             <br />
//             <button onClick={() => { counter-- }}>-</button>
//             <button onClick={() => { counter++ }}>+</button>
//         </>
//     );
// };
// export default Sample;


// const Index = () => {
//     const [data, setData] = useState();

//     const url = 'https://developers.giphy.com/docs/api/endpoint#search'

//     const getAllNotes = () => {
//         axios.get(`${url}`)
//             .then(res => {
//                 setData(res.data);
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }

//     useEffect(() => {
//         getAllNotes();
//     }, [])

//     console.log(data);
//   return (
//     <div>
//     </div>
//   )
// }

// export default Index;
