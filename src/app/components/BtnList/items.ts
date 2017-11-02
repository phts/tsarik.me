import {
  AscendingBtn,
  BtnSize,
  ColorsBtn,
  GenericBtn,
  RandomBtn,
} from '../buttons'

export interface Item {
  name: string
  component?: typeof GenericBtn
  size?: BtnSize
}

export type Items = Array<Item>

export const items: Items = [
  {name: '8-bit'},
  {name: 'Anathema'},
  {name: 'Android'},
  {name: 'Angular', size: BtnSize.L},
  {name: 'Ascending', component: AscendingBtn},
  {name: 'bash.org'},
  {name: 'Belarus'},
  {name: 'Bicycle'},
  {name: 'Billiard'},
  {name: 'BitBucket'},
  {name: 'Board games'},
  {name: 'Cats'},
  {name: 'Chrome'},
  {name: 'Colors', component: ColorsBtn},
  {name: 'Curriculum vitae', size: BtnSize.L},
  {name: 'Debian'},
  {name: 'Deep Purple'},
  {name: 'Design'},
  {name: 'Drums', size: BtnSize.XL},
  {name: 'Email'},
  {name: 'EN'},
  {name: 'Epam', size: BtnSize.L},
  {name: 'Facebook'},
  {name: 'Family', size: BtnSize.L},
  {name: 'Family Guy'},
  {name: 'Firefox'},
  {name: 'foobar2000'},
  {name: 'GitHub', size: BtnSize.L},
  {name: 'God Is An Astronaut'},
  {name: 'Google'},
  {name: 'Grodno'},
  {name: 'Habr'},
  {name: 'Half Life'},
  {name: 'Heroes of Might and Magic 3'},
  {name: 'Hive'},
  {name: 'iOS'},
  {name: 'Java'},
  {name: 'JavaScript', size: BtnSize.XL},
  {name: 'Joy in Time'},
  {name: 'Krako\u0301w'},
  {name: 'Langaroo'},
  {name: 'Last.fm'},
  {name: 'Lego'},
  {name: 'LinkedIn'},
  {name: 'Lunatic Soul', size: BtnSize.L},
  {name: 'Minsk'},
  {name: 'Music'},
  {name: 'NES'},
  {name: 'Night'},
  {name: 'Novopolotsk'},
  {name: 'Opeth'},
  {name: 'Paiste'},
  {name: 'Phil Tsarik', size: BtnSize.XXL},
  {name: 'phts'},
  {name: 'Pilip Tsaryk'},
  {name: 'Pink Floyd', size: BtnSize.L},
  {name: 'Pixel Dungeon'},
  {name: 'Playing cards'},
  {name: 'Poland'},
  {name: 'PSU'},
  {name: 'Random', component: RandomBtn},
  {name: 'React', size: BtnSize.L},
  {name: 'Ritchie Blackmore'},
  {name: 'Riverside'},
  {name: 'RU'},
  {name: 'Ruby'},
  {name: 'SaM Solutions'},
  {name: 'S\u030Ckoda'},
  {name: 'Skype'},
  {name: 'Sleep'},
  {name: 'Software Developer', size: BtnSize.XL},
  {name: 'Sound'},
  {name: 'Space Resonance'},
  {name: 'Space'},
  {name: 'Stack Overflow'},
  {name: 'Sublime Text'},
  {name: 'Syberia'},
  {name: 'Tel number'},
  {name: 'The Gathering'},
  {name: 'The Netherlands'},
  {name: 'Travel'},
  {name: 'Typescript'},
  {name: 'Uber'},
  {name: 'Ultramarined'},
  {name: 'Vater 5A Los Angeles'},
  {name: 'Video games'},
  {name: 'Vk'},
  {name: 'Waterfox'},
  {name: 'Windows'},
  {name: 'ZX Spectrum'},
  {name: '© Phil Tsarik, 2017'},
]
