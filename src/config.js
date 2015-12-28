const config = {
  'localhost': {
    authUrl: 'https://labelhub.herokuapp.com/authenticate',
    clientId: '28c0a7f7e533b32acc6c'
  },

  'labelhub.surge.sh': {
    authUrl: 'https://labelhub.herokuapp.com/authenticate',
    clientId: '28c0a7f7e533b32acc6c'
  }
}[window.location.hostname]

export default config
