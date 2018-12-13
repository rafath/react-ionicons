import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdAt extends Component {

  constructor(props) {
    super(props)
    this.state = {classNames: [], animationActive: false}
    this._getClasses = this._getClasses.bind(this)
  }

  render() {
    const style = {
      ...this.props.style,
      color: this.props.color,
      fontSize: this.props.fontSize,
    }

    return (
      <SVG
        style={this.props.style}
        className={this._getClasses()}
        fill={this.props.color}
        width={this.props.fontSize}
        height={this.props.fontSize}
        viewBox="0 0 1024 1024"
        onClick={this.props.onClick}
        rotate={this.props.rotate ? 1 : 0}
        shake={this.props.shake ? 1 : 0}
        beat={this.props.beat ? 1 : 0}
      >
        <path d="M531.2 424.6c-21 0-37 8.8-48 26.4s-18.2 44-21.6 79.2c-1.8 23.4 0 41 5.4 53s14.2 18 26.2 18c11 0 20.6-3 29.2-8.8s16.2-16.6 22.6-32.4l12.2-132c-4.4-1-8.8-1.8-13-2.4-4.6-0.8-8.8-1-13-1z M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416 416-186.2 416-416-186.2-416-416-416zM767.6 499.8c-1.8 42.8-15.2 79.8-40 111.2-24.8 31.2-62 46.8-111.2 46.8-16.4 0-30.6-4.4-42.4-13.2-12-8.8-20.4-21.4-25.2-37.6-8.2 16.6-18.8 29-31.4 37.2s-27.4 12.4-44.4 12.4c-30.2 0-53.2-11.6-69.2-34.6s-21.8-53.6-17.6-91.8c5.2-48.8 20-88 44.4-117.4s54-44 88.8-44c24.4 0 44.2 2.6 59 7.6s31.2 11.4 49 22l-1-0.2h1.6l-15.4 166.8c-1 17 0.2 29.2 3.4 35.6 3.4 6.4 7.8 9.8 13.4 9.8 22.6 0 40.8-10.2 54.4-31.2s21.2-47.2 22.8-79.2c3.2-66-10.2-117.4-40.4-154.2s-76.6-55.4-139.4-55.4c-61 0-109.6 19.8-145.6 59.6s-55.4 93.8-58.6 162.4c-3.4 66.8 11.2 119.6 43.8 158.2 32.6 38.8 79.4 58.2 140.6 58.2 17 0 34.6-1.8 53-5.4 18.2-3.6 34.2-8.2 47.4-13.6l11.6 48.4c-13.6 8.2-30.8 14.6-51.8 19.2s-41.4 6.8-61.4 6.8c-81.6 0-144.6-24.2-188.6-72.8-44-48.4-64.4-114.8-61-199.2 3.6-83.6 29.8-149.8 78.2-198.8 48.6-49 113-73.4 193.4-73.4 79 0 139.6 23.2 181.4 69.4 42.4 46.4 61.6 109.8 58.4 190.4z"></path>
      </SVG>
    )
  }

  _getClasses() {
    return [...this.state.classNames, this.props.className].join(' ')
  }

  _getPathByIconName() {
    let icon = icons.find(icon => icon.tags[0] === this.props.icon)
    if (icon) return icon.paths.join(' ')
    return ''
  }

}


MdAt.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdAt.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  fontSize: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default MdAt
