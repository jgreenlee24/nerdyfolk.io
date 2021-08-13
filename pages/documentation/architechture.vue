<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <BaseSheet>
            <v-row>
              <v-col
                v-for="(item, index) in docs"
                :key="index"
                cols="12"
                md="6"
                lg="3"
              >
                <DocumentationInfo
                  :title="item.title"
                  :url="item.url"
                  :content="item.content"
                />
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <h4>
                  <v-icon
                    left
                    small
                  >
                    $vuetify.icons.mdiLinkVariant
                  </v-icon>
                  <a href="https://nuxtjs.org/">Installation</a>
                </h4>

                <v-divider class="my-2" />

                <BaseSheet color="base lighten-1">
                  <div class="text-monospace">
                    <div># install dependencies</div>
                    <div>$ yarn install</div>

                    <div class="mt-4">
                      # serve with hot reload at localhost:3000
                    </div>
                    <div>$ yarn dev</div>

                    <div class="mt-4">
                      # build for production and launch server
                    </div>
                    <div>$ yarn build</div>
                    <div>$ yarn start</div>

                    <div class="mt-4">
                      # generate static project
                    </div>
                    <div>$ yarn generate</div>
                  </div>
                </BaseSheet>
              </v-col>
            </v-row>
          </BaseSheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      docs: [
        {
          title: "assets",
          content:
            "The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.",
          url: "https://nuxtjs.org/docs/2.x/directory-structure/assets",
        },
        {
          title: "components",
          content:
            "The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.",
          url: "https://nuxtjs.org/docs/2.x/directory-structure/components",
        },
        {
          title: "layouts",
          content:
            "Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.",
          url: "https://nuxtjs.org/docs/2.x/directory-structure/layouts",
        },
        {
          title: "pages",
          content:
            "This directory contains your application views and routes. Nuxt will read all the <code>*.vue</code> files inside this directory and setup Vue Router automatically.",
          url: "https://nuxtjs.org/docs/2.x/directory-structure/layouts",
        },
        {
          title: "layouts",
          content:
            "Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.",
          url: "https://nuxtjs.org/docs/2.x/get-started/routing",
        },
        {
          title: "plugins",
          content:
            "The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use <code>Vue.use()</code>, you should create a file in <code>plugins/</code> and add its path to plugins in <code>nuxt.config.js</code>.",
          url: "https://nuxtjs.org/docs/2.x/directory-structure/plugins",
        },
        {
          title: "static",
          content:
            "This directory contains your static files. Each file inside this directory is mapped to <code>/</code>. <div class='mt-2'>Example: <code>/static/robots.txt</code> is mapped as <code>/robots.txt</code>.</div>",
          url: "https://nuxtjs.org/docs/2.x/directory-structure/static",
        },
        {
          title: "store",
          content:
            "This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.",
          url: "https://nuxtjs.org/docs/2.x/directory-structure/store",
        },
      ],
    };
  },
};
</script>