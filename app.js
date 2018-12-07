new Vue({
  el: "#app",
  data: {
    name: "Neil",
    imgWidth: 150,
    show: false
  },
  methods: {
    greeting() {
      return `hello ${this.name}`
    },
    toggle() {
      this.show = !this.show
    }
  }
})