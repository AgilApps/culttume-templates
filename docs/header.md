Header
=============

the general structure of the header is composed of several sections where you will find the logo, buttons and other menus that make up the header, each section is described in their respective functionality

##General Structure

```html
<header class="fixed">
    <nav id="sub-header" class="top-bar" data-topbar>
		<ul class="title-area">
		    <li class="name">
		    <h1><a href="#"><img src="assets/img/img-culttume.png" alt="Culttu.me"></a></h1>
		    </li>
		</ul>
		<section class="top-bar-section">
			<div class="photo-user-mini">
			    <ul class="right">
                    <li class="has-form">
                        <a href="#" class="secundary" data-reveal-id="modal-login" data-reveal>Iniciar
                        Sesión</a>
					</li>
					<li class="has-form">
					    <a href="#" class="button " data-reveal-id="modal-register"
					    data-reveal>Registrate!</a>
					</li>
			    </ul>
			</div>
		 </section>
	</nav>
</header>
```

