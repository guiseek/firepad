export default class Editor {
  constructor($stateParams,firebase,$firebaseObject) {
    let route = $stateParams.key
    ,   key = `messages/${route}`
    ,   ref = firebase.database().ref(key)
    this.editor = $firebaseObject(ref)
    this.route = route == '' ? '#' : `#/${route}`
    let children = []
    ref.once('value', response => {
      Object.keys(response.val()).map(function(k) {
        if (k != 'text') children.push(k)
      })
      this.children = children
    })
    this.save = () => this.editor.$save()
  }
}

Editor.$inject = ['$stateParams','firebase','$firebaseObject']