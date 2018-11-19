node app.js
npm install i -g nodemon
nodemon app.js

- - -

RegEx is dumb. Once defined, 
it can only find patterns 
if the input data strictly matches the pattern.

https://regexr.com/

There are colors and them there colours.
colou?rs
color or colours

\bthe\b
jezeli trzeba znalezc slowo bez odstepow dookola

ad\w
wszystkie slowa ad...byleco z +1 litera, co jest po tych dwoch ad literach

ad\w+
pokazuje pelne slowo, ktora zaczyna sie literami ad

\bad\w+
pokazuje slowo, ktora niezlaczona z niczym

- - -

w - word class
+ - Plus quantifer

[a-zA-Z] - Character set

- - -

hot, cold (Word to find)
\b(cold|hot)\b

- - -

Zip code | 6 digits (Word to find)
My Zip code is 160010. I also write it as 160 010.
\b\d{3}\b - znachodzi 160 010
\b\d{3}\d{3}\b - znachodzi 160010
\b\d{3}\s?\d{3}\b - znachodzi i 160 010 i 160010

- - -

Email id to find
joje@gmail.com anderson@inbox.co.uk inbox@inbox.lt
\b[a-zA-Z0-9\_\-\.]+\@[a-zA-Z0-9]+\.[a-z\.]{2,24}\b


- - -

npm i xregexp
https://www.npmjs.com/package/xregexp

- - -

https://developer.yahoo.com/weather/

For Yahoo Weather API

- - -

Yahoo official npm module

npm install yql 

- - -

npm i colors

- - -

npm i moment

- - -

npm i restify

- - -

> node
require('crypto').randomBytes(24).toString('hex')

otrzymujemy skrocony hex kod > VERIFY TOKEN