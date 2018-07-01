const Test = Store => {
  var obj = {
    demo: true,
    user: {
      id: 1,
      firstName: 'Yuesong',
      lastName: 'Liu',
    }
  }
  var store = new Store({
    data() { return obj },
    computed: {
      username() {
        return this.user.firstName + ' ' + this.user.lastName
      },
      justType: 'this is just Type'
    },
    watch: {
      demo(newVal, oldVal) {
        console.log('demo status change',newVal, oldVal)
      }
    }
  
  })


  console.log(
    store,
    // raw
    store.user,
    store.demo,

    // computed
    store.username,
    store.justType,
  )

  // watch
  store.demo = !store.demo
  store.$watch('user.id', (n, p) => {console.log('user id change:', n, p)})
  store.user.id = store.user.id + 5

}

export default Test
