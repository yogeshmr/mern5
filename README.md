1) Import the repo into Replit.com
2) You need to create a .env file in the root and provide two environment values namely MONGO_URI=<your mongo db string with password and database name> and NODE_ENV=production.
   Please refer the youtube video of Burak "https://www.youtube.com/watch?v=O3BUHwfHf84&t=809s" on how to setup your mongodb database.
3)  When importing the github repo to replit.com, the contents of the .replit file doesn't get fetched properly. Hence as a workaround, please copy the contents of the .replt file
 in the repo to your Replit.com app.
4) Delete the package-lock.json file in the root and frontend directories
5) build the app using: npm run prod_build
6) run the app using: npm run start
