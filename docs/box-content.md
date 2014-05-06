# box-content

the div with the class box-content have all the content of uploaded the artist

the structure general is this:

```html
<div class="box-content">
	<div class="header-box-content">
		<h3 class="title-box-content">Category Name</h3>
		<a class="ico-id-content" href=""><div class="ico-id-photo"></div></a>
	</div>
	<div class="line-color-grey"></div>
		<div class="product-box-content">
			<img src="image/upload" alt="">
	    </div>
		<div class="info-box-content">
			<div class="user-name-box-content">
			<div class="user-name-mini"><a href="#">Name Artist</a></div>
		</div>
		<div class="ico-social">
			<a class="share-social" href="#"><div class="share-fb"></div></a>
			<a class="share-social" href="#"><div class="share-tw"></div></a>
			<a class="share-social" href="#"><div class="share-g"></div></a>
		</div>
	</div>
</div>
```
the div with the class header-box-content have one tag `<h3 class="title-box-content">Category Name</h3>` this is the title of category that brings of form dynamic the data of database

the tag `<a class="ico-id-content" href=""><div class="ico-id-photo"></div></a>` have the image of category.

The second div is: `<div class="line-color-grey"></div>` this simply is the line that separate the header and the image the work art

The next div is : `<div class="product-box-content">`, this div is important because is the that upload the image from the database

in the image inside of the attribute src brings the file found in the database
`<img src="image/upload" alt="">`

the fourth div is the structure which have the name of artist, this label is dynamic and upload information from database `<div class="info-box-content">`

inside this div, shown the name of the artist and this found content in the database
`<div class="user-name-mini"><a href="#">Name Artist</a></div>`, where the name Artist is dynamic informatión located is database

and finally this the content where can be shared through social network
```html
<div class="ico-social">
	<a class="share-social" href="#"><div class="share-fb"></div></a>
	<a class="share-social" href="#"><div class="share-tw"></div></a>
	<a class="share-social" href="#"><div class="share-g"></div></a>
</div>
```







