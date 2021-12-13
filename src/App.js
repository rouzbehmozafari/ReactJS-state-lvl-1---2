import React from 'react';

import './App.css';
// import Q from './Q';
// import A from './A';

class App extends React.Component {
  state = {
    num : 0
  }
  add = () => {
    this.setState({num : this.state.num +1})
  }
  reduce = () => {
    this.setState({num : this.state.num -1})
  }
  reset = () => {
    this.setState({num : 0})
  }
  
  render() { 
    return (
    <div className="App">
      <div className="container">
        <div onClick={this.reduce} className="minus">-</div>
        <div className="display">{this.state.num}</div>
        <div onClick={this.add} className="plus">+</div>
        <div onClick={this.reset} className="reset">reset</div>
      </div>

    </div>
  );
  }
}
 
export default App;

// function App() {
//   return (
//     <div className="App">
//       <div className="ButtC">

//       </div>
//     </div>
//   );
// }

// export default App;
