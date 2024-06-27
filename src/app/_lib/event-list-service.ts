export const EventListService = {
    getData() {
        return [
            { name: 'Dance', price: '10$', id: 0 },
            { name: 'Singing', price: '25$', id: 1 },
            { name: 'Laughter', price: '0', id: 2 }
        ];
    },

    getEventList() {
        return this.getData();
    }
};