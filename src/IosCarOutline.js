import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosCarOutline extends Component {

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
        <path d="M869.4 406.8l31-4.8c0 0 0 0 0 0 14.2 0 44.8-6 51-12.4s8.4-11.6 8.4-17.2-3.4-15.8-9.6-22.6c-6-6.8-32-10.6-47.4-12.6-4.4-0.6-7.8-0.8-10.4-0.8-6.4 0-8.2 1.4-11 3.2-4.6 3-6 23.4-6.4 34l-16.2 3.6c-9.6-25-22.8-71.2-43-108-23-41.6-47-54.8-57-58-9.8-3-18.8-5.2-86-12.2-67.4-7-126-7-160.8-7s-93.4 0-161.2 7.2c-67.2 6.8-76.2 9-86 12.2-10 3.2-34 16.4-57 58-20.2 36.8-33.4 83-43 108l-16.2-3.6c-0.4-10.6-1.8-31.2-6.4-34-2.8-1.8-4.8-3.4-11-3.4-2.6 0-5.8 0.2-10.2 0.8-15.2 2-41.2 5.6-47.4 12.4-6 6.8-9.4 16.6-9.4 22.2s2.2 11.8 8.4 18.2c6.2 6.4 37 12.4 51 12.4 0 0 0 0 0 0l31 4.8c0 0-53.6 28.4-82.4 60.8 0 0-8.2 49-8.2 115.8 0 96 11.6 176.6 11.6 176.6 53 9.2 92.4 12.4 131.8 13.4 10.8 0.2 21.2 0.4 31.8 0.4 8.6 0 17.4 0 26.6-0.2 48.8-0.6 31.6-14.8 53.4-14.8 0.2 0 0.6 0 0.8 0 22.6 0.4 110 9 192 9s169.4-8.6 192-9c0.2 0 0.6 0 0.8 0 21.6 0 4.4 14.2 53.4 14.6 9 0 17.6 0.2 26 0.2 10.8 0 21.4-0.2 32.6-0.4 39.4-1 79-4.4 131.8-13.6 0 0 11.6-80.6 11.6-176.8 0-67-8.2-115.8-8.2-115.8-29-32.4-82.6-60.6-82.6-60.6zM220.8 308.8c8.6-20.2 28-54.2 44.2-65.6 0 0 94-19.2 247-19.2s247 19.2 247 19.2c16.2 11.2 35.6 45.2 44.2 65.6s22.8 67.6 20.6 73c-1.6 4 0.4 6.6-10.8 6.6-3.6 0-8.8-0.2-16-0.8-28.6-2.2-199-4.6-285-4.6s-256.2 2.4-285 4.6c-7.2 0.6-12.2 0.8-16 0.8-11.4 0-9.2-2.6-10.8-6.6-2.2-5.6 12-52.8 20.6-73zM919.6 732.2c-36.6 5.6-68.6 8.4-103.8 9.2-10.2 0.2-20.2 0.4-31.8 0.4-7.4 0-15.6 0-25.6-0.2-11-0.2-16.2-1-18.2-1.6-7.2-6.6-17-13.2-35.4-13.2-0.4 0-0.8 0-1.4 0-7.8 0.2-21 1-39.4 2-38.4 2.4-96.6 6.8-152 7-55.4 0-113.6-4.6-152.2-7-18.4-1.2-31.6-2-39.4-2-0.4 0-0.8 0-1.4 0-18.4 0-28.2 6.6-35.4 13.2-2 0.4-7.2 1.4-18.2 1.6-10.6 0.2-18.8 0.2-26.2 0.2-11.2 0-21.2-0.2-31-0.4-35.2-1-67.4-3.8-103.8-9.2-3.4-30.2-8.4-86.4-8.4-148.8 0-46.6 4.2-84.6 6.4-101.4 21.4-20.8 55.2-41.2 67.4-47.8l27.6-15c0 0 88.6-4 314.6-4s314.4 4 314.4 4l27.8 15c12.2 6.6 46 26.8 67.4 47.6 2.2 16.8 6.4 54.6 6.4 101.6 0 62.2-5 118.6-8.4 148.8z M277.6 556.6c-19.8 0-59.6-2-69-2.4-9.4-0.2-17.6 7.6-22.4 7.6s-51-7.2-56-29.8c-5-22.4 0-46 0-45.6 31-1.4 61-0.4 117 15.6 56.2 15.8 87.2 46.6 87.2 46.6s-37 8-56.8 8z M684.4 678.6c-25.4 3.4-117 4.4-172.4 4.4s-147-1-172.4-4.4c-26.2-3.4-59.6-34.6-36.8-60.4 15.2-17 41.6-27.2 97.8-34.6 59.6-7.6 97.2-8.6 111.2-8.6s51.6 1 111.2 8.6c56.2 7.4 86.4 19.2 97.8 34.6 20.8 27.6-10.2 56.8-36.4 60.4z M893.8 532.2c-5 22.4-51.2 29.8-56 29.8s-13-7.8-22.4-7.6c-9.4 0.4-49.2 2.4-69 2.4s-56.8-8-56.8-8 31-30.8 87.2-46.6c56-16 86-17 117-15.6-0-0.4 5 23-0 45.6z M802 824.6c0 4.2 2.6 7.4 6.4 7.4 0 0 106 0 113 0 9.8 0 11.8-7 12.4-11 2.8-16.8 3.8-42.6 3.8-42.6-51.4 9.4-97.6 11-135.6 12v34.2z M90.4 821c0.6 4 2.6 11 12.4 11 7 0 113.4 0 113.4 0 3.8 0 6-3.2 6-7.4v-34.2c-38-1-84.4-2.6-135.8-12-0.2 0.2 1.2 25.8 4 42.6z"></path>
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


IosCarOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCarOutline.propTypes = {
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


export default IosCarOutline
