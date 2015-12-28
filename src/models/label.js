import Model from 'ampersand-model'
import xhr from 'xhr'
import githubMixin from '../helpers/github-mixin'

export default Model.extend(githubMixin, {
  idAttribute: 'name',

  props: {
    name: 'string',
    color: 'string'
  },

  session: {
    editing: {
      type: 'boolean',
      default: false
    },
    saved: {
      type: 'boolean',
      default: true
    }
  },

  isNew () {
    return !this.saved
  },

  update (attributes) {
    const oldAttributes = this.getAttributes({props: true, session: false})
    xhr({
      url: this.url(),
      json: attributes,
      method: 'PATCH',
      headers: {
        Authorization: 'token ' + app.me.token
      }
    }, (err, req, body) => {
      if (err) {
        this.set(oldAttributes)
        console.error('something went wrong, check your wifi')
      }
    })
    this.set(attributes)
  }
})
