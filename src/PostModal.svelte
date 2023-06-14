<script>
  import { toggleModal } from "./toggleModal.js";
  import { post } from "./stores.js";
  import { clickOutside } from "./clickOutside.js";
  import Messages from "./Messages.svelte";

  let post_value;
  post.subscribe((value) => {
    post_value = value;
  });

  function handleClickOutside() {}
</script>

<dialog id="modal-post">
  <article use:clickOutside on:click_outside={handleClickOutside}>
    <header>
      <a
        href="#close"
        aria-label="Close"
        class="close"
        data-target="modal-post"
        on:click={toggleModal}
      />
      {post_value.title}
    </header>
    <div class="grid">
      <div>
        {#each post_value.content as content}
          <button>{content}</button>
        {/each}
      </div>
      <Messages />
    </div>
    <footer>
      <a
        href="#cancel"
        role="button"
        class="secondary"
        data-target="modal-post"
        on:click={toggleModal}
      >
        Cancel
      </a>
      <a
        href="#confirm"
        role="button"
        data-target="modal-post"
        on:click={toggleModal}
      >
        Confirm
      </a>
    </footer>
  </article>
</dialog>

<style>
  article {
    min-width: 600px;
    margin-left: 50px;
    margin-right: 50px;
  }
</style>
