export default class KanbanAPI {
    // reading data
    static getItems(columnId) {
        const column = read().find(column => column.id == columnId);

        if (!column) {
            return [];
        }

        return column.items;
    }

    // creating data

    static insertItem(columnId, content) {

        const data = read();
        const column = data.find(column => column.id == columnId)
        const items = {
            id: Math.floor(Math.random() * 100000000),
            content
        };

        if (!column) {
            throw console.error("There is no Content");
        }

        column.items.push(items);
        save(data)
        return items
    }

    // updating item
}

function read() {
    const json = localStorage.getItem(" kanban-data");

    if (!json) {
        return [{
                id: 1,
                items: []
            },
            {
                id: 2,
                items: []
            },
            {
                id: 3,
                items: []
            },
        ];
    }

    return JSON.parse(json)
}

function save(data) {

    localStorage.setItem("kanban-data", JSON.stringify(data));

}