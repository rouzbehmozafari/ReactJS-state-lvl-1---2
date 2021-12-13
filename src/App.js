import React from 'react';

import './App.css';
// import Q from './Q';
// import A from './A';

class App extends React.Component {
  state = {
    checked : false
  }

  show = ()=>{
    let ant = document.createElement('div')
    ant.setAttribute('class', 'added')
    ant.textContent = 'Fast Learning Curve'
    if (!this.state.checked) {
      document.querySelector('.Q').after(ant)
    }
    else (

      document.querySelector('.added').remove()
    )
    this.setState({checked : !this.state.checked})
    
  }
  render() { 
    return (
    <div className="App">
        <div className="qbox">
          <div className="Q">
              <span onClick={this.show}>Why is React great</span> 
              <div className="cl"></div>
          </div>
        </div>

        {/* <div className="A">
          <p>Fast Learning Curve</p>
        </div> */}

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
