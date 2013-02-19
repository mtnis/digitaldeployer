// Copyright (C) 2013 Dunbar Digital Armor
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

CloudFlare.define("da_deployer", ["da_deployer/config"], function(_config) {

    
    //  Pageview Code Deployer - 
	
	var DigitalDeployer = function DigitalDeployer(config) {
            this.useFilter = /msie [678]/i.test(navigator.userAgent); // compatibility
   
        }
    var digitalDeployer = new DigitalDeployer(_config)
	
	DigitalDeployer.prototype.activate = function() {
        if (this.config.message != "") {
            this.setup();
        }
    }
	
	DigitalDeployer.prototype.setup = function() {
		var ss = document.createElement('script');
		var src = this.config.message;
	
		var tt = document.createTextNode(scr);
		if (this.useFilter) { // IE
			ss.text = scr;
		} else {  // Good Browsers
			ss.appendChild(tt);
		}
		var hh = document.getElementsByTagName('body')[0];
		hh.appendChild(ss);
	}
	
	return digitalDeployer
});
