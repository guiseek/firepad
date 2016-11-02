import config       from './config.js'
import editor         from './controller/editor.js'

export default angular
  .module('editor', [])
  .config(config)
  .controller('Editor', editor)
