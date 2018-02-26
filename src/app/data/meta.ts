import {KnownName} from './names'

export enum ItemType {
  Item = 'Item',
  Meta = 'Meta',
}

export enum ItemPosition {
  Head = 'Head',
  Middle = 'Middle',
  Tail = 'Tail',
}

export enum ItemSize {
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
}

type RawMetaPropSet = {
  [P in keyof MetaPropsSet]?: MetaPropsSet[P]
}

type RawMetaProps = {[index in KnownName]?: RawMetaPropSet}

interface MetaPropsSet {
  type: ItemType
  position: ItemPosition
  size: ItemSize
}

export const DEFAULT_META_PROPS_SET: MetaPropsSet = {
  position: ItemPosition.Middle,
  size: ItemSize.M,
  type: ItemType.Item,
}

export const metaProps: RawMetaProps = {
  EN: {
    position: ItemPosition.Head,
    type: ItemType.Meta,
  },
  RU: {
    position: ItemPosition.Head,
    type: ItemType.Meta,
  },
  Title: {
    position: ItemPosition.Head,
    size: ItemSize.XXL,
    type: ItemType.Meta,
  },
  '© Phil Tsarik, 2018': {
    position: ItemPosition.Tail,
  },

  Ascending: {
    type: ItemType.Meta,
  },
  Colors: {
    type: ItemType.Meta,
  },
  Feedback: {
    type: ItemType.Meta,
  },
  Random: {
    type: ItemType.Meta,
  },

  Angular: {
    size: ItemSize.L,
  },
  Cats: {
    size: ItemSize.XL,
  },
  'Curriculum vitae': {
    size: ItemSize.L,
  },
  Drums: {
    size: ItemSize.XL,
  },
  GitHub: {
    size: ItemSize.L,
  },
  JavaScript: {
    size: ItemSize.XL,
  },
  Kraków: {
    size: ItemSize.L,
  },
  Music: {
    size: ItemSize.XL,
  },
  'Phil Tsarik': {
    size: ItemSize.XXL,
  },
  'Pink Floyd': {
    size: ItemSize.L,
  },
  React: {
    size: ItemSize.L,
  },
  'Software Engineer': {
    size: ItemSize.XL,
  },
}
