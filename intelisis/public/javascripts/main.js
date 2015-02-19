new Vue({
    el: '#elem',
    data: {
    	"stocks":data
    },
  created: function () {
  	setInterval(this.fetchData, 14*1000);
  	console.dir(this.stocks);
  	
  },
    methods:{
        fetchData: function() {
        	console.log('=====');
        	console.log(this.stocks);
        	console.log('=====');
        	var xhr = new XMLHttpRequest();
        	var self = this;
        	xhr.open('GET', '/timer');
        	xhr.onload = function() {
        		self.stocks = JSON.parse(xhr.responseText);
		    	console.log('******');
		    	console.log(this.stocks);
		    	console.log('******');
        		// console.log('?????' + JSON.stringify(xhr.responseText));
        	}
        	xhr.send();
        }
    }
});