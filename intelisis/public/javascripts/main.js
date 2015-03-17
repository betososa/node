var StockViewer = new Marionette.Application();

StockViewer.addRegions({
  mainRegion: "#main-region"
});

StockViewer.StaticView = Marionette.ItemView.extend({
  template: "#static-template"
});

StockViewer.StockView = Marionette.ItemView.extend({
  template: "#stock-template"
});

StockViewer.Stock = Backbone.Model.extend({})

Stocks = Backbone.Collection.extend(
  model: StockViewer.Stock)

StockViewer.on("start", function(options){
  console.log("hola");
  var apple = new StockViewer.Stock({
    name: "apple"
  });
  var appleView = new StockViewer.StockView({
    model:apple
  })
  // var staticView = new StockViewer.StaticView();
  StockViewer.mainRegion.show(appleView)
});

StockViewer.start();



// new Vue({
//     el: '#elem',
//     data: {
//     	"stocks":data
//     },
//   // Function called when vuejs instance is created, remember there is a ready
//   created: function () {
//     // every 30 seconds we will fetch new data
//   	setInterval(this.fetchData, 30*1000);
//   },

//   methods: {
//     // function to make an ajax call
//     fetchData: function () {
//       var self = this;
//       $.ajax({
//         url: "/timer",
//         success: function(data){
//           self.stocks = data.data;
//         }
//       })
//     }
//   }
// });
// Vue.config.debug = true