export const CountryService = {
    getData() {
        return [
            { name: 'Afghanistan', code: 'AF', events: [
                { name: 'Dance', price: '10$', id: 0 },
                { name: 'Singing', price: '25$', id: 1 },
                { name: 'Laughter', price: '0', id: 2 }
            ] },
            { name: 'Albania', code: 'AL', events:  [
            ] },
            { name: 'Algeria', code: 'DZ', events: [
                { name: 'Dance', price: '10$', id: 0 },
                { name: 'Singing', price: '25$', id: 1 },
                { name: 'Laughter', price: '0', id: 2 }
            ] },
            { name: 'American Samoa', code: 'AS', events: [
                { name: 'Dance', price: '10$', id: 0 },
                { name: 'Singing', price: '25$', id: 1 },
                { name: 'Laughter', price: '0', id: 2 }
            ] },
        ];
    },

    getCountries() {
        return Promise.resolve(this.getData());
    }
};