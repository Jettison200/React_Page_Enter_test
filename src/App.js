import React, { Component } from "react";
import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';
import Input from './Components/Input/Input';


class App extends Component {

  state = {
    name: 'Client',
   display: {display: ""},
   blur: {filter: "blur(6px)"}
  }

  setNameHandler = (event)=>{
    let name = {...this.state.name};
    name = event.target.value;

    this.setState({
      name: name
    })
  }

  removeHandler = ()=>{
    let display = {...this.state.display};
    display.display = "none";
    let blur = {...this.state.blur};
    blur.filter = "none"


    this.setState({
      display: display,
      blur: blur
    })
  }

  render() {

    return (
    <div>
       <Input handler={this.setNameHandler} remove={this.removeHandler} newStyle={this.state.display} name={this.state.name}/>
      <div style={this.state.blur}>
      <Nav />
      <Header name={this.state.name}/>
      </div>
     

    </div>
    )
  }
}

export default App;
