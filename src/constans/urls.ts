const baseURL = 'https://jsonplaceholder.typicode.com';

const urls = {
    users: {
        base: '/users',
        byId: function (id: number): string {
            return `${this.base}/${id}`
        }
    },
    posts: {
        base: '/posts',
        byId: function (id: number): string {
            return `${this.base}/${id}`
        }
    }
}

export {baseURL, urls}