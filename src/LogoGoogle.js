import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const LogoGoogle = props => {
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
      <path d="M915.2 448l-4.2-17.8h-387v163.8h231.2c-24 114-135.4 174-226.4 174-66.2 0-136-27.8-182.2-72.6-47.4-46-77.6-113.8-77.6-183.6 0-69 31-138 76.2-183.4 45-45.2 113.2-70.8 181-70.8 77.6 0 133.2 41.2 154 60l116.4-115.8c-34.2-30-128-105.6-274.2-105.6 0 0 0 0 0 0-112.8 0-221 43.2-300 122-78 77.6-118.4 189.8-118.4 293.8s38.2 210.8 113.8 289c80.8 83.4 195.2 127 313 127 107.2 0 208.8-42 281.2-118.2 71.2-75 108-178.8 108-287.6 0-45.8-4.6-73-4.8-74.2z"></path>
    </SVG>
  )
}


LogoGoogle.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoGoogle.propTypes = {
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


export default LogoGoogle
