# Modal register social networks

```html
<div class="reveal-modal" id="modal-register" data-reveal>
	<div>
		<section class="header-modal"><h2>Registrate!</h2></section><hr>
		<section class="header-modal"><h3>Usa tus redes sociales</h3></section>
		<!-- button to register with facebook -->
		<div class="social-networks-login">
		    <input type="submit" value="Conectarse con Facebook" class="button [tiny
		    small large]">
		</div>
        <!-- button to register with twitter  -->
	    <div class="social-networks-login">
	        <input type="submit" value="   Conectarse con Twitter   " class="button
	        [tiny small large]">
		   </div>

		<!-- This link redirects to modal register by email -->
		<div class="social-networks-login"><hr>
			<a href="#" data-reveal-id="modal-register-email" data-reveal>Regístrate con tu dirección de email</a>
		</div>
	</div>
</div>

```

The class `reveal-modal` is brought from `foundation.css` whenever we refer to reveal she calls the class in javascript to display as a modal

The id `modal-register` is an id that is created to reference from label `<a href=""></a>`

to open a modal does the following:

Example

```html
<a href="#" class="button" data-reveal-id="modal-register" data-reveal>Registrate!</a>
```
internally creates a new div where does all the contents of the modal

for create title of the modals the used next tags.

`<section class="header-modal"><h2>Registrate!</h2></section>`

the button to register with facebook is this:

```html
<div class="social-networks-login">
	<input type="submit" value="Conectarse con Facebook" class="button [tiny small large]">
</div>
```

the button to register with twitter is this:

```html
<div class="social-networks-login">
	<!-- spaces in the value is to leave this pin with the same size button facebook-->
	<input type="submit" value="Conectarse con Twitter" class="button [tiny small large]">
</div>
```

This link redirects to modal register by email

```html
<div class="social-networks-login"><hr>
	<a href="#" data-reveal-id="modal-register-email" data-reveal >Regístrate  con tu dirección de email</a>
</div>
```
