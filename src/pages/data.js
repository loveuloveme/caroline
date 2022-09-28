export default {
    title: 'Доска grey2001',
    type: 'jira',
    nodes: [{
        id: '1',
        title: 'Make Vought Great Again',
        workers: [1, 2, 3],
        tags: [1],
        position: { x: 0, y: 0 },
        type: 'task',
        state: 4,
        description: 'Vought International, formerly known as Vought American, is an American multi-billion dollar superhero entertainment conglomerate, currently led by Homelander.'
    }, {
        id: '2',
        title: 'Уволиться из Яндекс',
        workers: [4],
        tags: [2, 3],
        position: { x: 600, y: 190 },
        type: 'task',
        state: 2,
        description: 'Блин, нафиг я сюда пришёл?'
    }, {
        id: '3',
        title: 'Кабачковая икра',
        workers: [4],
        tags: [2],
        position: { x: 1200, y: 300 },
        type: 'task',
        state: 1,
        description: 'Если тебе где-то не рады без кабачковой икры, то и с кабачковой икрой туда идти не стоит.'
    }],
    edges: [{
        id: 'e1-2',
        source: '1',
        target: '2',
    }, {
        id: 'e1-3',
        source: '2',
        target: '3',
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
        name: 'Юрченко Владосимба',
        img: 'https://sun9-82.userapi.com/impf/c303213/v303213927/2338/_FtDzez1pxU.jpg?size=2560x1440&quality=96&sign=d7307954d0680c3afabf4c5e64ccc615&type=album'
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
};