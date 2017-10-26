# Project: Venu

DECO3500: Social & Human Computing

Team Name: Team Apollo

## 1.0 Promotional Material

### Conference Poster

<img src="https://github.com/deco3500-2017/team-apollo/blob/master/images/conferencePoster-01.jpg" width="800">

### Information Flyer

<img src="https://github.com/deco3500-2017/team-apollo/blob/master/images/pamphlet-01.jpg" width="400"> <img src="https://github.com/deco3500-2017/team-apollo/blob/master/images/pamphlet-02.jpg" width="400">

### Explanation Poster

<img src="https://github.com/deco3500-2017/team-apollo/blob/master/images/a4-poster-01.jpg" width="400">

## 2.0 Prototype

**Live Prototype:** https://deco3500-venu.uqcloud.net

**Low-Fidelity Prototype:** https://invis.io/98E2N49TW

Prototype Quick Steps: 
1. Start by registering a user account with a simple username and password, and then signing in. 
2. Grant access to GPS, Microphone and Accelerometer sensors on your device. (Note: The prototype has not been designed to handle cases where the required permissions are not granted, and undefined behaviour will occur in this case). 
3. Navigate the map. Each of the markers on the map represents a Venue. The marker will fill with a red colour as the Venue, has increasing Capacity, Movement and Volume readings, AKA the Venue's level of Buzz. (Note: all venues except for the REDROOM and the UQ 3500 Expo have simulated buzz ratings being created.)
4. Pick a venue to see it's profile page. This page features a breakdown of the Venue's current, real-time buzz, and other pertinent information.
5. You can also able to enter the list view (accessible via the leftmost navigation icon), which will display all of the venues and their buzz, ordered by geographic distance from your current location.

## 3.0 Project Summary

The problem space was trying to bridge the gap between patrons and the venues in their city. The best that a patron can currently do before heading out is either getting a good recommendation from a friend, going to multiple venues until they find the right one, or getting lucky, in search of the right atmosphere for a night out. This was addressed by trying to create a platform which allowed users to gather accurate and up-to-date information about all of the venues surrounding them, using the affordances of social and mobile technology. 

## 4.0 Project Process

### Phase 1: Research

##### Industry Research

Industry research was undertaken to look at the industry that Venu hopes to enter. This is about looking at the internal and external evironemnt of the industry and searching for opportunities or threats, potentially in the form of competitors. From this research we found that the industry had some want, with few actual resolutions in place for the specific problem. However, there were some competitors found, such as Looop (operating in New York), which allowed the team to learn about their experience in the industry and the angle they took.

#### Sketching & Wireframing

Wireframes are a low-fidelity, generalised version of the applications layout. They are created to test out of the functionality behaviour and priority of elements within the application. The goals of creating these prototypes is to allow for quick design iteration, as opposed to make similar changes to a high-fidelity prototype, which would be time expensive. This phase of the wireframing allowed the team to explore some arbitary ideas and concepts that could work, however, they were based off shallow assumptions at this stage.

![Application Sketch](https://github.com/deco3500-2017/team-apollo/blob/master/images/sketch-001.jpg?raw=true "Main Application Sketch 001")

##### Concerns: Privacy and Critical Mass
It was determined early on that Privacy and Critical mass would be two key issues for our project. Critical mass was a big problem because of the dependece of User-Generated reviews to rate venues by. Privacy would also be a concern because of the nature of knowing the time and location of where the users were, as well as how that fit together with some of the social aspects intended for the application. Our detailed discussion of these concerns can be found in section 2.3.4 in the original Project Proposal [Here](https://github.com/deco3500-2017/team-apollo/blob/master/projectProposal/projectProposal.md).

### Phase 2: Requirements

#### Surveys, Interviews, User Testing
Early user research was done by both Survey and Interview methods. The key goal of this early research was to get an understanding of the habits of Nightlife Patrons, what they valued, disliked, and they key feelings about certain aspects of nightlife. This research provided a wealth of information regarding our users and has been visually broken down in the following poster. 

![User Survey & Interview Results](https://github.com/deco3500-2017/team-apollo/blob/master/images/User_Survey_data.jpg)

#### Wireframing

Through the research undertaken as part of the research and requirements gathering phases, an improved level of wireframing was able to complete and let the team create an early prototype to perform user testing on. These designs were created using Balsamiq as a test for the possible form of the application and can be found [Here](https://marvelapp.com/6f8aaia/screen/33069368)

### Phase 3: Design

#### The Pivot in design
--- I think we need to mention here how our idea evolved from the user-generated content to passive data collection via sensors.

Along with this pivot privacy became a greater concern for the project as access to the sensors on the users' intimately held devices was required. This resulted in a document where we explored how to handle this. 

[Privacy Concerns for the User](https://github.com/deco3500-2017/team-apollo/blob/master/phase3/privacy.md)

#### Design stuff: Brand & Style Guide, Low-Fi Designs, Invision Prototyping

Content here.

### Phase 4: Prototyping

The next stage of the prototype involved the starting construction of it. The team decided to let two members focus on the building backend to support the above features, which would be agnostic to the finalised UI, while the rest of the team continued to develop the visual style of the application, and explore other features. 

**Design stuff for the prototype that was happening**

The final stage of the prototype was to combine the completed backend functionality with the completed front-end design of the application. This was done swiftly, in the course of about three days, and resulted in the prototype ready to be displayed at the expo.

## 5.0 Project Contributions

Luke:
- Early sections of the Proect Proposal: Concept, Audience and Background Theory and Concerns.
- Helped Create questions to ask for early user research survey
- Conducted Early User Research Interviews with three participants.
- Created outlines of tasks to do before each of the three standups.
- Created a roadmap for all the Client-Side and Server-Side features necessary for the prototype.
- Early Prototype Backend Construction : Setup of the Zone to host the prototype, Database Design, Database Construction, Compile information for venues to include in the prototype and add to database, Setup of Google Maps Javascript API, Early setup for Client-Side prototype to push and pull data to the backend database.
- Late Prototype Backend Construction : Creation of Geofences for each venue, and logic to determine if current user is within one of the geofences, Logic which allows reading of accelerometer and audio sensors, logic to send buzz (gps, audio, accelerometer) data to the database linked to a user account, logic to pull buzz data from the database and process it for use in the application
- Research and documentation for ways to address users' privacy concerns.
- Late protoype construction : Created the dynamic UI elemets for use in the app (Buzz meter, markers, geographic distances, Volume, Capacity and Movement indicators), Linked logic & signup, sensor access events, and main loop of the application, assisted other team members with creating UI elements for the prototype.
