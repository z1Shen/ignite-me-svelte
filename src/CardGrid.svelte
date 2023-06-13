<script>
  export let posts;
  import { toggleModal } from "./toggleModal.js";
  import { post } from "./stores.js";

  function clickPost(event, post_data) {
    post.set(post_data);
    toggleModal(event);
  }
</script>

<div class="grid">
  {#each posts as post}
    <article>
      <header>{post.title}</header>
      {post.content}

      <footer>
        <button
          class="contrast"
          data-target="modal-post"
          on:click={() => clickPost(event, post)}
        >
          Launch demo modal
        </button>
      </footer>
    </article>
  {/each}
</div>

<style>
  article {
    min-width: 300px;
    margin-left: 50px;
    margin-right: 50px;
  }
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
</style>
