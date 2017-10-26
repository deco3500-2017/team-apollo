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

#### Research

Content here.

##### Industry Research

Content here.

#### User Research

Early user research was done by both Survey and Interview methods. The key goal of this early research was to get an understanding of the habits of Nightlife Patrons, what they valued, disliked, and they key feelings about certain aspects of nightlife. This research provided a wealth of information regarding our users and has been visually broken down in the following poster. 

**Jenna's poster here**

^^Merge the above three sections -- Just be general and hyperlink to repo docs

##### Critical-Mass
One of the early concerns that we had established for the platform would be that of achieving critical mass, because the early version of the concept was focus on user-generated reviews. By researching into the field's current understanding of achieving and maintaining critical mass, a few strategies to increase the probability of success for Venu were devised, which can read read in depth in section 2.3.4 in the original Project Proposal [Here](https://github.com/deco3500-2017/team-apollo/blob/master/projectProposal/projectProposal.md).

##### Privacy

Similarly to the concerns around Critical Mass, the Privacy concerns of our users were seen as a big threat to the potential success of Venu. These concerns were harder to create a solid plan for, but it was detemined that by keeping this aspect of the user in mind every step of the way, this issue could be best avoided. Our detailed discussion of this can be found in section 2.3.4 of the Original Proposal [Here](https://github.com/deco3500-2017/team-apollo/blob/master/projectProposal/projectProposal.md)

^^Merge these two sections -- Just be general and hyperlink to repo docs

#### Wireframing

-- Chuck a bunch of images in here and maybe a very short description

### Phase 2: Requirements

#### Surveys, Interviews, User testing

Content here.

#### Wireframing

Content here.

### Phase 3: Design

#### The Pivot in design
--- I think we need to mention here how our idea evolved from the user-generated content to passive data collection via sensors.
 -- Link to the privacy doc

#### Design stuff: Brand & Style Guide, Low-Fi Designs, Invision Prototyping

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
