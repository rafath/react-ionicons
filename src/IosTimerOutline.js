import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosTimerOutline = props => {
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
      <path d="M473.2 543.2c9.2 11.4 23 18.8 38.8 18.8 27.6 0 50-22.4 50-50 0-14.6-6.4-27.6-16.4-36.8-1.2-1.4-2.6-3-4.4-4.4 0 0-235.4-175-240.6-170.4s170.6 240.4 170.6 240.4c0.4 0.8 1.4 1.6 2 2.4z M512.4 96v0h-0.4v224h32v-189.4c195.6 16.6 350.6 181 350.6 381 0 211-171.4 382.8-382.4 382.8s-382.6-171.6-382.6-382.6c0-105.6 43-201.2 112.2-270.4l-23.8-23.6c-75.4 75.4-122 179.4-122 294.2 0 229.8 186.2 416 416 416s416-186.2 416-416c0-229.8-186-416-415.6-416z"></path>
    </SVG>
  )
}


IosTimerOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosTimerOutline.propTypes = {
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


export default IosTimerOutline
