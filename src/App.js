import React from 'react';
import {SampleText} from './SampleText'
import marked from 'marked'

import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      text: SampleText
    }
    this.handleChange = this.handleChange.bind(this)
    
  }

  handleChange(event){
    this.setState({
      text: event.target.value
    })

  }

  textRender = text => marked(text, {sanitize: true})

  componentDidMount(){
    const text = localStorage.getItem('text')
    if(text.length > 0){
      this.setState({text})
    }
    else{
      this.setState({
        text : SampleText  
      })
    }
    
  }

  componentDidUpdate(){
    const text = this.state.text
    localStorage.setItem('text', text)
    console.log('l\'objet a ete modifie')
  }
  

  render(){

    return (
      <div className = 'container'>
  
        <div className = 'row'>
          <div className ='col-sm-6' >
            <textarea
              rows = '35' 
              cols = '45' 
              className = 'form-control'
              value = {this.state.text}
              onChange = {this.handleChange}            >
            </textarea>
    
          </div>
    
          <div className ='col-sm-6' >
            <div 
              dangerouslySetInnerHTML = {{ __html: this.textRender(this.state.text)}}>  
            </div>
          </div>
        </div>
  
    </div>
    )

  }
  
  
}

export default App;
