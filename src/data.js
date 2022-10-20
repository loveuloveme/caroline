// eslint-disable-next-line import/no-anonymous-default-export
export default [{
    id: '1',
    title: 'Почему Каролина?',
    type: 'jira',
    nodes: [{
        id: '1',
        title: 'Make Vought Great Again',
        workers: [1, 2, 3],
        tags: [1],
        position: { x: -100, y: 0 },
        type: 'task',
        state: 4,
        description: 'Vought International, formerly known as Vought American, is an American multi-billion dollar superhero entertainment conglomerate, currently led by Homelander.',
        image: 'https://www.slashfilm.com/img/gallery/what-the-boys-season-3s-soldier-boy-twist-means-for-the-finale-beyond/intro-1656681863.jpg'
    }, {
        id: '2',
        title: 'Уволиться из Яндекс',
        workers: [4],
        tags: [2, 3],
        position: { x: 600, y: 190 },
        type: 'task',
        state: 2,
        description: 'Блин, зачем я сюда пришёл?'
    }, {
        id: '3',
        title: 'Кабачковая икра',
        workers: [4],
        tags: [2],
        position: { x: 1200, y: -150 },
        type: 'task',
        state: 1,
        description: 'Если тебе где-то не рады без кабачковой икры, то и с кабачковой икрой туда идти не стоит.'
    }, {
        id: '4',
        title: 'Пригласить Леру в чат уважаемых коллег',
        workers: [6],
        tags: [4],
        position: { x: 600, y: 400 },
        type: 'task',
        state: 3,
        description: '«Ладно нужно не убивать кринж а убить часть твоего организма который кринжует.»'
    }, {
        id: '5',
        title: 'Выяснить почему Каролина.',
        workers: [6],
        tags: [5],
        position: { x: 1100, y: 300 },
        type: 'task',
        state: 2,
        description: ''
    }, {
        id: '6',
        title: 'Загадка от Жака Фреско',
        workers: [4, 6],
        tags: [4, 5],
        position: { x: 450, y: 700 },
        type: 'task',
        state: 4,
        description: 'Как Максим Бастрыкин придумал свой ник max_bstr?',
        image: 'https://img09.rl0.ru/afisha/e1200x600i/daily.afisha.ru/uploads/images/4/7f/47f32d202b9ac73d4a7a87c1609e6265.png'
    }, {
        id: '7',
        title: 'Ха-ха-ха. Очень смешно. :)',
        workers: [4, 6],
        tags: [4, 5],
        position: { x: 1250, y: 500 },
        type: 'task',
        state: 2,
        description: 'Это программист, я фотошоп. BASED.'
    }, {
        id: '8',
        title: 'Зайти в зум, хотя бы ради приличия.',
        workers: [7],
        tags: [6],
        position: { x: 1900, y: 350 },
        type: 'task',
        state: 4,
        description: 'Ссори ребят, у меня сегодня важная прогулка, сегодня ретроградный Меркурий.'
    }],
    edges: [{
        source: '1',
        target: '2',
    }, {
        source: '2',
        target: '3'
    }, {
        source: '2',
        target: '5'
    }, {
        source: '1',
        target: '4'
    }, {
        source: '1',
        target: '6'
    }, {
        source: '6',
        target: '7'
    }, {
        source: '7',
        target: '8'
    }],
    users: [{
        id: 1,
        name: 'Stan Edgar',
        img: 'https://kino-manya24.ru/wp-content/uploads/2020/10/gankarlo-espozito-v-seriale-pacany.jpg'
    }, {
        id: 2,
        name: 'Homelander',
        img: 'https://i.insider.com/62c79a5d8045920019ae23c4?width=700'
    }, {
        id: 3,
        name: 'Hughie Campbell',
        img: 'https://www.looper.com/img/gallery/the-untold-truth-of-the-boys-hughie-campbell/l-intro-1653601279.jpg'
    }, {
        id: 4,
        name: 'Юрченко Владислав',
        img: 'https://sun9-82.userapi.com/impf/c303213/v303213927/2338/_FtDzez1pxU.jpg?size=2560x1440&quality=96&sign=d7307954d0680c3afabf4c5e64ccc615&type=album',
        isMe: true
    }, {
        id: 6,
        name: 'Папикян Сергей',
        img: 'https://sun9-66.userapi.com/impg/FLxG86ve2UPGK3agEPNxf8KPwHSVjvAj8vby-Q/j28xrQvOJzY.jpg?size=1920x1080&quality=95&sign=e135b1d195e54b906c3a14d275a610d8&type=album'
    }, {
        id: 7,
        name: 'Якимов Даниил',
        img: 'https://sun9-22.userapi.com/impg/FyJ91pN4Dbr9XydbAXZyuM6osoZe1H6M2AjFoQ/87CO81T416o.jpg?size=1280x853&quality=95&sign=0ae4e78fef64cd8c487c768d37363922&type=album'
    }],
    tags: [{
        id: 1,
        name: 'The Boys',
        color: '#ff6b6b'
    }, {
        id: 2,
        name: 'Yandex',
        color: '#ff9f43'
    }, {
        id: 3,
        name: 'Платит только за себя',
        color: '#5f27cd'
    }, {
        id: 4,
        name: 'Нарды онлайн',
        color: '#000000'
    }, {
        id: 5,
        name: 'ИТМО.Олимп',
        color: 'rgb(10, 132, 255)'
    }, {
        id: 6,
        name: 'Секта',
        color: '#34495e'
    }],
    states: [{
        id: 1,
        name: 'К выполнению'
    }, {
        id: 2,
        name: 'В работе'
    }, {
        id: 3,
        name: 'Готово'
    }, {
        id: 4,
        name: 'Провалено'
    }]
}, {
    id: '2',
    title: 'Я мегаплох',
    type: 'trello',
}, {
    id: '3',
    title: 'Не имей 5 коллег, а имей 600 кого-то',
    type: 'trello',
}, {
    id: '4',
    title: 'Папикянио',
    type: 'trello',
}, {
    id: '5',
    title: 'Юрченко Влад',
    type: 'jira',
}, {
    id: '6',
    title: 'Женщина-Халк: Авокадо',
    type: 'trello',
}, {
    id: '7',
    title: 'Рожновский Иван',
    type: 'trello',
}, {
    id: '8',
    title: 'Hehe',
    type: 'trello',
}, {
    id: '9',
    title: 'Keep bouncing',
    type: 'trello',
}];