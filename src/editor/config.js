export default function EditorConfig($stateProvider) {
  $stateProvider
    .state('editor', {
      url: '/*key',
      templateUrl: './src/editor/view/editor.html',
      controller: 'Editor',
      controllerAs: 'ctrl'
    })
}