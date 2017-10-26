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

Note: The Functional Prototype is only compatible with iOS devices running iOS 11 and Safari, or Android devices running Chome 29 or newer.

To use the Functional Prototype you start by registering a user account with a simple username and password, and then signing in. Once signed in you are greeted with a message informing you that the application requires access to GPS, Microphone and Accelerometer sensors on your device. If the user chooses to continue their local device will ask for access, and if they are approved then the application will work as expected, (Note: The prototype has not been designed to handle cases where the required permissions are not granted, and undefined behaviour will occur in this case). The user will first get a glimpse of a map of Brisbane, with various circular markers placed on the map. Each of these markers has a dynamic aspect to them, which is that they will fill with a red colour as the Venue, denoted by that marker, has increasing Capacity, Movement and Volume readings, AKA the Venue's level of Buzz. For the sake of the prototype, all venues except for the REDROOM and the UQ 3500 Expo have simulated buzz ratings being created. If you tap on one of the markers, the assosciated venue's profile page will be displayed. This page features a breakdown of the Venue's current, real-time buzz, and other pertinent information such as the type of the venue, its opening hours, address and more. Exiting this screen, a user is also able to enter the list view (accessible via the leftmost navigation icon), which will display all of the venues and their buzz, ordered by geographic distance from the current user. The user can also access and account page where they can see recent, relevant activity on the Venu platform.

## 3.0 Project Summary

_Venu_ is a project that intends to improve the quality of the community's nights when they go out to venues in their local city. Today there is currently no way of knowing which venue currently has the best atmosphere, in real-time, and making a decision based on that. The best people can currently do is simply choose from their favourite venues, or source information from friends or social media on any given night out, which is not reliable. By utilizing social and mobile technology in conjunction, _Venu_ will help people make a more informed decision before they out for the night.

## 4.0 Project Process

### Phase 1: Research

#### Research

Content here.

##### Industry Research

Content here.

##### Critical-Mass

One of the early concerns that we had established for the platform would be that of achieving critical mass. The early idea for the platform was to have a stream of user-generated reviews for each venue. This user-generated content of course requires a lot of users, and it would be hard to build those users in the early stages where the main function of the app is severely limited, due to lack of users. By researching into the field's current understanding of achieving and maintaining critical mass, a few strategies to increase the probability of success for Venu were devised, which can read read in depth in the original Project Proposal, however a quick outline of them is as follows: Use currently available public data to help determine the atmosphere of venues, e.g. Instagram Users' public stories with tagged locations; Allow venues to have accounts, which would have a greater incentive to post content to the platform; Releasing the application to geographic locations in a structured way to better focus launches on the local population and gain a foot hold; Give-a-Review Get-a-Review implementation to encourage users to create content; and more.

**A version of the above with less words:**
One of the early concerns that we had established for the platform would be that of achieving critical mass, because the early version of the concept was focus on user-generated reviews. By researching into the field's current understanding of achieving and maintaining critical mass, a few strategies to increase the probability of success for Venu were devised, which can read read in depth in section 2.3.4 in the original Project Proposal [Here](https://github.com/deco3500-2017/team-apollo/blob/master/projectProposal/projectProposal.md).

##### Privacy

Similarly to the concerns around Critical Mass, the Privacy concerns of our users were seen as a big threat to the potential success of Venu. These concerns were harder to create a solid plan for, but it was detemined that by keeping this aspect of the user in mind every step of the way, this issue could be best avoided. Our detailed discussion of this can be found in section 2.3.4 of the Original Proposal [Here](https://github.com/deco3500-2017/team-apollo/blob/master/projectProposal/projectProposal.md)

#### User Research

Early user research was done by both Survey and Interview methods. The key goal of this early research was to get an understanding of the habits of Nightlife Patrons, what they valued, disliked, and they key feelings about certain aspects of nightlife. This research provided a wealth of information regarding our users and has been visually broken down in the following poster. 

**Jenna's poster here**

#### Wireframing

Content here.

### Phase 2: Requirements

#### Surveys & Interviews

Content here.

**I think I put this stuff in phase 1.... not sure what's meant to go up there if it's meant to be down here**

#### Wireframing

Content here.

#### User Testing

Content here.

### Phase 3: Design

#### Brand & Style Guide

Content here.

#### Low-Fidelity Designs

Content here.

#### Invision Prototyping

Content here.

### Phase 4: Prototyping

Late in the project it was determined best to do a pivot to a fully-functional prototype that would use genuine user-data and dynamic interfaces, as opposed to a simulated prototype using high-fi prototyping softwares. 

The first stage of this pivot involved determining what features were important to include, which were chosen to be :
- An interactive map of real venues throughout the city.
- Real-Time measurement of the user's surroundings using the GPS, Audio and Accelerometer sensors.
- Real-Time display of the user's current venues' Buzz rating based on information sourced from users on the app.

The next stage of the prototype involved the starting construction of it. The team decided to let two members focus on the building backend to support the above features, which would be agnostic to the finalised UI, while the rest of the team continue to develop the visual style of the application, and explore other features. 

**Design stuff for the prototype that was happening**

The final stage of the prototype was to combine the completed backend functionality with the completed front-end design of the application. This was done swiftly, in the course of about three days, and resulted in the prototype ready to be displayed at the expo.

- Design Functionality & Capabilities 
- Develop Backend
- Integrate Prototype Designs
- High-Fidelity User Testing

## 5.0 Project Contributions

Luke:
- Worked on the early sections of the Proect Proposal, specifically: Concept, Audience and Background Theory and Concerns.
- Helped Create questions to ask for early user research survey
- Conducted Early User Research Interviews with three participants.
- Created outlines of tasks to do before each of the three standups.
- Created a roadmap for all the Client-Side and Server-Side features necessary for the prototype.
- Early Prototype Backend Construction : Setup of the Zone to host the prototype, Database Design, Database Construction, Compile information for venues to include in the prototype and add to database, Setup of Google Maps Javascript API, Early setup for Client-Side prototype to push and pull data to the backend database.
- Late Prototype Backend Construction : Creation of Geofences for each venue, and logic to determine if current user is within one of the geofences, Logic which allows reading of accelerometer and audio sensors, logic to send buzz (gps, audio, accelerometer) data to the database linked to a user account, logic to pull buzz data from the database and process it for use in the application
- Research and documentation for ways to address users' privacy concerns.
- Late protoype construction : Created the dynamic UI elemets for use in the app (Buzz meter, markers, geographic distances, Volume, Capacity and Movement indicators), Linked logic & signup, sensor access events, and main loop of the application, assisted other team members with creating UI elements for the prototype.

Content will go here
