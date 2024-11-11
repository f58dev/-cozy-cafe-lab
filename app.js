document.addEventListener('DOMContentLoaded', () => {

    const mainTitle = document.getElementById('main-title');
    if (mainTitle) {
        mainTitle.textContent = 'Welcome to the Cozy Cafe';
        mainTitle.style.textAlign = 'center';
    } else {
        console.error("Element with ID 'main-title' not found.");
    }


    const body = document.body;
    body.style.backgroundColor = 'bisque';


    const quoteElement = document.querySelector('.quote'); 
    if (quoteElement) {
        quoteElement.textContent = 'Life happens, coffee helps.';
    } else {
        console.error("Element with class 'quote' not found.");
    }


    const highlightTitles = document.querySelectorAll('.highlight-title');
    highlightTitles.forEach(title => {
        title.style.fontStyle = 'italic';
    });


    const pastMenu = document.querySelector('#past-menu-items');
    if (pastMenu) {
        const newMenuItem = document.createElement('li');
        newMenuItem.textContent = 'Rose Cake';
        pastMenu.appendChild(newMenuItem);
    } else {
        console.error("Element with ID 'past-menu-items' not found.");
    }


    const specialtiesMenu = document.querySelector('#cafe-specialties');
    if (specialtiesMenu) {
        const newSpecialtyItem = document.createElement('li');
        newSpecialtyItem.textContent = 'Karak Tea';
        specialtiesMenu.appendChild(newSpecialtyItem);
    } else {
        console.error("Element with ID 'cafe-specialties' not found.");
    }


    const blogSection = document.querySelector('#blog-posts');
    if (blogSection) {
        const blogPost = document.createElement('div');
        blogPost.classList.add('blog-post');

        const postTitle = document.createElement('h3');
        postTitle.textContent = 'Karak Tea Tasting Event';

        const postContent = document.createElement('p');
        postContent.textContent = 'Join us for an exciting tasting experience with our latest specialty, Karak Tea!';

        blogPost.appendChild(postTitle);
        blogPost.appendChild(postContent);
        blogSection.appendChild(blogPost);
    } else {
        console.error("Element with ID 'blog-posts' not found.");
    }
});
