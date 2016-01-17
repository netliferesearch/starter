
var WebFontConfig = {

  google: {
    families: ['Work Sans:300,400,600,700', 'Lora']
  },

  /* SELF HOSTED
  custom: {
    families: ['My Font'],
    //urls: ['/fonts.css'] Local
  },
  */

  /* TYPEKIT
  typekit: {
    id: 'xxxxxx'
  }
  */
 timeout: 2000 // Set the timeout to two seconds

};

// asynchronous loading of Webfontloader
(function(){
	var wf = document.createElement("script");
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.async = 'true';
	document.head.appendChild(wf);
})();
