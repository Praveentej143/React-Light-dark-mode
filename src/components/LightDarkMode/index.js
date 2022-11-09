import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: false}

  onChange = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }))
  }

  render() {
    const {isDarkMode} = this.state
    const modelClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const text = isDarkMode ? 'Light Mode' : 'Dark mode'

    return (
      <div className="bg-container">
        <div className={`container ${modelClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="btn" type="button" onClick={this.onChange}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
