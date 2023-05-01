import React,{ Component } from 'react';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Navigation from './components/Navigation/Navbar/Navbar';
import 'tachyons';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      route: 'home'
    }
  }
  
  onRouteChange = (route) => {
    this.setState({route: route})
  }

  render () {
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange}/>
        {this.state.route === 'home' ? 
          <Home onRouteChange={this.onRouteChange}/>
        : (
          this.state.route === 'about'
          ? <About onRouteChange={this.onRouteChange}/> 
          : <Contact onRouteChange={this.onRouteChange}/>
          )
        }
      </div>
    )
  }
}

export default App;
