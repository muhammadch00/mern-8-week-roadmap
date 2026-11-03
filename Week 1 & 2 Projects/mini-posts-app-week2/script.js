
const loadPostsBtn = document.querySelector("#loadPostsBtn");
const message = document.querySelector("#message");
const postsContainer = document.querySelector("#postsContainer");
const postTemplate = document.querySelector("#postTemplate");

loadPostsBtn.addEventListener("click", loadPosts);

async function loadPosts() {

    postsContainer.replaceChildren();

    message.textContent = "Loading posts...";
    message.className = "message";



    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
            throw new Error("Posts load nahi ho sakin.");
        }

        const posts = await response.json();


        posts.forEach((post) => {

            const card = postTemplate.content.cloneNode(true);
            const title = card.querySelector(".post-title");
            const body = card.querySelector(".post-body");
            const author = card.querySelector(".post-author");

            title.textContent = post.title;
            body.textContent = post.body;
            author.textContent = `User ID: ${post.userId}`;

            postsContainer.append(card);
        });

        message.textContent = `${posts.length} posts successfully loaded!`;
  

    } catch (error) {
      
        message.textContent = error.message;

    } 
}
