import en from './en'
import ru from './ru'
import {KnownName} from '../names'

export enum Lang {
  EN,
  RU,
}

export interface Translatable {
  description?: string
  name?: string
}

export type TranslatedStrings = {[index in KnownName]?: Translatable}

export const translations: {[index: number]: TranslatedStrings} = {
  [Lang.EN]: en,
  [Lang.RU]: ru,
}
