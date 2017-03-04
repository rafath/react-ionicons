import React, { Component } from 'react'
import ionicons from './../ionicons/css/ionicons.min.css'
import styles from './index.css'

class Ionicon extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const style = {
      fontSize: this.props.fontSize,
      color: this.props.color
    }

    return(
      <i
      className={this.props.icon + ' ' + `${this.props.rotate ? 'rotate' : ''}`}
      style={style}
      ></i>)
  }
}

export default Ionicon
