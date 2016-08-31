


var features_page = function() {
	
	this.getTitle1 = function() {
		return element(By.xpath("//h2[@class = 'text-headline' and text() = 'Cross Platform']")).getText();
	};
	
	this.getTitle2 = function() {
		return element(By.xpath("//h2[@class = 'text-headline' and text() = 'Speed and Performance']")).getText();
		
	};
	
	this.clickDoc = function(){
		 element.all(By.xpath("//a[@href = '/docs/ts/latest/']")).click();
	    return require('./doc_page.js');

	};
	
	
	
};


module.exports = new features_page();