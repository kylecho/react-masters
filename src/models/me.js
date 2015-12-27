import Model from 'ampersand-model'
import githubMixin from '../helpers/github-mixin'
import repoCollection from './repo-collection'

export default Model.extend(githubMixin, {
  url: 'https://api.github.com/user',

  initialize () {
    this.token = window.localStorage.token
    this.on('change:token', this.onTokenChange)
  },

  props: {
    id: 'number',
    login: 'string',
    avatar_url: 'string',
  },

  session: {
    token: 'string'
  },

  collections: {
    repos: repoCollection
  },

  onTokenChange () {
    window.localStorage.token = this.token
    this.fetchInitialData()
  },

  fetchInitialData () {
    if (this.token) {
      this.fetch()
      this.repos.fetch()
    }
  }
})
