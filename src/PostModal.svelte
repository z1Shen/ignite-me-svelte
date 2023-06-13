<script>
  import { toggleModal } from "./toggleModal.js";
  import { post } from "./stores.js";
  import { clickOutside } from "./clickOutside.js";

  let post_value;

  post.subscribe((value) => {
    post_value = value;
  });

  function handleClickOutside() {
    alert("Click outside!"); // not working
  }
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
    <slot />
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
