import * as React from 'react'

import {
  Item,
  ItemCategory,
  ItemSize,
} from 'app/data/items'

export interface BaseProps {
  item: Item,
  width: number
}

const fontSizeMap: {[index: number]: string} = {
  [ItemSize.M]: '10pt',
  [ItemSize.L]: '12pt',
  [ItemSize.XL]: '14pt',
  [ItemSize.XXL]: '16pt',
}

const borderMap: {[index: number]: string} = {
  [ItemCategory.Meta]: '2px dotted',
}

export class BaseBtnComponent<P extends BaseProps = BaseProps, S = {}>
             extends React.Component<P, S> {

  protected get borderStyle() {
    return borderMap[this.props.item.category] || '1px dashed'
  }

  protected get fontSize(): string {
    return fontSizeMap[this.props.item.size]
  }

  protected get flexBasis() {
    return `${this.props.width}px`
  }

  protected get text() {
    return this.props.item.name
  }
}
