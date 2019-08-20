#VINAY_SRIDHARA COMMENTS ON THE PROJECT "JAM - Music list with player"
- To view the output in the development mode, follow the steps as given below:
1) In the console, navigate to the project folder.
2) Run command "npm install". This will install all the dependencies and creates a node-modules folder.
   This process takes around 5-8 mins to complete.
3) Run command "npm start". Runs the app in the development mode.
   Opens the application in the browser
4) Run command "npm test" to run all the test cases.

Highlights:-
- Used https://cors-anywhere.herokuapp.com/ to enable cross origin requests
- Since the like, comment api were creating cors error, I have written a wrapper api to access JAM interact api in php and hosted in https://piddling-worksheets.000webhostapp.com
- Used node-sass library for using scss and it's features
- The design is responsive.

Feature:-
- Display all the music items from the data fetched from JAM Api
- Click on PLAY button will play the actual music. Have used react-howler for the music player
- Click on LIKE button will call the JAM interact API and also changes the UI with little animation
- Click on COMMENT button will open a react modal where user can feed the comment and submit. This will call JAM ineract API to update the comment.
- Results limit is set 4to 4 per page. Pagination is implemented with next and previous buttons. 
- I have used stock image for the wallpaper from my personal depositPhotos paid account.
- I have used JAM company logo for creating GIF image for the loader and also for favicon.