# Modal login social networks

```html

<div class="reveal-modal" id="modal-login" data-reveal>
	<div >
		<section class="header-modal"><h2>Inciar Sesión</h2></section><hr>
		<section class="header-modal"><h3>Usa tus redes sociales</h3></section>
		<!-- button to login with facebook -->
		<div class="social-networks-login">
			<input type="submit" value="Inicia con Facebook" class="button [tiny small large]">
		</div>

		<!--button to login with twitter -->
		<div class="social-networks-login">
			<!-- spaces in the value is to leave this pin with the same size button facebook-->
			<input type="submit" value="  Inicia con Twitter   " class="button [tiny small
			large]">
		</div>
	    <hr>

		<section class="header-modal"><h3>Ingresa tus datos</h3></section>
		<!--  Is this form  login email-->
		<form>
		    <input type="text" id="username-login" placeholder="Correo Electronico">
			<input type="password" id="password-login" placeholder="Contraseña">
			<!-- button for login-->
			<div class="social-networks-login">
				<a href="#" class="button ">Iniciar Sesión</a>
			</div>
			<div class="social-networks-login">
			    <!-- this is the link that redirects to modem password Forgot -->
				<a href="#" class="forgot_password" data-reveal-id="recover-password"
				data-reveal>¿Olvidaste tucontraseña?</a>
			</div>
		</form>
	</div>
</div>
```
