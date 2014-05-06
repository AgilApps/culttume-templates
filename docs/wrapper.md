wrapper
=============

Wrapper It is the general container where the menu divs and sections

```html

	<!-- div #float-menu -->
	<div id="float-menu">
	    <!-- div Title of section -->
	    <div class="title-user-left">
		    <h2>Title of section<h2/>
		</div>
		<!-- Menu general-->
		<div id='css-menu'>
		    <ul>
		        <li class='has-sub'><a href='#'><span>Category-1</span></a>
			        <ul>
					    <li><a href='category-music.html'><span>Subcategory-1</span></a></li>
					 </ul>
				</li>
				<li class='has-sub'><a href='#'><span>Category-2</span></a>
					<ul>
				    	<li><a href='events.html'><span>Subcategory-2</span></a></li>
					</ul>
				</li>
		    </ul>
	    </div>
	    <!-- end #css-menu -->
    </div>
    <!-- end #float-menu -->
```
This part belongs to the menu code that is located on the left side, can be accessed using the links to the pages of the other categories.

`<div id="float-menu">` It is the container menu.

Being located within this div there are two div, the first have the title of section `<div class="title-user-left">` and the second the menu `<div id='css-menu'>`.

in  the `<div id='css-menu'>` exist one desplegable list in which ago reference to the categories that redirect to other pages

for begin is created one tag `<ul>` that include the list and contents

`example
```html
<ul>
	<li class='has-sub'><a href='#'><span>Creaciones</span></a>
		<ul>
			<li><a href='category-music.html'><span>Música</span></a></li>
		</ul>
	</li>
</ul>
```

when finished the list is created one new div `<div id="section-general">`

this list will be which contains the boxes of works of art of artist













