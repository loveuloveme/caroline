import TempData from './data';

export function toggleArray(array, value) {
    var index = array.indexOf(value);

    if (index === -1) {
        array.push(value);
    } else {
        array.splice(index, 1);
    }

    return array;
}

export function parseNodes(data) {
    return data.nodes.map(taskNode => {
        return {
            id: taskNode.id,
            position: taskNode.position,
            type: 'task',
            data: {
                ...taskNode,
                users: taskNode.workers.map(user => {
                    return (
                        data.users.find(item => item.id === user)
                    );
                }),
                tags: taskNode.tags.map(tag => {
                    return (
                        data.tags.find(item => item.id === tag)
                    );
                }),
                state: data.states.find(item => item.id === taskNode.state),
                sourceCount: data.edges.reduce((prev, edge) => {
                    return prev + (edge.source === taskNode.id ? 1 : 0)
                }, 0),
                targetCount: data.edges.reduce((prev, edge) => {
                    return prev + (edge.target === taskNode.id ? 1 : 0)
                }, 0)
            }
        }
    })
}

export function parseEdges(data) {
    const source = new Map();

    return data.edges.sort((a, b) => parseInt(a.source) - parseInt(b.source)).map((item, index) => {
        if (!source.has(item.source)) {
            source.set(item.source, 0);
        } else {
            source.set(item.source, source.get(item.source) + 1);
        }

        return {
            id: `${index}`,
            ...item,
            type: 'custom',
            sourceHandle: `${source.get(item.source)}`
        };
    })
}

export function temp_ParseData() {
    const [data] = TempData;


    return {
        ...data,
        nodes: parseNodes(data),
        edges: parseEdges(data)
    }
}