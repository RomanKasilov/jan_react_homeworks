const baseURL = 'https://jsonplaceholder.typicode.com/'

const urls = {
    users: 'users',
    posts: 'posts',
    comments: 'comments',
    postsByUser: (userId: string) => `${urls.users}/${userId}/${urls.posts}`,
    commentsByPost: (postId: string) => `${urls.posts}/${postId}/${urls.comments}`
}

export {baseURL, urls}