<template>
  <div>
    <section class="hero is-primary has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h2 class="subtitle">
            Welcome to nerdyfolk, the social hotspot for all things geekdom.
            Are you a non-profit in need a new, up-to-standard website? Shoot us an email at 
            <a href = "mailto: jgreenlee24@gmail.com">jgreenlee24@gmail.com</a>
          </h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-three-fifths is-offset-one-fifth">
            <div v-for="post in posts" :key="post.slug" class="mb-5">
              <h3 class="title is-4">
                <nuxt-link :to="post.slug">
                  {{ post.title }}
                </nuxt-link>
              </h3>
              <div>
                {{ post.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('posts').sortBy('createdAt', 'desc').fetch()
    return { posts }
  }
}
</script>

<style>
  h3 a {
    color: #1E2021;
  }
  h3 a:hover {
    color: #3273dc;
  }
</style>