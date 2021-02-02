## To run project
### `npm install`
### `npm start`

Project is hosted [here](https://nonstop-movie.netlify.app/)

## About
Movie booking app is a basic React js project which uses Redux and React Router for some usual functionalities.

## Redux
Have used Redux for managing state between 3 different pages and all the components.
Props could have been used to communicate between components but that would have made code bit complicated, so this added some boilerplate but kept the code clean no props were required.
As state between two pages Home and Confirmation page was suppose to be in sync for displaying the selected movie and seats before and after confirming the booking, Redux was required. This could have been done with localstorage as amount of data was low. But since its React and power of Redux makes it even better so y not. Plus this also helps in the posiblity to increase the functionality or pages in future. Keeping code clean and project optimised.

## React Router
To manage routing between pages I have used React Router.
To handle the user authentication have used basic localstorage check for user login.
After implementing the token based authentication in cookies this will be usefull.

When web app is deployed on server, it generally don't get the page after refresh on routes other than './', so have used Hashrouter.
The reason being when ever browser hits the server its gets index.html file, but server is probably only configured to send index.html upon GET '/'. The idea is by appending a # to the end of the root of your URL, anything after that # won’t be sent to the server.

## Structure
Structure is prety basic.
1. Components doing the major stuff, have statefull components managing everything.
2. Containers the stateless components doing just the rendering part with the help of props.
3. Data holding the data which could have received from API. Will be removed in future.
4. Sore contains all the state management files related to Redux.
5. Kept utility methods like validation in Util folder.

Generaly I keep one more folder for all constants like all images, font awesome icons and library related imports and then import required stuff from these.
This keeps the file import statements clean and less line of code.

Component imports from Bootstrap and Material UI consumes alot of lines, so this way is much usefull.

Happy codding!!!