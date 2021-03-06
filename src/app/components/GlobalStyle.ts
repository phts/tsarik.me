import {createGlobalStyle} from 'styled-components'
import {media} from 'helpers/css'

export default createGlobalStyle`
  html {
    ${media.max.tablet`
      font-size: 90%;
    `}
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  * {
    flex: 0 1 auto;
  }
`
