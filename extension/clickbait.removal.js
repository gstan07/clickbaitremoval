

var app = {
	init:function(){
		console.log("clickbait removal");
		var url  =  window.location.href;
		var url_hash = app.utils.hashCode(encodeURIComponent( escape( url )));
		console.log(url_hash);
	},
	utils:{
		ready:function(fn){
			if(document.readyState != 'loading'){
			    fn();
			}else {
			    document.addEventListener('DOMContentLoaded', fn);
			}
		},
		hashCode:function(str){
			var hash = 0;
			if (str.length == 0) return hash;
			for (i = 0; i < str.length; i++) {
				char = str.charCodeAt(i);
				hash = ((hash<<5)-hash)+char;
				hash = hash & hash; // Convert to 32bit integer
			}
			return hash;
		}
	}
	
}

app.utils.ready(function(){
	app.init();
})

