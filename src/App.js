import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './App.css'

// Replace your code here
class App extends Component {
  state = {searchInput: '', wordsList: []}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickAdd = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const newText = {
      id: uuidv4(),
      text: searchInput,
    }
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, newText],
      searchInput: '',
    }))
  }

  render() {
    const {searchInput, wordsList} = this.state
    return (
      <div className="main-container">
        <div className="con-1">
          <h1>Count the characters like a Boss...</h1>
          <div className="con">
            {wordsList.length > 0 ? (
              <ul>
                {wordsList.map(each => (
                  <li key={each.id} className="list-con">
                    <p className="li-el" key={each.id}>
                      {each.text}: {each.text.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                className="ima"
                alt="no user inputs"
              />
            )}
          </div>
        </div>
        <div className="con-2">
          <h1 className="header">Character Counter</h1>
          <form className="form" onSubmit={this.onClickAdd}>
            <input
              type="text"
              className="inp"
              placeholder="Enter the Characters here"
              onChange={this.onChangeInput}
              value={searchInput}
            />
            <button className="btn" type="submit" onClick={this.onClickAdd}>
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
