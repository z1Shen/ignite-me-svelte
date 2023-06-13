<script>
  import firebase from "firebase/app";
  import firebaseConfig from "../firebase-config.json";
  import NavBar from "./NavBar.svelte";
  import CardGrid from "./CardGrid.svelte";
  import sample_posts from "./sample_posts.json";
  import PostModal from "./PostModal.svelte";

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  function login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
</script>

<NavBar />
<CardGrid posts={sample_posts.posts} />
<PostModal>
  <p>test</p>
</PostModal>
