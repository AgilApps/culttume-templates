# Modals
in this chapter described all modals of login, register, recover password and login via social networks

list of modals

1. Modal register social networks
2. Modal login
3. Modal register email
4. Modal recover password


## Modal register social networks

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
			<a href="#" data-reveal-id="modal-register-email" data-reveal >Regístrate
			con tu dirección de email</a>
		</div>
	</div>
</div>

```
