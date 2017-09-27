## What is the prototype going to be
The prototype is going to be web app, which users can open from the browser on their mobile device. The web-app will have only one page which is a view of the map of venues surrounding them. The icons on the map will be live and animated based on current buzz ratings. The user can tap on each of these venues to display the live ratings and information surrounding that venue.

### Functionality to be included in the prototype

- Dynamic, interactive, map (Google Maps Javascript API) populated with live icons representing each of the venues.
- Icons on the map will be animated, and display important information at a glance.
- Dynamic, live, Buzz Ratings for each venue sourced from users which currently have the application open. This will include : Microphone Data to determine the volume of the location of each user, GeoLocation Data to determine which venue each user is at, Accelerometer Data to determine how much each user is moving.
- Tapping an icon brings up a detail page for each Venue, and displays data in more depth.
- *Maybe* Leave reviews for the venue you are at.
- *Maybe* Comments / Messages / Updates left by venue account holder.
- *Maybe* Determine Added Buzz Rating definition based on instagram stories.

## Roadmap for development

This is a rough chronological order of how to develop the prototype from start to finish.

C = Client; S = Server;

- ~~S: Set Up Zone.~~
- S: ~~Set up Database on Zone.~~
- S: ~~Design Database Architecture and Implement on the zone.~~
- S: ~~Scrape & Import venue information into database.~~
- S: ~~Set up Venue Pull Response~~
- C: ~~Set up webpage and Google Maps Javascript API.~~
- C: Pull Venue Location information from Server using AJAX & populate the map with these icons on these locations
- C: Develop Location, Microphone, Accelerometer device queries which happen every ~15 seconds, transform into relevant data for database.
- C: Develop current location to display on map.
- C&S: Develop account creation / login page and database logic.
- S: Develop AJAX Responses to populate tables with data received from users.
- C: Develop AJAX Queries to push Location/Microphone/Accelerometer to server.
- S: Develop function to clear old/irrelevant data from database (e.g. microphone data older than 1 hour should be deleted.. No need for 10 minute old microphone data of Venue A / User A if there is new Microphone data from Venue A / User A)
- S: Set up Buzz Rating Pull Response
- C: Develop AJAX Pull for Buzz Rating for each venue.
- C: Map Location/Microphone/Accelerometer to each venue on device.
- C: Develop UI Elements to be displayed on the map.
- C: Develop UI features to display the Buzz ratings for each venue on the map.
- C: Develop the detail views for each venue if tapped on.
- ----- Stretch Goals
- C & S: Leave reviews for the venue you are at.
- C & S: Comments / Messages / Updates left by venue account holder.
- C & S: Determine Added Buzz Rating definition based on instagram stories.
