new Vue({
    el: '#elem',
    data: {
    	"stocks":data
    },
  // Function called when vuejs instance is created, remember there is a ready
  created: function () {
    // every 30 seconds we will fetch new data
  	setInterval(this.fetchData, 30*1000);
  },

  methods: {
    // function to make an ajax call
    fetchData: function () {
      var self = this;
      $.ajax({
        url: "/timer",
        success: function(data){
          self.stocks = data.data;
        }
      })
    }
  }
});
// Vue.config.debug = true