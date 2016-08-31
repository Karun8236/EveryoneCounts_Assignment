

var doc_page = function() {
	
	this.enterFieldValue = function(value){
		
		element(By.xpath("//input[@id = 'search-io']")).sendKeys(value);
	};
	
	this.validateDirective = function(){
		
	    return element(By.xpath("//p[@class = 'sections']/span[@class = 'section']")).getText();
		//return element(By.xpath('/html/body/div[5]/div/ul/li[1]/p[2]/span')).getText();

	};
	
	this.getTitleDoc = function() {
		
		return element(By.xpath('/html/body/header/div/h1')).getText();
		 
	};
	
	this.clickTutorial = function() {
		
		element(By.xpath("//div[@class = 'nav-blocks']/a[@href = '/docs/ts/latest/tutorial/']")).click();	
		 
	};
	

	this.clickTutorial2 = function() {
		
	    element(By.xpath("//a[@title = 'We build a simple hero editor' and @href = '/docs/ts/latest/tutorial/toh-pt1.html']")).click();		 
	};
	
	this.clickTutorial3 = function() {
		
		 element(By.xpath("//a[@title = 'We build a master/detail page with a list of heroes' and @href = '/docs/ts/latest/tutorial/toh-pt2.html']")).click();
	};
	
	this.clickTutorial4 = function() {
		
		 element(By.xpath("//a[@title = 'We refactor the master/detail view into separate components' and @href = '/docs/ts/latest/tutorial/toh-pt3.html']")).click();
		 
	};
	this.clickTutorial5 = function() {
		
		 element(By.xpath("//a[@title = 'We create a reusable service to manage our hero data calls' and @href = '/docs/ts/latest/tutorial/toh-pt4.html']")).click();
		 
	};
	this.clickTutorial6 = function() {
		
		 element(By.xpath("//a[@title = 'We add the Angular Component Router and learn to navigate among the views' and @href = '/docs/ts/latest/tutorial/toh-pt5.html']")).click();
		 
	};
	this.clickTutorial7 = function() {
		
		 element(By.xpath("//a[@href = '/docs/ts/latest/tutorial/toh-pt6.html']")).click();
		 
	};
	
	
	this.getTitleTur2 = function() {
		
		return element(By.xpath('/html/body/header/div/h1')).getText();
		 
	};
	this.getTitleTur3 = function() {
		
		return element(By.xpath('/html/body/header/div/h1')).getText();
		 
	};
	this.getTitleTur4 = function() {
		
		return element(By.xpath('/html/body/header/div/h1')).getText();
		 
	};
	this.getTitleTur5 = function() {
		
		return element(By.xpath('/html/body/header/div/h1')).getText();
		 
	};
	this.getTitleTur6 = function() {
		
		return element(By.xpath('/html/body/header/div/h1')).getText();
		 
	};
	this.getTitleTur7 = function() {
		
		return element(By.xpath('/html/body/header/div/h1')).getText();
		 
	};
	
};


module.exports = new doc_page();