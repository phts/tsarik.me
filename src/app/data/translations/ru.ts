import {TranslatedStrings} from './index'
import {a, callto, figure, img, link, mailto, p, tel} from 'app/helpers/html'
import {picture} from 'app/helpers/imgur'

export const ru: TranslatedStrings = {
  EN: {
    name: 'АНГ',
    tooltip: 'Not translated yet. Sorry.',
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
      <p>${a('https://github.com/phts/tsarik.me', 'Исходный код сайта выложен')} на Гитхаб.</p>
    `,
  },
  About: {
    name: 'Обо мне',
  },
  Contacts: {
    name: 'Контакты',
  },
  Hobby: {
    name: 'Хобби',
  },
  Meta: {
    name: 'Мета',
  },
  Work: {
    name: 'Работа',
  },
  '+375292181503': {
    description: p(`Мой белорусский номер телефона: ${tel('+375292181503', '+375 29 218-15-03')}.`),
  },
  '+48534898187': {
    description: p(`Мой польский номер телефона: ${tel('+48534898187', '+48 534 898 187')}.`),
  },
  Age: {
    name: 'Возраст',
    data: {
      days: 'дн.',
      hours: 'ч.',
      min: 'мин.',
      months: 'мес.',
      sec: 'сек.',
      years: 'лет',
    },
  },
  Android: {
    name: 'Андройд',
    description: `
      <p>Только андройд. Не люблю iOS.</p>
    `,
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
    description: p('Родом из Беларуси.'),
  },
  Billiard: {
    name: 'Бильярд',
    description: p('Играю в пул, в большинстве случаев. Смотрю снукер по Евроспорту.'),
  },
  BitBucket: {
    name: 'БитБакет',
    description: `
      <p>
        Использую как для приватных проектов, так и для неактуальных, которым нечего делать на
        ${link('GitHub', 'Гитхабе')}. БитБакет позволяет группировать репозитории по проектам, что очень помогает
        отсортировать актуальные репозитории от устаревших.
      </p>
      <p>На данный момент в публичный доступ выложены:</p>
      <ul>
        <li>
          ${a('https://bitbucket.org/account/user/phts-home/projects/PSU', 'University Projects')} &mdash; программы,
          которые были написаны в период обучения в ${link('PSU', 'университете')}.
        </li>
        <li>
          ${a('https://bitbucket.org/account/user/phts-home/projects/OLD', 'Old Delphi Apps')} &mdash; программы,
          написанные на Delphi примерно в 2004&ndash;2006 годах.
        </li>
      </ul>
    `,
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
  Categorize: {
    name: 'По категориям',
  },
  Cats: {
    name: 'Коты',
    description: '',
    data: [
      {icon: '&#x1F989;', text: 'Совы'},
      {icon: '&#x1F47D;', text: 'Еноты', tooltip: 'У енотов пока нет своего emoji в юникоде'},
      {icon: '&#x1F98A;', text: 'Лисицы'},
      {icon: '&#x1F418;', text: 'Слоны'},
    ],
  },
  Colors: {
    name: 'Цвета',
  },
  'Curriculum vitae': {
    name: 'Резюме',
    description: `
      <p>
        Если коротко &mdash; я ${link('JavaScript', 'фронтэнд')} разработчик с более, чем шестью годами стажа.
        Обладаю глубокими знаниями современных веб-технологий и фреймворков.
      </p>
      <p>
        Если подробнее &mdash; всегда актуальное резюме доступно на
        ${a('https://github.com/phts/my-cv', 'Гитхабе')}, а также на
        ${a('https://www.linkedin.com/in/tsarik/', 'Линкедине')}.
      </p>
    `,
  },
  Debian: {
    name: 'Дебиан',
    description: p('Работаю на Debian.'),
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
      <p>
        Релоцировался в ${link('Krako\u0301w', 'Краков')} и проработал в Епаме
        ${link('Curriculum vitae', 'чуть больше двух лет')}.
      </p>
      <p>
        Изучил тут Ангуляр и ${link('React', 'Реакт')},
        ходил на тренинги, проводил воркшопы, собеседовал новых кандидатов.
      </p>
      <p>С проектом &mdash; как повезёт. Но в большинстве случаев много неинтересного и легаси.</p>
      <p>После Епама перешёл в ${link('Grand Parade', 'Гранд Парэйд')}.</p>
    `,
  },
  Facebook: {
    name: 'Фейсбук',
    description: p(`${a('https://www.facebook.com/phil.tsarik', 'Моя страничка')} на фэйсбуке.`),
  },
  Feedback: {
    name: 'Обратная связь',
    data: {
      sayHello: 'Скажите «привет»...',
    },
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
    description: p(`${a('https://github.com/phts', 'Здесь')} находятся полезные и\
      бесполезные проекты, которые доступны для всех.`),
  },
  'Grand Parade': {
    name: 'Гранд Парэйд',
    description: `
      <p>Моё ${link('Curriculum vitae', 'текущее')} место работы.</p>
      <p>Отличная продуктовая компания, отличные проекты, отличные люди.</p>
    `,
  },
  Habr: {
    name: 'Хабр',
    description: `
      <p>
        Для получения инвайта на Хабр я давным давно опубликовал
        ${a('https://habrahabr.ru/post/128327/', 'статью &laquo;Стеганография в GIF&raquo;')}, в которой описал
        принцип работы программы ${a('https://bitbucket.org/phts-home/gifed/src/master/', 'Gifed')}, написанной в
        ${link('PSU', 'универе')} для курсового проекта по предмету &laquo;Программные методы защиты информации&raquo;.
      </p>
      <p>${a('https://habrahabr.ru/users/phil_tsarik/', 'Инвайт получил')}.</p>
      <p>
        На Тостере засветился
        ${a('https://toster.ru/answer?answer_id=158170#answers_list_answer', 'популярным ответом')} на
        &laquo;Как оформить программный код в Microsoft Word&raquo;.
      </p>
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
    description: `
      <p>
        Основное направление моей деятельности &mdash; джаваскрит и всё, что с ним связано, включая ES6+,
        Angular, ${link('React')}, Node.js, Typescript.
      </p>
    `,
  },
  'Joy in Time': {
    name: 'Радость во времени',
    description: `
      <p>
        Является в некоторой степени противоположностью ${link('Space Resonance')} по стилю
        и настроению. Несмотря на это, я с огромным удовольствием играл в этой группе.
      </p>
      <p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/egVPsfDi81A?rel=0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen>
        </iframe>
      </p>
      <p>Осталась страничка в контакте: ${a('https://vk.com/joyintimes', 'joyintimes')}</p>
    `,
  },
  Krako\u0301w: {
    name: 'Краков',
  },
  'Last.fm': {
    name: 'Ласт.фм',
    description: p(`${a('https://www.last.fm/user/phil_tsarik', 'Мой профиль')} на Ласт.фм`),
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
      <h3>Хожу на концерты</h3>
      <p>Из своего маст-хэв списка уже побывал:</p>
      ${figure(picture('FykwSDm', 'Deep Purple в Минске, 2011 г.'),
               'Deep Purple в Минске, 2011 г.')}
      ${figure(picture('qIIb0bR', 'God is an Astronaut в Санкт-Петербурге, 2012 г.'),
               'God is an Astronaut в Санкт-Петербурге, 2012 г.')}
      ${figure(picture('dPNRWdG', 'Australian Pink Floyd Show в Минске, 2013 г.'),
               'Australian Pink Floyd Show в Минске, 2013 г.')}
      ${figure(picture('tcyuP0Q', 'Dream Theater в Катовице, 2015 г.'),
               'Dream Theater в Катовице, 2015 г.')}
      ${figure(picture('yDFhHGF', 'Riverside в Катовице, 2015 г.'),
               'Riverside в Катовице, 2015 г.')}
      ${figure(picture('5oDXQ4s', 'Дэвид Гилмор во Франции, 2016 г.'),
               'Дэвид Гилмор во Франции, 2016 г.')}
      ${figure(picture('pxy4Skj', 'Anathema в Кракове, 2017 г.'),
               'Anathema в Кракове, 2017 г.')}
      ${figure(picture('FOuMsdO', 'Opeth в Варшаве, 2017 г.'),
               'Opeth в Варшаве, 2017 г.')}
      <p>Осталось:</p>
      <ul>
      <li>${link('Ritchie Blackmore', "Rainbow или Ritchie Blackmore's Night")}</li>
      <li>The Gathering</li>
      <li>The Morningside</li>
      <li>Nightwish</li>
      </ul>
    `,
  },
  Novopolotsk: {
    name: 'Новополоцк',
    description: `
      <p>
        Мой родной город. Находится в Витебской области, ${link('Belarus', 'Республика Беларусь')}. Точные координаты:
        ${a('https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D0%BF%D0%BE%D0%BB%D0%BE%D1%86%D0%BA',
            '55°32′00″ с. ш. 28°40′00″ в. д.')}
      </p>
    `,
  },
  'Phil Tsarik': {
    name: 'Филипп Царик',
    description: `
      <p>
        Меня зовут Филипп Царик. Родился 3 декабря 1987 года в городе ${link('Novopolotsk', 'Новополоцке')} в БССР
        (сейчас &mdash; ${link('Belarus', 'Республика Беларусь')}).
      </p>
      <p>
        В 2011 окончил ${link('PSU', 'Полоцкий Государственный Университет')} по специальности
        ${link('Software Engineer', '&laquo;Программное обеспечение информационных технологий&raquo;')}.
      </p>
      <p>
        Сейчас проживаю в ${link('Kraków', 'Кракове')} и работаю в компании ${link('Grand Parade')}
        ${link('JavaScript', 'фронтэнд разработчиком')}.
      </p>
    `,
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
        насчитывает на данный момент около 65 колод. Собираю именно те, которые понравились.
      </p>
    `,
  },
  Poland: {
    name: 'Польша',
    description: p(`В данный момент проживаю в Польше в городе ${link('Krako\u0301w', 'Кракове')}.`),
  },
  PSU: {
    name: 'ПГУ',
    description: `
      <p>Полоцкий Государственный Университет.</p>
      <p>
        С 2006 по 2011 проучился здесь по специальности &laquo;Программное обеспечение информационных технологий&raquo;
        на радиотехническом факультете (в последствии переформированном в факультет информационных технологий)
        в группе 06ИТ-1.
      </p>
      <p>
        За время учёбы было написано много полезных и бесполезных программ и игрушек.
        ${a('https://bitbucket.org/account/user/phts-home/projects/PSU', 'Некоторые из них я выложил')} на
        ${link('BitBucket', 'Битбакет')}.
      </p>
      <p>
        Также во времена университета у меня был ${a('http://philip-s.narod.ru/', 'свой сайт')}, если можно его
        так назвать, на котором опубликовывал некоторые программы в разделе &laquo;Проекты&raquo;. Но сейчас этот сайт
        давно уже заброшен и скачать ничего не получится.
      </p>
      <p>
        Дипломный проект был на тему &laquo;Разработка сервиса для изучения иностранных языков&raquo;. По своей сути на
        тот момент являлся упрощённым форком сервиса Langaroo &mdash; стартап, над которым я
        ${link('Curriculum vitae', 'работал')} вместе с коллегой. Стартап не взлетел.
      </p>
      <p>По итогу выпустился дипломированным ${link('Software Engineer', 'инженером-программистом')}.</p>
    `,
  },
  Random: {
    name: 'Вразнобой',
  },
  React: {
    name: 'Реакт',
    description: p('В данный момент специализируюсь именно на этой библиотеке.'),
  },
  'Ritchie Blackmore': {
    name: 'Ричи Блэкмор',
    description: p('Лучший гитарист, по моему мнению.'),
  },
  Ruby: {
    name: 'Руби',
    description: `
      <p>Очень классный скриптовый язык.</p>
      <p>
        Несмотря на то, что я ${link('JavaScript', 'фронтендер')}, иногда
        пишу на нём всякие штуки.
      </p>
    `,
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
        ${link('Curriculum vitae', 'После 4 лет работы')} меня захантил ${link('Epam', 'Епам')},
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
      <p>${img('https://i.imgur.com/VYfgwDT.jpg', 'Моя S\u030Ckoda')}</p>
      <p>Хотя от старости уже начинает капризничать.</p>
    `,
  },
  Skype: {
    name: 'Скайп',
    description: p(`Я в скайпе: ${callto('phil.tsarik')}.`),
  },
  'Software Engineer': {
    name: 'Инженер-программист',
    description: p(`Моя специальность после окончания ${link('PSU', 'университета')}.`),
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
        Иногда ${a('https://stackoverflow.com/users/2462524/phts', 'задаю и отвечаю')} на вопросы на Стак Оверфлоу.
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
    description: p('Обязательно буду жить там.'),
  },
  Uber: {
    name: 'Убер',
    description: `
      <p>
        На всякий случай мои промокоды: для Убера &mdash;
        <strong>${a('https://www.uber.com/invite/3daguge8ue', '3daguge8ue')}</strong>,
        для Убер-итс &mdash; <strong>eats-3daguge8ue</strong>.
      </p>
    `,
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
      ${figure(picture('V5Pazkk', 'Ultramarined'), 'Последнее выступление Ultramarined в 2015 году')}
      <p>
        Больше информации о группе доступно на
        ${a('http://phts.github.io/ultramarined.by/', 'зеркале официального сайта')}.
      </p>
    `,
    data: {
      ultrimarine: 'Заультрамаринить',
      unultrimarine: 'Разультрамаринить',
    },
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
    description: `
      <p>
        Мой первый компьютер. Первая строчка кода, написанная на нём,
        была, скорее всего, <code>LOAD "" &crarr;</code> &mdash; для загрузки игры с кассеты.
      </p>
      <p>
        Любимые игрушки: Highway Encounter, Battle Ships, Exolon, Tujad, Boulder Dash,
        Spy Hunter и многие другие.
      </p>
    `,
  },
}
