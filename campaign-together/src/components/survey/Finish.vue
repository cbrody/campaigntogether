<template>
  <div class="finished">
    <h1>Great to have you on board, {{firstName}}</h1>
    <p class="intro">We need to build a movement of thousands to stop the Tories, can you share this with 5 friends?</p>

    <div class="share-buttons">
      <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//campaigntogether.org" class="btn btn-black share-button" target="_blank">Share this on Facebook</a>
      <a href="https://twitter.com/intent/tweet?text=We+need+to+stop+the+Tories.+I%27ve+just+joined+Campaign+Together%2C+a+community+of+people+from+all+parties+and+none%2C+will+you+join+me%3F+https%3A%2F%2Fcampaigntogether.org" class="btn btn-black share-button" target="_blank">Share this on Twitter</a>
    </div>

    <div class="return">
    	<a href="https://campaigntogether.org">Return to home</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    firstName: String
  }
}
</script>
