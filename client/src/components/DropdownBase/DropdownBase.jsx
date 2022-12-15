import React from 'react'
import Portal from '../Portal/Portal'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useReducer } from 'react'
export default function DropdownBase({ rect, styleContent, stylePortal, width, children, setOpen }) {
  return (
    <Portal
      styleContent={{
        left: `${rect?.left + window?.scrollX}px`,
        top: `${rect?.top + rect?.height + 4}px`,
        width: `${width ? width : rect.width}px`,
        ...styleContent
      }}
      setOpen={setOpen}
      stylePortal={{ ...stylePortal }}
    >
      {children}
    </Portal>
  )
}

DropdownBase.propTypes = {
  rect: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }).isRequired
}
