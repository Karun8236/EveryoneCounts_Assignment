

var home_page = function(){
	
	this.clickFeatures = function(){
		
	    element.all(By.xpath("//a[@href = '/features.html']")).click();
	     return require('./features_page.js');
	
	};
	
};

module.exports = new home_page();