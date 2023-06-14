<script>
  import NavBar from "./NavBar.svelte";
  import CardGrid from "./CardGrid.svelte";
  import sample_posts from "./sample_posts.json";
  import PostModal from "./PostModal.svelte";
</script>

<main>
  <NavBar />
  <CardGrid posts={sample_posts.posts} />
  <!-- <PostModal /> -->
</main>
