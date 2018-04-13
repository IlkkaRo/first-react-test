import React from 'react';
import ReactDOM from 'react-dom';

class Input extends React.Component{
  constructor(props){
    super(props);
    this.state = {messagefield: 'write something'};
  }

handleChange =(event)=>{
  let inputField = event.target;
  if(inputField.textLength < 0)
  {
    this.setState({messagefield: "Write something..."})
  }
  if(inputField.textLength < 20)
  {
    this.setState({messagefield: event.target.value});
  }
}

  render(){
    return(
      <div>
        <input type="text" onChange={this.handleChange}/>
        <p>{this.state.messagefield}</p>
      </div>
    );
  }
}
//goddamn github
ReactDOM.render(<Input />, document.getElementById('root'));
