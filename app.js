new Vue({
  el: "#app",
  data: {
    name: "Neil",
    imgWidth: 150,
    imgHeight: 150,
    show: true,
    smallImg: true,
    medImg: false,
    lgImg: false,
    googleUrl: "https://www.google.com",
    squaredResult: 0,
    fontSize: 20
  },
  methods: {
    greeting() {
      return `hello ${this.name}`
    },
    showImgOptions() {
      if(this.smallImg) {
        this.imgHeight = 250
        this.imgWidth = 250
        this.smallImg = false
        this.medImg = true
      } else if(this.medImg) {
        this.imgHeight = 350
        this.imgWidth = 350
        this.medImg = false
        this.lgImg = true
      } else {
        this.imgHeight = 150
        this.imgWidth = 150
        this.lgImg = false
        this.smallImg = true
      }
    },
    showGoogleUrl() {
      console.log("showing details")
    },
    square(evt) {
      return this.squaredResult = evt.target.value ** 2
    },
    fontSizer(amt) {
      return this.fontSize = this.fontSize + amt
    }
  }
})