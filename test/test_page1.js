

describe ("testing Angular web page", function(){

	
	browser.get("https://angular.io/");
	
	var home_page = require('../page/index_page.js');
	var features_page;
	
	it ("validate the features page's header", function(){
		
		browser.driver.sleep(1000);
		browser.waitForAngular();
		features_page =  home_page.clickFeatures();
	   	browser.driver.sleep(1000);
		browser.waitForAngular();
		expect(features_page.getTitle1()).toEqual('Cross Platform');
		expect(features_page.getTitle2()).toEqual('Speed and Performance');
		browser.driver.sleep(1000);
		browser.waitForAngular();

	
		
	});
	
	var doc_page;
	it ("validate seacrh bar and its output in Doc page ", function(){
		
		
		doc_page = features_page.clickDoc();
		browser.driver.sleep(1000);
		browser.waitForAngular();
		doc_page.enterFieldValue('directive');
		browser.driver.sleep(1000);
        browser.waitForAngular();
		expect(doc_page.validateDirective()).toEqual('Directive: DirectiveMetadataFactory');
		browser.driver.sleep(1000);
		browser.waitForAngular();
	  
		 
		
	});
	
	
	it ("validate tutorial menu bar and its headers", function(){
		
		
		doc_page = features_page.clickDoc();
		browser.sleep(1000);
		doc_page.clickTutorial();
		browser.sleep(1000);
		doc_page.clickTutorial2();
		browser.sleep(100);
		expect(doc_page.getTitleTur2()).toEqual('THE HERO EDITOR');
		browser.sleep(100);
		doc_page.clickTutorial3();
		browser.sleep(100);
		expect(doc_page.getTitleTur3()).toEqual('MASTER/DETAIL')
		browser.sleep(100);
		doc_page.clickTutorial4();
		browser.sleep(100);
		expect(doc_page.getTitleTur4()).toEqual('MULTIPLE COMPONENTS')
		browser.sleep(100);
		doc_page.clickTutorial5();
		browser.sleep(100);
		expect(doc_page.getTitleTur5()).toEqual('SERVICES')
		browser.sleep(100);
		doc_page.clickTutorial6();
		browser.sleep(100);
		expect(doc_page.getTitleTur6()).toEqual('ROUTING')
		browser.sleep(100);
		doc_page.clickTutorial7();
		browser.sleep(100);
		expect(doc_page.getTitleTur7()).toEqual('HTTP')
		
	});
	
	
	
	
	
});