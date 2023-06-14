<script>
  export let messages = [];

  //   async function sendMessage() {
  //     const data = {
  //       text: newMessage,
  //       user: $currentUser.id,
  //     };
  //     const createdMessage = await pb.collection("messages").create(data);
  //     newMessage = "";
  //   }
</script>

<div class="messages">
  <h1>Messages</h1>
  {#each messages as message (message.id)}
    <div class="msg">
      <img
        class="avatar"
        src={`https://avatars.dicebear.com/api/identicon/${message.expand?.user?.username}.svg`}
        alt="avatar"
        width="40px"
      />
      <div>
        <small>
          Sent by @{message.expand?.user?.username}
        </small>
        <p class="msg-text">{message.text}</p>
      </div>
    </div>
  {/each}
</div>

<!-- <form on:submit|preventDefault={sendMessage}>
  <input placeholder="Message" type="text" bind:value={newMessage} />
  <button type="submit">Send</button>
</form> -->
