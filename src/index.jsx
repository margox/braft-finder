import React from 'react'
import FinderController from 'controller.js'
import FinderView from 'view'
import languages from 'languages'

export default (superProps) => {

  const BraftFinder = new FinderController(superProps)

  BraftFinder.ReactComponent = (props = {}) => {

    const componentProps = {
      ...superProps,
      ...props
    }

    const language = componentProps.language ? (languages[componentProps.language] || languages['zh']) : languages['zh']

    return (
      <FinderView
        {...componentProps}
        language={language}
        controller={BraftFinder}
      />
    )

  }

  return BraftFinder

}