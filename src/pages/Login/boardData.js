/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line import/no-anonymous-default-export

export default {
    id: '1',
    title: 'Почему Каролина?',
    type: 'jira',
    nodes: [{
        id: '1',
        title: 'Авторизоваться',
        workers: [4],
        tags: [1],
        position: { x: 0, y: 700 },
        type: 'task',
        state: 2,
        description: 'Без этого сейчас никак.',
        image: 'https://i.pinimg.com/originals/2c/dd/d1/2cddd1796354e90f4aab7fb1e48eafb4.gif'
    }, {
        id: '2',
        title: 'Созерцать доски в виде графов',
        workers: [4],
        tags: [1],
        position: { x: 0, y: 1050 },
        type: 'task',
        state: 1,
        description: 'Но сначала надо авторизоваться.',
        image: 'https://64.media.tumblr.com/b90b44e7ed9d2c9cc89ba790306a5436/tumblr_n5y1drmQhT1s3dw0xo1_500.gif'
    }, {
        id: '3',
        title: 'Зарегистрироваться',
        workers: [4],
        tags: [1],
        position: { x: 0, y: 350 },
        type: 'task',
        state: 3,
        description: 'Самое сложное задание на этой доске.',
        image: 'https://img.wattpad.com/27931f3c5b46a6883f6be048ee6c89da5a893808/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f72734d725a3938786f47674a35773d3d2d3634373535313435312e313630363838646663646165613534343136393636323339333038362e676966'
    }, {
        id: '4',
        title: 'Запутаться в досках',
        workers: [4],
        tags: [1],
        position: { x: 0, y: 0 },
        type: 'task',
        state: 3,
        image: 'https://64.media.tumblr.com/tumblr_m7mt3qN3cI1rc4y5co1_500.gif'
    }],
    edges: [{
        source: '1',
        target: '2',
    }, {
        source: '3',
        target: '1'
    }, {
        source: '4',
        target: '3'
    }],
    users: [{
        id: 4,
        name: 'Юрченко Владислав',
        img: 'https://sun9-82.userapi.com/impf/c303213/v303213927/2338/_FtDzez1pxU.jpg?size=2560x1440&quality=96&sign=d7307954d0680c3afabf4c5e64ccc615&type=album',
        isMe: true
    }],
    tags: [{
        id: 1,
        name: 'Аутентификация',
        color: '#285dec'
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
}