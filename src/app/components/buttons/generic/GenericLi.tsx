import styled from 'app/styled-components'

import {CommonElementProps} from 'app/helpers/types'

interface Props extends CommonElementProps<HTMLLIElement> {
  flexBasis: number
  flexible: boolean
}

export default styled.li.attrs<Props>({
  style: (props: Props) => ({
    flexBasis: `${props.flexBasis}vw`,
  }),
})<Props>`
  align-items: center;
  display: flex;
  flex-grow: ${({flexible}) => flexible ? 1 : 0};
  justify-content: center;
  margin: 0 1rem;
  list-style: none;
  text-align: center;
  white-space: nowrap;
`
