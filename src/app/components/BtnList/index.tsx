import * as React from 'react'
import styled from 'styled-components'

import {ClassType} from 'app/metatypes'
import {getRandomInt} from 'app/utils'
import {items} from './items'
import {GenericBtn} from '../buttons'

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`

export class BtnList extends React.Component<{}, {}> {
  render() {
    const els = items.map((it, i) => {
      const LiComponent: ClassType<GenericBtn> = it.component || GenericBtn
      return <LiComponent key={i} text={it.name} size={it.size} width={getRandomInt(60, 500)}/>
    })
    return <Ul>
      {els}
    </Ul>
  }
}
