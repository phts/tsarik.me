import * as React from 'react'
import styled, {StyledFunction} from 'styled-components'

import {
  ItemCategory,
  ItemSize,
} from 'app/data/items'
import {BaseProps} from './BaseBtnComponent'

const fontSizeMap = {
  [ItemSize.M]: '10pt',
  [ItemSize.L]: '12pt',
  [ItemSize.XL]: '14pt',
  [ItemSize.XXL]: '16pt',
}

const borderMap = {
  [ItemCategory.Meta]: '2px dotted',
}

interface Props extends BaseProps {
  onClick?: (ev?: React.MouseEvent<HTMLButtonElement>) => void
}

interface ButtonProps {
  borderStyle: string
  fontSize: string
}

interface LiProps {
  width: number
}

type ButtonElProps = ButtonProps & React.HTMLProps<HTMLButtonElement>
const button: StyledFunction<ButtonElProps> = styled.button
const Button = button`
  background: none;
  border: 0 none;
  border-bottom: ${(props: ButtonElProps) => props.borderStyle || '1px dashed'};
  color: inherit;
  cursor: pointer;
  font-size: ${(props: ButtonElProps) => props.fontSize};
  margin: 0;
  padding: 0;
`

type LiElProps = LiProps & React.HTMLProps<HTMLLIElement>
const li: StyledFunction<LiElProps> = styled.li
const Li = li`
  flex-basis: ${props => props.width}px;
  margin: 0 1em;
  list-style: none;
  text-align: center;
  white-space: nowrap;
`

export class GenericBtn extends React.Component<Props, {}> {
  render() {
    const fontSize = fontSizeMap[this.props.size || ItemSize.M]
    return <Li width={this.props.width}>
      <Button
          onClick={this.props.onClick}
          fontSize={fontSize}
          borderStyle={borderMap[this.props.category]}>
        {this.props.text}
      </Button>
    </Li>
  }
}
