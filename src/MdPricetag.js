import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdPricetag = props => {
  return (
    <SVG
      style={props.style}
      className={props.className}
      fill={props.color}
      width={props.fontSize}
      height={props.fontSize}
      viewBox="0 0 1024 1024"
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
    >
      <path d="M832 128h-316.8l-362.2 375.2c-16 16-24.6 37-25 58-0.6 22.6 7.8 45.2 25 62.4l247.4 247.2c16 16 41.6 25 57.6 25s45.6-7.8 62.8-25l375.2-358.8v-320l-64-64zM770.6 333.4c-43.4 12.2-82.6-20-82.6-61.4 0-35.4 28.6-64 64-64 41.4 0 73.6 39.2 61.4 82.6-5.8 20.6-22.2 37-42.8 42.8z"></path>
    </SVG>
  )
}


MdPricetag.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdPricetag.propTypes = {
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


export default MdPricetag
