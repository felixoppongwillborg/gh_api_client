import React, { Component } from 'react'
import { Button, Input, Form } from 'semantic-ui-react'
import axios from 'axios'

class GHSearch extends Component {
  state = {
    result: [],

  }

  searchHandler = async event => {
    let response;
    const query = event.target.sfield.value
      response = await axios.get(`https://api.github.com/search/users?q=${query}`)
        this.setState({ result: response.data.items })
    } 


  renderResults = (items) => {
    let a = items.map((item) => {
      return(
        <div>
          <h3>{item.login}</h3>
        </div>
      )
    })
    return a
  }

  render(){
    return (
    <>
      <Form onSubmit={this.searchHandler}>
        <Input type="text" id="search-field" name="sfield" placeholder="Input GH username"/>
        <Button name="search-btn" id="search-submit">Search</Button>
      </Form>
        {this.renderResults(this.state.result)}
      
      
    </>
  )
  }
}
export default GHSearch