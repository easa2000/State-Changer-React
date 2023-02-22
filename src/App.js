import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      a:10,
      b:20,
      c:30
    };

  }

  changeA=()=>{
    this.setState({a:5});
  }

  changeB=()=>{
    this.setState({b:2});
  }

  changeC=()=>{
    this.setState({c:8});
  }

  changeAll=()=>{
    this.setState(
      {
        a:1,
        b:8,
        c:10
      }
    );
  }
  render(){
  return (
    <div>
      <center>
        <h1>Formula : (a³+b³+c³)+3[(a+b+c)(ab+ac+bc)-abc]</h1>
        <h3>given A: {this.state.a}, B: {this.state.b}, C: {this.state.c}</h3>

        <button onClick={this.changeA}>Change A</button>
        <button onClick={this.changeB}>Change B</button>
        <button onClick={this.changeC}>Change C</button>
        <button onClick={this.changeAll}>Change All</button>

        <p>{ (((this.state.a)**3)+((this.state.b)**3)+((this.state.c)**3))
        +((this.state.a+this.state.b+this.state.c)*((this.state.a)*this.state.b+((this.state.a)*(this.state.c))+((this.state.b)*(this.state.c)))-((this.state.a)*(this.state.b)*(this.state.c)))
        }</p>

      </center>

    </div>
  );
  }
}

export default App;
