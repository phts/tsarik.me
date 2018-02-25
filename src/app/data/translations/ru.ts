const skodaImg = require('static/img/skoda.jpg')

import {TranslatedStrings} from './index'
import {a, callto, link, mailto, p, tel} from 'app/helpers/html'

export const ru: TranslatedStrings = {
  EN: {
    name: 'АНГ',
  },
  RU: {
    name: 'РУС',
  },
  '© Phil Tsarik, 2018': {
    name: '© Филипп Царик, 2018',
    description: `
      <p>Этот сайт создавался и поддерживается мной в свободное время.</p>
      <p>Основные используемые технологии:</p>
      <ul>
        <li>Preact</li>
        <li>MobX</li>
        <li>TypeScript</li>
      </ul>
    `,
  },
  '+375292181503': {
    description: p(`Мой белорусский номер телефона: ${tel('+375292181503', '+375 29 218-15-03')}.`),
  },
  '+48534898187': {
    description: p(`Мой польский номер телефона: ${tel('+48534898187', '+48 534 898 187')}.`),
  },
  Age: {
    name: 'Возраст',
  },
  Android: {
    name: 'Андройд',
    description: `
      <p>Только андройд. Не люблю iOS.</p>
    `,
  },
  Angular: {
    name: 'Ангулар',
  },
  Ascending: {
    name: 'По порядку',
  },
  'bash.org': {
    name: 'Башорг',
    description: p(`Когда-то давно случайно ${a('http://bash.im/quote/393345', 'попал')} на bash.org.`),
  },
  Belarus: {
    name: 'Беларусь',
  },
  Billiard: {
    name: 'Бильярд',
  },
  BitBucket: {
    name: 'БитБакет',
    description: p(`Использую только для приватных проектов.\
      Все публичные проекты находится на ${link('GitHub', 'моём Гитхабе')}.`),
  },
  'Board games': {
    name: 'Настольные игры',
    description: `
      <p>Люблю играть в настолки, особенно в стратегические.</p>
      <p>Из того, что есть у нас, можно выделить:</p>
      <ul>
        <li>Эволюция</li>
        <li>Улей</li>
        <li>7 чудес</li>
        <li>Космические дальнобойщики</li>
        <li>Роскошь</li>
      </ul>
    `,
  },
  Cats: {
    name: 'Коты',
  },
  Colors: {
    name: 'Цвета',
  },
  'Curriculum vitae': {
    name: 'Резюме',
    description: `
      <p>Всегда актуальное.</p>
      <p>Доступно на ${a('https://github.com/phts/my-cv', 'моём гитхабе')}.</p>
    `,
  },
  Debian: {
    name: 'Дебиан',
  },
  Drums: {
    name: 'Барабаны',
    description: `
      <h3>Мой сет</h3>
      <ul>
        <li>Paiste Signature Dry Ride 20&Prime;</li>
        <li>Paiste 2002 Medium Crash 18&Prime;</li>
        <li>Paiste Signature Precision Crash 17&Prime;</li>
        <li>Paiste 2002 Sound Edge Hi-Hat 14&Prime;</li>
        <li>Sonor Force 3007 Maple Snare Drum 14&Prime;</li>
        <li>Палочки Vater Los Angeles 5A</li>
      </ul>
    `,
  },
  Email: {
    name: 'Имейл',
    description: p(`Мой имейл: ${mailto('phil.tsarik@gmail.com')}.`),
  },
  Epam: {
    name: 'Епам',
    description: `
      <p>Релоцировался в ${link('Krako\u0301w', 'Краков')} и проработал в Епаме чуть больше двух лет.</p>
      <p>
        Изучил тут ${link('Angular', 'Ангуляр')} и ${link('React', 'Реакт')},
        ходил на тренинги, проводил воркшопы, собеседовал новых кандидатов.
      </p>
      <p>С проектом &mdash; как повезёт. Но в большинстве случаев много неинтересного и легаси.</p>
      <p>После Епама перешёл в ${link('Grand Parade', 'Гранд Парэйд')}.</p>
      <p>
        Больше подробностей в ${link('Curriculum vitae', 'моём резюме')} и
        на ${link('LinkedIn', 'линкедине')}.
      </p>
    `,
  },
  Facebook: {
    name: 'Фейсбук',
    description: p(`${a('https://www.facebook.com/phil.tsarik', 'Моя страничка')} в фэйсбуке.`),
  },
  Feedback: {
    name: 'Фидбек',
  },
  Firefox: {
    name: 'Файерфокс',
    description: `
      <p>Пользуюсь только файерфоксом. Не взлюбил хром с самого начала из-за невозможности его настроить под себя.</p>
      <p>
        ${a('https://github.com/phts?utf8=%e2%9C%93&tab=repositories&q=firefox&type=&language=', 'Иногда пишу')}
        ${a('https://addons.mozilla.org/ru/firefox/addon/uft8-special-characters/', 'простые')} аддоны для фф.
      </p>
    `,
  },
  foobar2000: {
    name: 'фубар2000',
    description: `
      <p>Отличный плеер музыки. Пользуюсь им на компе и телефоне.</p>
      <p>
        Однажды даже написал простой, но полезный плагин
        ${a('https://hydrogenaud.io/index.php/topic,110908.0.html', 'Party Shuffle')}.
      </p>
    `,
  },
  GitHub: {
    name: 'ГитХаб',
    description: p(`${a('https://github.com/phts', 'Тут')} находятся полезные и\
      бесполезные проекты, которые доступны для всех.`),
  },
  'Grand Parade': {
    name: 'Гранд Парэйд',
  },
  Habr: {
    name: 'Хабр',
    description: `
      <p>${a('https://habrahabr.ru/users/phil_tsarik/', 'На Хабре')} давным давно опубликовал
         ${a('https://habrahabr.ru/post/128327/', 'статью &laquo;Стеганография в GIF&Raquo;')} для получения инвайта.
         Инвайт получил.</p>
      <p>На Тостере засветился ${a('https://toster.ru/answer?answer_id=158170#answers_list_answer', 'ответом')} на
         &laquo;Как оформить программный код в Microsoft Word&raquo;.</p>
    `,
  },
  'Heroes of Might and Magic 3': {
    name: 'Герои меча и магии 3',
    description: `
      <p>До сих пор играю, если появляется свободное время.</p>
      <p>
        Радует, что несмотря на то, что игра старая, у неё огромное комьюнити, проходят турниры,
        выпускаются аддоны и патчи.
      </p>
    `,
  },
  JavaScript: {
    name: 'Джаваскрипт',
  },
  'Joy in Time': {
    name: 'Радость во времени',
  },
  Krako\u0301w: {
    name: 'Краков',
  },
  'Last.fm': {
    name: 'Ласт.фм',
    description: p(`${a('www.last.fm/user/phil_tsarik', 'Мой профиль')} на Ласт.фм`),
  },
  LinkedIn: {
    name: 'ЛинкедИн',
    description: p(`${a('https://www.linkedin.com/in/tsarik/', 'Мой профиль')} на ЛинкедИне.`),
  },
  Music: {
    name: 'Музыка',
    description: `
      <p>Важнейшая часть моей жизни.</p>
      <h3>Слушаю</h3>
      <p>Мой топ на данный момент:<p>
      <ul>
        <li>${link('Pink Floyd')}</li>
        <li>Lunatic Soul</li>
        <li>Riverside</li>
        <li>Deep Purple</li>
        <li>Opeth</li>
        <li>The Gathering</li>
        <li>Led Zeppelin</li>
        <li>God Is An Astronaut</li>
        <li>Anathema</li>
      </ul>
      <p>Также я есть на ${link('Last.fm', 'Ластфм')}.</p>
      <h3>Играю</h3>
      <p>На ${link('Drums', 'барабанах')}.<p>
      <p>Участвовал в группах:<p>
      <ul>
        <li>${link('Space Resonance')}</li>
        <li>${link('Joy in Time', 'Радость во времени')}</li>
        <li>Mission: Jupiter</li>
        <li>${link('Ultramarined')}</li>
      </ul>
      <p>Сейчас с ребятами в ${link('Krako\u0301w', 'Кракове')} пытаемся играть и сочинять что-то своё.<p>
    `,
  },
  Novopolotsk: {
    name: 'Новополоцк',
    description: p('Мой родной город.'),
  },
  'Phil Tsarik': {
    name: 'Филипп Царик',
    description: p('Приятно познакомиться!'),
  },
  'Pilip Tsaryk': {
    name: 'Пiлiп Царык',
    description: p('Па-беларуску маё імя пішацца менавіта так.'),
  },
  'Pink Floyd': {
    name: 'Пинк Флойд',
  },
  'Playing cards': {
    name: 'Игральные карты',
    description: `
      <p>Коллекционирую с детства.</p>
      <p>
        Не ставлю себе задачу собрать очень много и всё подряд, поэтому коллекция не очень большая и
        насчитывает на данный момент около 65 колод. Собираю именно те, что понравились.
      </p>
    `,
  },
  Poland: {
    name: 'Польша',
    description: p(`В данный момент проживаю в Польше в городе ${link('Krako\u0301w', 'Кракове')}.`),
  },
  PSU: {
    name: 'ПГУ',
  },
  Random: {
    name: 'Вразнобой',
  },
  React: {
    name: 'Реакт',
  },
  'Ritchie Blackmore': {
    name: 'Ричи Блэкмор',
  },
  Ruby: {
    name: 'Руби',
  },
  'SaM Solutions': {
    name: 'Сам Солюшнс',
    description: `
      <p>
        Работал тут во время и после ${link('PSU', 'универа')}. Точнее, не сразу после универа, т.к
        пришлось пару месяцев отсидеться на тракторном заводе по распределению из-за несовершенства белорусских законов.
      </p>
      <p>
        Компания оставила только приятные впечатления. Но проекты разной степени качества, может и не повезти.
        Впрочем, как и в любой аутсорсинговой компании.
      </p>
      <p>
        ${link('Curriculum vitae', 'После 4 лет работы')} тут меня захантил ${link('Epam', 'Епам')},
        и я переехал в ${link('Krako\u0301w', 'Краков')}.
      </p>
    `,
  },
  S\u030Ckoda: {
    name: 'Шкода',
    description: `
      <p>А точнее, S\u030Ckoda Felicia II 1.6 (1999 г. в.).</p>
      <p>
        Моя первая машина, купленная в ${link('Krako\u0301w', 'Кракове')} за какие-то 2300 злотых
        (около $600 по тогдашнему курсу).
      </p>
      <p>Очень надежный автомобиль. Прошёл боевое крещение по украинским дорогам в Буковель.</p>
      <p><img src="${skodaImg}" alt="My S\u030Ckoda"></p>
      <p>Хотя от старости уже начинает капризничать.</p>
    `,
  },
  Skype: {
    name: 'Скайп',
    description: p(`Я в скайпе: ${callto('phil.tsarik')}.`),
  },
  'Software Engineer': {
    name: 'Инженер-программист',
  },
  'Space Resonance': {
    name: 'Спасе Резонасе',
    description: `
      <p>
        <i>Холодным зимним вечером четверо встретились на
        центральной площади ${link('Novopolotsk', 'Новополоцка')}...</i>
      </p>
      <p>
        Так зародилась величайшая и культовая (в определённых кругах) группа
        ${a('https://vk.com/club7812592', 'Space Resonance')}.
      </p>
      <p>
        Является, наверное, самым идеальным попаданием в ${link('Music', 'мой музыкальный вкус')}.
        До сих пор переслушиваю самый первый и единственный полноценный альбом, который был выпущен
        в некоторой спешке, прямо перед распадом группы, и поэтому по качеству он не идеален.
      </p>
      <p>
        Параллельно в это время играл в ${link('Joy in Time', 'Радости во времени')} и иногда приходилось
        на одном концерте играть в двух группах.
      </p>
    `,
  },
  'Stack Overflow': {
    name: 'Стак Оверфлоу',
    description: `
      <p>
        Иногда ${a('https://stackoverflow.com/users/2462524/phts', 'отвечаю и задаю')}
        вопросы на Стак Оверфлоу.
      </p>
    `,
  },
  'Sublime Text': {
    name: 'Саблайм Текст',
    description: `
      <p>Отличный редактор кода. Пользуюсь им каждый день.</p>
      <p>
        Периодически
        ${a('https://github.com/phts?utf8=%e2%9C%93&tab=repositories&q=sublime&type=&language=', 'пишу плагины')}
        для него.
      </p>
    `,
  },
  Title: {
  },
  'The Netherlands': {
    name: 'Нидерланды',
  },
  Typescript: {
    name: 'Тайпскрипт',
  },
  Ultramarined: {
    name: 'Ультрамаринд',
    description: `
      <p>
        Прошло немало месяцев/лет после того, как ${link('Joy in Time', 'Радость во времени')} внезапно распалась
        и смогла эволюционироваться в Ultramarined с новыми идеями и вдохновением.
      </p>
      <p>
        Мы успешно репетировали, сочиняли песни, выступали, и всё складывалось хорошо. До того момента,
        как я не уехал в ${link('Krako\u0301w', 'Краков')}.
      </p>
      <p>
        Больше информации о группе доступно на
        ${a('http://phts.github.io/ultramarined.by/', 'зеркале официального сайта')}.
      </p>
    `,
  },
  'Video games': {
    name: 'Компьютерные игры',
    description: `
      <p>
        Люблю качественные и интересные компьютерные игры, в большинстве случаев квесты и стратегии.
      </p>
      <p>Произведшие на меня огромное впечатление, и производят до сих пор:</p>
      <ul>
        <li>Warcraft 2 / 3</li>
        <li>Starcraft</li>
        <li>Stronghold</li>
        <li>${link('Heroes of Might and Magic 3')} / 4</li>
        <li>Half Life</li>
        <li>Syberia</li>
        <li>Majesty</li>
        <li>Mafia</li>
        <li>GTA</li>
        <li>Война и Мир</li>
        <li>Portal</li>
        <li>Anno 1701 / 1404</li>
        <li>Космические рэйнджеры</li>
        <li>The Talos Principle</li>
      </ul>
      <p>А также некоторые игры на ${link('ZX Spectrum')}.</p>
    `,
  },
  VK: {
    name: 'ВК',
    description: p(`${a('https://vk.com/phil.tsarik', 'Моя страница')} в ВК.`),
  },
  'ZX Spectrum': {
    name: 'Зэд Икс Спектрум',
  },
}
