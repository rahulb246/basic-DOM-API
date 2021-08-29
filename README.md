# basic-DOM-API

``` javascript
  // A very basic DOM API usage sample
 
  const vDocument = new VDocument();
  const body = vDocument.createElement("body");
  const div = vDocument.createElement("div");
 
  div.innerHTML = "Hello, this is div's content!";
 
  body.appendChild(div);
  vDocument.appendChild(body);
 
  vDocument.render();
 /*
  Output:
  <html>
  	<body>
 		<div>
  			Hello, I am a div!
  		</div>
  	<body>
  </html>
 */
 ```
