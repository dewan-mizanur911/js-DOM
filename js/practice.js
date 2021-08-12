const headerTitle = document.getElementById('header-title');
headerTitle.style.border = '2px solid orange';
headerTitle.style.padding = '10px';
headerTitle.style.borderRadius = '10px';



const newBlog = document.createElement('article');
newBlog.classList.add('blog');
newBlog.setAttribute('style', 'color:red');
newBlog.innerHTML = `<h3> This title is added by javaScript</h3>
<p> This is the first time I have ever added a element  using javaScript</p>`
const blogsParent = document.getElementById('blogs');
blogsParent.appendChild(newBlog);

const blogs = document.getElementsByClassName('blog');
for (const blog of blogs) {
    blog.style.border = '2px solid blue';
    blog.style.margin = '20px';
    blog.style.padding = '10px';
    blog.style.borderRadius = '10px'
}

const lists = document.getElementById('friends');
lists.removeChild(lists.children[4]);
const newFriend = document.createElement('li');
newFriend.innerText = 'New friend';
lists.appendChild(newFriend);
