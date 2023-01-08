import dagre from 'dagre';

const nodeWidth = 500;
const nodeHeight = 400;

class Layout {
    getLayoutedElements(nodes, edges, direction = 'LR') {
        const dagreGraph = new dagre.graphlib.Graph();
        dagreGraph.setDefaultEdgeLabel(() => ({}));

        const isHorizontal = direction === 'LR';
        dagreGraph.setGraph({ rankdir: direction });

        nodes.forEach((node) => {
            dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
        });

        edges.forEach((edge) => {
            dagreGraph.setEdge(edge.source, edge.target);
        });

        dagre.layout(dagreGraph);

        nodes.forEach((node) => {
            const nodeWithPosition = dagreGraph.node(node.id);
            node.targetPosition = isHorizontal ? 'left' : 'top';
            node.sourcePosition = isHorizontal ? 'right' : 'bottom';

            node.position = {
                x: nodeWithPosition.x - nodeWidth / 2,
                y: nodeWithPosition.y - nodeHeight / 2,
            };

            return node;
        });

        return { nodes, edges };
    };

    parseEdges(data) {
        const source = new Map();
        const target = new Map();

        return data.filter(edge => edge.source !== edge.target).map((item, index) => {
            if (!source.has(item.source)) {
                source.set(item.source, 0);
            } else {
                source.set(item.source, source.get(item.source) + 1);
            }

            if (!target.has(item.target)) {
                target.set(item.target, 0);
            } else {
                target.set(item.target, target.get(item.target) + 1);
            }

            return {
                id: `${index}`,
                ...item,
                type: 'custom',
                sourceHandle: `${source.get(item.source)}`,
                targetHandle: `${target.get(item.target)}`
            };
        })
    }
}

export default new Layout();