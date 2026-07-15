// Get posts from localStorage or start empty
let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

// Show posts
function showPosts() {
    const container = document.getElementById('postsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (posts.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #999;">No posts yet. Write your first one! ✍️</p>';
    }
    
    for (let i = 0; i < posts.length; i++) {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <h3>📌 ${posts[i].title}</h3>
            <p>${posts[i].content}</p>
            <small style="color: #999;">Posted on ${new Date().toLocaleDateString()}</small>
        `;
        container.appendChild(postDiv);
    }
}

// Handle form submission
const form = document.getElementById('blogForm');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const title = document.getElementById('postTitle').value;
        const content = document.getElementById('postContent').value;
        
        posts.push({ title, content });
        localStorage.setItem('blogPosts', JSON.stringify(posts));
        
        showPosts();
        form.reset();
        
        alert('✅ Blog post published successfully! 🎉');
    });
}

// Show posts on page load
showPosts();