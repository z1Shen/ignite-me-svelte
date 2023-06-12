<script>
  import firebase from "firebase/app";
  import "firebase/firestore";
  import "firebase/auth";
  import "firebase/performance";
  import "firebase/analytics";
  import { FirebaseApp, User, Doc, Collection } from "sveltefire";

  import firebaseConfig from "../firebase-config.json";
  firebase.initializeApp(firebaseConfig);
</script>

<h1>hello</h1>
<main>
  <!-- 1. 🔥 Firebase App -->
  <FirebaseApp {firebase}>
    <!-- 2. 😀 Get the current user -->
    <User let:user let:auth>
      <em>{user.uid}</em>

      <button on:click={() => auth.signOut()}>Sign Out</button>

      <div slot="signed-out">
        <button on:click={() => auth.signInAnonymously()}>
          Sign In Anonymously
        </button>
      </div>

      <hr />

      <!-- 3. 📜 Get a Firestore document owned by a user -->
      <Doc path={`posts/${user.uid}`} let:data={post} let:ref={postRef} log>
        <h2>{post.title}</h2>

        <p>
          Document created at <em
            >{new Date(post.createdAt).toLocaleString()}</em
          >
        </p>

        <span slot="loading">Loading post...</span>
        <span slot="fallback">
          <button
            on:click={() =>
              postRef.set({
                title: "📜 I like Svelte",
                createdAt: Date.now(),
              })}
          >
            Create Document
          </button>
        </span>

        <!-- 4. 💬 Get all the comments in its subcollection -->

        <h3>Comments</h3>
        <Collection
          path={postRef.collection("comments")}
          query={(ref) => ref.orderBy("createdAt")}
          let:data={comments}
          let:ref={commentsRef}
          log
        >
          {#if !comments.length}
            No comments yet...
          {/if}

          {#each comments as comment}
            <p>
              <!-- ID: <em>{comment.ref.id}</em> -->
            </p>
            <p>
              {comment.text}
              <button on:click={() => comment.ref.delete()}>Delete</button>
            </p>
          {/each}

          <button
            on:click={() =>
              commentsRef.add({
                text: "💬 Me too!",
                createdAt: Date.now(),
              })}
          >
            Add Comment
          </button>

          <form>
            <!-- Grid -->
            <div class="grid">
              <!-- Markup example 1: input is inside label -->
              <label for="firstname">
                First name
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First name"
                  required
                />
              </label>

              <label for="lastname">
                Last name
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last name"
                  required
                />
              </label>
            </div>

            <!-- Markup example 2: input is after label -->
            <label for="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              required
            />
            <small>We'll never share your email with anyone else.</small>

            <!-- Button -->
            <button type="submit">Submit</button>
          </form>

          <span slot="loading">Loading comments...</span>
        </Collection>
      </Doc>
    </User>
  </FirebaseApp>
</main>

<!-- Styles -->
<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  em {
    color: #ff3e00;
  }

  hr {
    height: 1px;
    border: none;
    background: rgb(195, 195, 195);
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
