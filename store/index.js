export const state = () => ({
  outline: false,
  shadow: false,
  navColor: 'transparent',
  navOutline: true,
  signedIn: false,
  navbar: false,
  glassmorph: true,
  background: false,
  settingsDrawer: false,
  preset: 1,
  articles: require('@/data/articles.json'),
  drawer: false,
  items: [{
      text: 'Home',
      href: '#!',
    },
    {
      text: 'About',
      href: '#about',
    },
  ],
})

export const getters = {
  outline: state => {
    return state.outline;
  },
  shadow: state => {
    return state.shadow;
  },
  navColor: state => {
    return state.navColor;
  },
  navOutline: state => {
    return state.navOutline;
  },
  signedIn: state => {
    return state.signedIn;
  },
  navbar: state => {
    return state.navbar;
  },
  glassmorph: state => {
    return state.glassmorph;
  },
  background: state => {
    return state.background;
  },
  settingsDrawer: state => {
    return state.settingsDrawer;
  },
  preset: state => {
    return state.preset;
  },
  categories: state => {
    const categories = []

    for (const article of state.articles) {
      if (
        !article.category ||
        categories.find(category => category.text === article.category)
      ) continue

      const text = article.category

      categories.push({
        text,
        href: '#!',
      })
    }

    return categories.sort().slice(0, 4)
  },
  links: (state, getters) => {
    return state.items.concat(getters.categories)
  },
}

export const mutations = {
  toggleOutline(state) {
    state.outline = !state.outline;
  },
  toggleShadow(state) {
    state.shadow = !state.shadow;
  },
  toggleNavOutline(state) {
    state.navOutline = !state.navOutline;
  },
  changeNavigationColor(state, param) {
    state.navColor = param;
  },
  toggleSignedIn(state) {
    state.signedIn = true;
  },
  toggleNavbar(state, param) {
    state.navbar = param;
  },
  toggleSettingsDrawer(state, param) {
    state.settingsDrawer = param ? param : !state.settingsDrawer;
  },
  toggleGlassmorph(state) {
    if (!state.outline) state.outline = true;
    if (state.glassmorph) state.background = false;
    state.glassmorph = !state.glassmorph;
  },
  toggleBackground(state) {
    state.background = !state.background;
  },
  togglePreset(state, param) {
    state.navOutline = param.navOutline;
    state.outline = param.outline;
    state.shadow = param.shadow;
    state.navColor = param.navColor;
    state.glassmorph = param.glassmorph;
    state.background = param.background;
  },
  setPreset(state, param) {
    state.preset = param;
  },
  setDrawer: (state, payload) => (state.drawer = payload),
  toggleDrawer: state => (state.drawer = !state.drawer),
}

export const actions = {}
