import React from 'react'
import FinderController from 'controller.js'
import FinderView from 'view'
import languages from 'languages'
import * as ImageUtils from 'utils/image'

export default class BraftFinder extends FinderController {

  constructor (props) {
    super(props)
    this.superProps = props
  }

  ReactComponent = (props = {}) => {

    const componentProps = {
      ...this.superProps,
      ...props
    }

    const language = (typeof componentProps.language === 'function'
      ? componentProps.language(languages, 'braft-finder')
      : languages[componentProps.language]) || languages['zh']

    return (
      <FinderView
        {...componentProps}
        language={language}
        controller={this}
      />
    )

  }

}

export { ImageUtils }