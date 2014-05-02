Header
=============

the general structure of the header is composed of several sections where you will find the logo, buttons and other menus that make up the header, each section is described in their respective functionality

##General Structure

```html
<header class="fixed">
    <nav id="sub-header" class="top-bar" data-topbar>
        <!-- Here is the logo -->
		<ul class="title-area">
	        <li class="name">
	        <!--this tag <h1>  is necessary to take the document to take the padding, if the image is
	        superimposed and does not look good-->
		        <h1><a href="#"><img src="assets/img/img-culttume.png" alt="Culttu.me"></a></h1>
		    </li>
		</ul>
		<section class="top-bar-section">
			<div class="photo-user-mini">
			    <ul class="right">
                    <li class="has-form">
                    <!--  this hyperlink refers to modal login -->
                        <a href="#" class="secundary" data-reveal-id="modal-login" data-reveal>Iniciar
                        Sesión</a>
					</li>
					<li class="has-form">
					<!--  this hyperlink refers to modal register -->
					    <a href="#" class="button " data-reveal-id="modal-register"
					    data-reveal>Registrate!</a>
					</li>
			    </ul>
			</div>
		 </section>
	</nav>
</header>
```

`<header class="fixed">` the class fixed by default in foundation and structure is in `foundation.css`.

within it is the nav structure within it is the logo and buttons to login and register.
`<nav id="sub-header" class="top-bar" data-topbar>`

the `id= "sub-header"` is an identifier that is created directly in the file style.css to style and color to the header

and `class = "top-bar" class data-top bar` is part of foundation, structure refers to the header of a document

internally in `<nav id="sub-header">`  is a list of the form: `<ul class="title-area">`, this list is located at the left side of the header and that is where we call the logo culttu.me

at the end of the list there is a section called `<section class="top-bar-section">`, is located on the right side of the header and contains buttons login and register.

The registration and login button are in `<div class="photo-user-mini">` described below

```html
<div class="photo-user-mini">
	<ul class="right">
	    <li class="has-form">
	        <a href="#" class="secundary" data-reveal-id="modal-login" data-reveal>Iniciar
	        Sesión</a>
	    </li>
	    <li class="has-form">
		<a href="#" class="button " data-reveal-id="modal-register" data-reveal>Registrate!</a>
		</li>
	</ul>
</div>
```
the list shown in the preceding code shows tags `<a hfer=""> </a>`
show modal registration and login

so that they show the modal tag needs to have the following parameters:

1. `data-reveal-id="modal-login"`: refers to the id of modal gonna show

2. `data-reveal`: references that will display a modal.





















