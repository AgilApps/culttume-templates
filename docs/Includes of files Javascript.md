# Includes of files Javascript

It is recommended that when we call files with extension. Js we do just before closing the body, this in order that the application is not too late to start , it is mandatory to leave the files in the order in which it is calling

```html
<script src="assets/js/vendor/jquery.js"></script>
<script src="assets/js/foundation.min.js"></script>
<script src="assets/js/foundation/foundation.reveal.js"></script>
<script src="assets/js/foundation/foundation.topbar.js"></script>
<script src="assets/js/vendor/modernizr.js"></script>
<script src="assets/js/login.js"></script>
<script>
	$(document).foundation();
	var doc = document.documentElement;
	doc.setAttribute('data-useragent', navigator.userAgent);
</script>
```
