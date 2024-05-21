// Function to simulate an asynchronous API call to fetch user data
function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('User data fetched');
            resolve({ userId: userId, name: 'John Doe' });
        }, 1000);
    });
}

// Function to simulate an asynchronous API call to fetch posts by user
function fetchPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Posts fetched for user:', userId);
            resolve([{ postId: 1, title: 'Post 1' }, { postId: 2, title: 'Post 2' }]);
        }, 1000);
    });
}

// Function to simulate an asynchronous API call to fetch post details
function fetchPostDetails(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Post details fetched for post:', postId);
            resolve({ postId: postId, content: 'This is the content of the post' });
        }, 1000);
    });
}

// Chaining promises to fetch user, then posts, then post details
fetchUser(1)
    .then(user => {
        console.log('User:', user);
        return fetchPosts(user.userId);
    })
    .then(posts => {
        console.log('Posts:', posts);
        // Assume we want details of the first post
        return fetchPostDetails(posts[0].postId);
    })
    .then(postDetails => {
        console.log('Post Details:', postDetails);
    })
    .catch(error => {
        throw "there is an error fetching post details"
    });
