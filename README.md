# Project Proposal: Venu

DECO3500: Social & Human Computing

Team Name: Team Apollo

## 1.0 Introduction

_Venu_ is a project that intends to improve the quality of the community's nights when they go out to venues in their local city. Today there is currently no way of knowing which venue currently has the best atmosphere, in real-time, and making a decision based on that. The best people can currently do is simply choose from their favourite venues, or source information from friends or social media on any given night out, which is not reliable. By utilizing social and mobile technology in conjunction, _Venu_ will help people make a more informed decision before they out for the night.

## 2.0 Concept

The core concept of the service is to allow users access to a map that will give ratings of venues in real-time. The ratings will be based on two key metrics: _Buzz_ and _Vibe_. A Venue's _Buzz_ will have three qualities that are displayed to a user, determined by passively gathering data about that venue in real time. These three qualities will be Popularity, Movement, and Sound. Popularity will be determined based on how many users are at the venue at once, which we can deduce based on using location services to track the location of our users. Movement will be determined by measurements of user's device accelerometers, this rating be used to indicate to users how much activity or dancing is happening at the venue. Sound will be determined based on the decibel reading of user's microphones, to indicate to users how loud the venue is. _Vibe_ will be manually input by our users, where they will have the ability to input atmosphere specific icons or phrases such as 'Loud', 'Social', 'Relaxed' etc..

By viewing a Venue's Buzz and Vibe, a user should be able to make an accurate decision as to whether the Venue in question will provide the type of experience they're looking for. The idealized value of the app is that it will save its users time and money spent hopping between venues, as well as allowing them to experience new things and have more fun on their nights out. Venu will provide a new experience for its users also because there is not currently any similar service that would provide the same type of information to users. Review platforms such as Google, Yelp and Facebook don't provide any real time data which renders them useless to the patrons Venu is targeting. This is obvious because a Venue's atmosphere changes from hour to hour, which could not possibly be indicated by a long-term 5-star rating; a 5-star rating also does nothing to indicate the type of music, crowd, or atmosphere at a venue, which is what a patron really cares about.

### 2.1 Audience

The audience of the app will be patrons of nightclubs, bars and other entertainment venues. The demographics of these users will tend to be people between the ages of 18 and 30, socio-economically spanning the lower to upper-middle class.

#### 2.1.1 User Persona : Paul

**Age:** 21

**Location:** Kangaroo Point, Brisbane, Queensland

**Education:** Brisbane State High School

**Occupation:** Paul is a student at QUT in Brisbane, Queensland, studying a Bachelor in Sport & Exercise Science.

**Personality & History:**

- Paul loves hanging out with friends and having new experiences.
- He went to University directly after high school.
- Paul has been going to parties and nightclubs frequently since he turned 18.

**Goals:**

- Paul wants to experience new things and make great memories with his friends while he is young.
- Paul and his friends specifically love going to nightclubs which have a DJ who is really getting the crowd going, and they only like DJs who play EDM.

**Frustrations:**

- Paul finds that his nights out can be hit-and-miss.
- Paul hates spending $20 on the entry-fee for a night club if it doesn't turn out to be fun inside.
- Paul doesn't like sending messages out to all the people he knows to see if they're at a good club.

#### 2.1.2 User Persona : Miranda

**Age:** 27

**Location:** 1770, Queensland

**Education:** 1770 State High School

**Occupation:** Miranda is a Real Estate Agent, specialising in rental property management in 1770.

**Personality & History:**

- Miranda likes to meet new people.
- Miranda comes from a creative background: she used to be in a jazz band.
- Miranda doesn't like loud places where too many very young adults are hanging out.

**Goals:**

- Miranda wants to meet new people and experience the best that Brisbane has to offer while on holiday.
- Miranda loves seeing local bands.

**Frustrations:**

- Miranda finds it really hard to find the secret treasures of new cities without having a friend to make personal recommendations.
- Miranda finds that online reviews, and even business' descriptions of themselves tend not to be trustworthy.

### 2.2 Aim

The aim of the project is to provide a platform that lets users feel more empowered and knowledgable before they make a decision about which venue to go to on a night out. Venu can be considered a success if it achieves this, and builds a loyal base of users who value its features.

### 2.3 Background Theory, Context and Considerations

#### 2.3.3 Testing the Concept

Testing the concept of any idea is an important phase of a project to gain early insights into the chance of user adoption and important learnings around use cases. Selecting the appropriate testing methods is an important step in the testing phase. Some methods that could be used to perform these tests could be surveys (on both users and local venues), online smoke tests and product usability tests.

- The survey could be a series of questions performed both online and on the street to begin asking users and venues about how they feel about the idea, how they see it being used and their thoughts on necessary features.
- Online smoke tests are completed by creating a landing page for the application that lists the core offerings of the applications and asking users to sign up if they are interested. These tests don't provide immediate feedback but can be an important step in validating your idea from an idea stage and gaining access to interested users.
- Product usability tests could be performed using a set of users with access to a prototype version of the application. From there, the users would be asked to use the prototype to assist them on their night out, giving extremely useful learnings around the apps effectiveness in supporting a night out.

#### 2.3.2 Requirements Gathering

Interviews will be the primary method for requirements gathering. Interviews have been determined as the best way to gather requirements because of the rich information that can be gathered, while connecting directly with the users as stakeholders. The context of an interview will allow the interviewer to probe the interviewee when they hint at a valuable piece of information which we may not have otherwise considered. An interview is a better way to probe for this type of information than other methods which could present that same information, such as direct observation in the wild, which would be hard to do in the context of observing users while they go out to venues at night.

The interviews will contain both qualitative and quantitative questions to gather a variety of information about the field in question. Quantitative questions should be closed-ended and used to gather important factual information, such as: How many venues do they think they tend to go through on an average night out, how many venues would they consider to be too many to go through in one night, how much time they would be willing to spend deciding where to go before they head out, etc. The qualitative questions should be open-ended, trying to get an indication of what a user values from a night out. Using these open-ended questions we want to determine key points such as: what are all of the key factors about a venue that will impact on its quality, how many and what categories would you say that a venue could fall into, what language would you use to describe a good venue, etc.

#### 2.3.3 Model of Context

The context of the application is that it will be installed on a user's mobile device. This means that the product will be freely mobile, and personally attached to the user at all times, while maintaining communication with the service's backend all the time via a mobile network. As a virtue of the mobile device it is installed on the product will be aware of its location at all times, and it will also be able to use the device's sensors such as its microphone and accelerometer to gather information. The product will allow the user to perform specific tasks for the user, in this case viewing time and location specific information, in a quick and personally driven manner. The user will be aware that the information being provided is a real-time measurement, and constantly in flux.

#### 2.3.4 Other Design Considerations

##### Privacy

A key consideration that will have to be considered throughout development would be that of privacy. There are two key areas where this privacy concern will present itself:

1. Privacy within the user's social network:

The product is going to have a social aspect to it to encourage users to share their good experiences and reviews. It is known that users of social media networks are comfortable doing this, however there is a line when they feel that sharing this information gives away too much information. An example of this is that users of Snapchat are generally comfortable sharing photos or videos of themselves in a clearly defined location at a clearly defined time, however a lot of users had a problem with Snapchat's SnapMaps feature, feeling that it gave away too much information by sharing their location in real-time. From these two observations it can be deduced that there is a certain cut-off point where a user feels uncomfortable sharing their location with too high of a resolution. Therefore the Venu application should be mindful of this when providing features which may potentially give away a user's location when used.

2. The service breaching the user's privacy:

Users of online services consider their privacy important. It is clearly documented that users dislike giving access to their devices peripherals, such as cameras and other sensors, however they are usually willing to make a concession based on the value that the service is providing them. For this reason, Venu needs to make it clear to a user that any access to the microphone and accelerometer required, is done in a way that does not breach their privacy, and the features they enable must be of value to the users.

##### Critical Mass

In order for Venu to be a long term success it needs to achieve critical mass, otherwise the community will not last. Critical mass is key for a few key reasons:

1. Venu relies on a large number of users using its features in order for them to be practically beneficial as intended.

2. Without enough users using these features, users will not stay on the platform because it will not be worth their time or effort.

as such, there are a few design considerations that arise out of concern for critical mass.

###### Strategies to implement in lieu of Critical Mass

Buzz Rating: Features such as the _Buzz_ Rating will not be possible without a large number of users in each venue listed on the platform. Until these large numbers are sustained, it is worth trying to source this data from other sources.

One example which will be implemented is to calculate the popularity of each venue using sources other than location tracking on users' devices. It is possible to determine how frequently users are tagging themselves at a venue in the Instagram stories, posted publicly to the world. Taking advantge of this, Venu will have a back-end feature which scrapes public Instagram stories, determining popularity of venues based on how many people are tagging themselves there. This can continue indefinitely until Instagram changes the implementation of its Stories architecture, or until critical mass is reached.

###### Strategies to gain Critical Mass more effectively

Venue Accounts: A key determinant of the lifetime of a community is how strong the foundation of it is when it first begins. A stronger foundation is one where a number of users in the early community are sharing content frequently enough, which is valuable enough, for other users to justify remaining a part of that community. Standard patrons of the app will likely not be posting this high quality of content at the beginning of the platform, because its effectiveness is reduced with the lower amount of peer-users on the app.

There is another type of user which would be encouraged to post high-quality content from the start: the venues themselves. A proposal to encourage strong community foundations at launch, which will help lead to critical mass later on, is for Venues to be able to create their own type of user account, with more features available to it. Once verified, a venue account may share content which is attached to the reviews for that venue. This content may potentially be live announcements to the community, a few examples may be : "Happy hour begins at 5pm, and we have a special on Cider just for today, $7 for a jug!", or "Our resident DJ: DJ Plutonium, is going to be dropping his new mix at main bar between 11 and 12!!", or "Special Discount for Venu users: say the passphrase 'Buzz out of 10' at the bar for 1/2 price beer". These types of content will have a strong incentive behind them, because it will help venues attract patrons. They will also have the effect of providing valuable enough content to encourage early users to stay, even before enough community mass is sustained for the other key features of the app to be fully functional.

City Release Plans: In order to better focus efforts to gain a strong foothold of users at the beginning of the platform, it will be important to start with a specific city for first release, followed by more specific cities afterwards until there is a buzz around the platform, and word of mouth spreads. The key reasons for this strategy are as follows:

1. When launching the app for the first time, it helps to start with a specific city, because advertising can be tailored towards the specific nightlife culture of that city. With this more targeted advertising, it will be much easier to encourage enough users to join such that critical mass is achieved in that community. A starting city can also be targeted based on its unique characteristics, for example a city with a more confined nightlife precinct, which gets has Patrons per Venue than another city, would be easier to reach critical mass in. This strategy can be repeated for multiple cities in a row.

2. Once the platform has launched in a few cities, buzz should begin to build surrounding the app. This will help the platform spread faster in the new cities it launches in. An example of this effect in practise can be seen in Uber's launch in Brisbane. When Uber launched in Brisbane, it had already been successfully implemented in other cities around the world for years. The word of mouth from users who had used Uber in those cities, as well as media companies discussing its merits and history, helped Uber generate buzz organically, and encouraged more people to join to see what the fuss is about.

From these two key points it can be deduced that by focusing on critical mass in confined locations first, the buzz surrounding the platform will help it spread as it moves to other cities.

##### Incentives for users to leave reviews

The application needs to be designed in a way that incentivises users to leave the reviews and provide us the information required for the platform to function. There are two key design choices which have been determined to help place these incentives.

###### Limiting reviews

In order to encourage users to leave a steady stream of reviews, users will not have permanent free access to the reviews of venues left around them. Instead, users will be given one free pass per day, which allows them to view all of the venues around them for a certain timeframe. This is intended to allow the users to decide on the first destination to go to before they head out for the night. Once this free pass has been used, users will need to provide a review for the venue they are at, to be able to gain another pass which lasts the same timeframe as before. This should encourage users to leave a constant stream of reviews in a give-a-review get-a-review fashion.

###### Social Aspects

The feature which limits reviews for users will be more biased towards negative reviews. This is because these reviews will be the ones for which the venue isn't entertaining the user, hence them trying to access more reviews to decide on the next venue to go to. To reverse this bias, social features will be added to the platform. This has been determined to be a good feature because Instagram and Snapchat users tend to share their experiences online when they are having fun, because they want their friends to see that they're having fun. Although the exact method that users will be able to share their current activity on the platform with friends has not been determined, it will be done to encourage users to share how much fun they're having at the current venue.

##### Learned recommendations

Over a long period of time a user's preferences of atmosphere and _Buzz_ Rating characteristics should become clear. Once our platform is certain that a user tends to prefer a certain type of atmosphere, the application should be able to recommend that they look at a particular venue. This feature can be considered a stretch-goal as it is less critical than the other features of the application.

## 3.0 Team

Student Name | Student Number | Position              | Course Code
------------ | :------------: | :-------------------- | ----------:
Jake Wood    |    43710034    | Team Leader, Designer |    DECO3500
Luke Steyn   |    43170348    | Designer              |    DECO3500
Izhar Wahono |    44012566    | Designer              |    DECO3500
Hushend Iiu  |    44124245    | Software Developer    |    DECO3500
Wei Fu       |    43874909    | User Tester           |    DECO3500

### 3.1 Role Details

#### 3.1.1 Team Leader

The team leader is responsible for overseeing the project. This includes assigning tasks among the group members, checking progress of tasks, ensuring all group discussions and conflicts are handled appropriately and helping to organise group meetings.

#### 3.1.2 Designer

Designers of the group handle the aesthetic and user experience side of the application. They will tend to spend most of their time working on the visual layout and aspects of the application include front end design and build. Their primary tools will be programs such as Sketch, Framer & Balsamiq for different project phases. They will partner with the Software Developer to ensure visions and requirements for features are aligned, and with the User Tester to ensure that prototypes are adequately complete for the testing sessions in mind.

#### 3.1.3 Software Developer

The assigned software developer within the group will take the responsibility of ensuring that all decisions made about that project are feasible from a technical stand point. This means understanding the possible implementations of the application, and considering the time and difficulty of these implementation, as well as whether it would be theoretically possible to build. The software developer will response for back end build and assist front end build. The Software Developer will further be responsible for documenting how these features will be engineered, to go with the design documentation.

#### 3.1.4 User Testing Specialist

The User Testing Specialist will be assigned with the role of handling all user facing issues of the application. This will include arranging test sessions, inviting participants, overseeing all user testing deliverables, handling any sessions required to get user feedback, and collating and delivering the results from these sessions. The User Testing Specialist will work closely with other members of the group who may also be required to help facilitate testing.

### 3.2 Team Processes

#### 3.2.1 Decision Making

It is generally expected that the team will discuss all decisions and organically come to a conclusion. Where a team member strongly disagrees with an option they may make a motion to have a conflict resolution activity. This activity will involve everyone in the team taking a few minutes each to deliver their key concerns and reasons for their decision. After team members are happy that they have delivered their point, the team will take a democratic vote on which decision to go with.

#### 3.2.2 Poor Performance and Conflict Resolution

Where a team member feels that another member hasn't performed, they should privately discuss with the other team members or the team leader their concerns. If the members come to agreement, they may decide to communicate with the offending team member to let them know that their work is falling behind. If no suitable remedy can be determined then the team may elect to have a Peer Assessment Factor introduced, by democratic vote.

The team's conflict resolution strategies include:

#### 1\. Encourage team communication

In most cases, conflict occurs because of a lack of communication. If there is a conflict then the team should get every team member into a comfortable environment to communicate with one another and resolve the issue.

#### 2\. Seek a mediator

If the conflict couldn't be resolved within the team, then the team should call for aid from a tutor. This strategy will be used to resolve serious conflict including zero contribution, any kind of abuse, etc.

#### 3\. Democratic vote

Any design or development conflict that can be solved within the team will be resolved by democratic vote, but the vote will be conducted after a team discussion (engaging communication first).

## 4.0 Communications

The team will meet Tuesday every week between 12pm and 2pm, during the scheduled class workshop. During this time, team member's should raise any important developments they know of, or concerns they might have. The team may also elect to have secondary team meetings on Wednesdays between 2pm and 4pm, when all team members have proven to have free time. These secondary meetings will not happen by default, but only on specific weeks when the team feels it is necessary.

There are five team members, each of which will contribute at least 2 hours for discussing and planning the project development. It is crucial for the team to meet at the beginning of each week to discuss three main questions: 1\. How is the project progressing, measured against the development goals in the prior week. 2\. The development plan for the current week 3\. Have there been any recent difficulties? The benefit of this meeting is to identify "what went well", "what's holding us back, and how can we overcome it" and "how can we improve for the week ahead"

Attendance of team meetings is considered mandatory and important, except for when reasonable circumstances may arise. If the circumstances are not considered reasonable by the rest of the team then the Poor Performance and conflict resolution policies may be called upon.

### 4.1 Slack

Slack will be the group's core method of communication and will be where the majority of outside-meeting communication will occur. Slack will be used for more informal communication such as meeting arrangement and short correspondence, including small questions, reminders, and updates.

### 4.2 Email

Email will be used for all external-group and official course related communications. The _team leader_ will be responsible for this communication where possible, however other group members do have the ability to email outside of the group for project related reasons.

### 4.3 Google Drive (File storage & Sharing Method)

The team will use Google Drive to collaboratively work on tasks where it is seen as appropriate. They may also use Google Drive's commenting feature as a method to discuss specific points within documents that are being written. Google drive will be the group main method for storing and sharing files. Google Drive will primarily be used to create documents collaboratively, or to share media between each other. The team's Google Drive folder should not be used to store code and prototypes, because the Git Repository will serve this purpose better.

#### 4.3.1 Naming convention

The file naming conventions will be used to organise and identify the files.h e naming convention for every file (include code files) will follow this structure: reverseDate_FileName (example: 170901_Proposal would be appropriate for file named Proposal made on the 1st of September 2017).

### 4.4 Discord

Where team members may determine it is more effective to communicate via voice, in scenarios where team meetings aren't an option, they make use a discord channel to communicate. Examples of this circumstance may be to discuss the implementation of a new feature, where it would be too hard and time consuming to communicate via Slack. Any key decisions determined within these voice chats should be shared via the Slack channel.

## 5.0 Project Plan

### 5.1 Major Deliverables

Deliverable     |   Due Date
--------------- | ---------:
Oral Pitch      | 29-08-2017
Proposal        | 01-09-2017
Final Prototype | 24-10-2017
Final Proposal  | 27-10-2017

### 5.2 Project Phases

The following table is a detailed timeline of task completion, start and finish dates

Phases                | Milestone                  | Start Date | End Date
:-------------------- | :------------------------- | :--------- | :---------
Research              | Industry Research          | 04-09-2017 | 08-09-2017
/                     | Competitive Analysis       | 04-09-2017 | 08-09-2017
/                     | User Research              | 04-09-2017 | 08-09-2017
Requirement Gathering | Surveys                    | 11-09-2017 | 15-09-2017
/                     | Interviews                 | 11-09-2017 | 15-09-2017
Design                | Wireframes                 | 18-09-2017 | 29-09-2017
/                     | Style Guide                | 25-09-2017 | 27-09-2017
/                     | Low-Fidelity User Testing  | 27-09-2017 | 29-09-2017
Prototyping           | Framer Prototype           | 02-10-2017 | 23-10-2017
/                     | High-Fidelity User Testing | 17-10-2017 | 19-10-2017

### Phase 1: Research

To begin the project, before any development commences, there must be a series of research based tasks completed to begin to understand the projects domain. The benefits of good research will lead to an array of knowledge that will lend to creating a project that is both an exciting idea, along with having a real user based that requires the product. This research is not only limited to understanding the users, it also requires an in depth look into the industry and competitive landscape of the applications scope.

#### Milestone 1.1: Industry Research

The industry research is one of the preliminary research tasks in the first phase of the products implementation. In the early stages, a report must be completed on the industry that _Venu_ hopes to enter. This is about looking at the internal and external environment of the industry and searching for opportunities and threats that may potentially impact the development of the application.

#### Milestone 1.2: Competitive Analysis

The Competitive Analysis is an expansion on the Industry Analysis which looks at the current direct and indirect competitors for the industry _Venu_ hopes to enter. Direct competitors are those who are working within the exact industry as _Venu_, while indirect are those competitors of which are not working in the industry, but are a potential substitute for the application. The benefit of this analysis is looking at what strengths and weaknesses these organisations hold and trying to exploit and mitigate those.

#### Milestone 1.3: User Research

User research is a step undertaken to begin investigating the methods that users will use the application. During the user research it is essentially to look at the users behaviours, needs and motivations through various techniques that aim to observe and log their actions. This early user research will purely consist of basic gathering techniques to look at potential users of the application and what their needs are.

--------------------------------------------------------------------------------

### Phase 2: Requirements Gathering

The requirements are a set of all features of the application that have been discovered throughout the requirements gathering process. Requirements generally feature a name, description, priority and a user story/case attached. The requirements backlog should be heavily influenced by the research section of the project, however the following methods can also further assist in appropriate data collection.

#### Milestone 2.1: Surveys

The first step in understanding the users needs is through the use of surveys. The surveys can be both online and street surveys that look to question both the users and potential venues who would utilise the application. These surveys would allow the development team to understand what exactly features these users do and don't need, how they prioritise these features and what would convince their adoption. Some questions that could be covered would be; What are the users expectations? How can we satisfy the users? Does the user have a problem in this space?

#### Milestone 2.2: Interviews

Interviews are a similar, but more personal method of collecting data from users than surveys. Interviews are about getting to the users, whether that be on the street or online and discussing the application with them and receiving feedback. These types of interviews can be both formal or informal and can be a source of invaluable, unbiased information on the application potential effectiveness.

--------------------------------------------------------------------------------

### Phase 3: Design

The design phase is about transferring the established requirements and user stories into a visual representation. This will be through a combination of sketches, paper prototypes and wireframes to begin ideating the possible arrangement of the application. The final product of this phase with be a set of low-fidelity designs that will be able to be logically translated into high-fidelity prototype.

#### Milestone 3.1: Wireframes

Wireframes are a low-fidelity, generalised version of the applications layout. They are created to test out of the functionality behaviour and priority of elements within the application. The goals of creating these prototypes is to allow for quick design iteration, as opposed to make similar changes to a high-fidelity prototype, which would be time expensive. These phase should produce the following elements:

1. User Experience Flow Chart
2. Finalised wireframe page layouts
3. System Architecture

#### Milestone 3.2: Style Guide

The projects style guide will be a formatted document that outlines the choices of colour, structure and typography to be used within the project. The benefits of creating a style guide is that it can be used alongside the wireframes to help automate the prototype creation process at the high-fidelity stages.

#### Milestone 3.3: Low Fidelity User Testing

After the sketching and wireframe stage, the next step is define the main product usability guidelines. This stage is helpful for the team to detect problems encountered in the early design process, which include the products functional layout, navigation and overall usefulness. In the first user testing procedure, the testing process will be divided into 5 steps.

1. The user test will begin with a consent form for both the user and the tester to sign (0-5 mins)
2. We will provide a pre-test interview for users to understand about what the application is, how the test will run and how long the test will take (0-5 mins)
3. The test task form will be prepared before the test, and the form will be provided for users to have a clear process and to assist them with completing the task. (5-10 mins)
4. After the test, user needs to complete a post-test questionnaire form to provide their suggestions about the application (0-5 mins)
5. At the conclusion of the test it is crucial for a debrief to be performed within the development team to evaluate and analyse the task and questionnaire form to improve the user experience and create resulting action items

##### Participants

Around 6-8 users will be recruited for the usability test. Each of these user needs to take 15 mins to complete the entire test. The aim is to invite university students as our main users, as their activity and routine meet the goals of the product.

##### Location & Dates

The first user testing location will be conducted at Room 109, Building 78, University of Queensland.

##### Tools

- Surveys and questionnaires with be created with either Typeform for digital versions or Google Drive to create printable copies
- Wireframes will be created with Balsamiq

--------------------------------------------------------------------------------

### Phase 4: Prototyping

At the final stage of the development, all of the phases should be come together to create a working high-fidelity prototype through Framer. This prototype will hold no business logic code, but will be a strong glimpse into the full functionality of the application and allow the users to perform highly accurate tasks through testing. The hi-fi design will be a reflection of iteration undertaken throughout the wireframing phase and hold the visual properties outlined in the style guide. It is also worth noting, that the prototype will be an accurate representation of the perceived MVP of the project.

#### Milestone 4.1: Framer Prototype

The main tool chosen for developing the high-fidelity mockup is Framer. Framer is an application used for building hi-fi prototypes which provide intuitive visual simplicity and specified approaches for designers. It utilises CoffeeScript to create highly accurate user interface and interaction design.

#### Milestone 4.2: High Fidelity User Testing

In order to achieve the user experience goals through the high-fidelity prototype, we formed a outline to test the user experience when users interact with the product.

1. The user test will begin with a consent form for both the user and the tester to sign (0-5 mins)
2. We will provide a pre-test interview for users to understand about what the application is, how the test will run and how long the test will take (0-5 mins)
3. The test task form will be prepared before the test, and the form will be provided for users to have a clear process and to assist them with completing the task. (5-10 mins)
4. After the test, user needs to complete a post-test questionnaire form to provide their suggestions about the application (0-5 mins)
5. At the conclusion of the test it is crucial for a debrief to be performed within the development team to evaluate and analyse the task and questionnaire form to improve the user experience and create resulting action items

##### Participants

Around 6-8 users will be recruited for the usability test. Each of these user needs to take 15 mins to complete the entire test. The aim is to invite university students as our main users, as their activity and routine meet the goals of the product.

--------------------------------------------------------------------------------

## 6.0 Resources

- Framer
- Balsamiq
- iPhone
- GitHub & SourceTree
- Sketch
- Draw.io

## 7.0 References

Daphne Raban, Mihai Moldovan, Quentin Jones (2010): An empirical study of critical mass and online community survival. In: CSCW '10 Proceedings of the 2010 ACM conference on Computer supported cooperative work, February 06 - 10, 2010, Savannah, Georgia, USA. <http://dx.doi.org/10.1145/1718918.1718932>

Martini, M., Smith, M., & Youmans, R. (2014). A Comparison of Prototyping on Paper (POP) Software and Traditional Paper Prototyping for Developing Mobile Products with Optimal User Experience. Proceedings Of The Human Factors And Ergonomics Society Annual Meeting, 58(1), 1849-1853\. <http://dx.doi.org/10.1177/1541931214581387>

User Research Basics | Usability.gov. (2017). Usability.gov. Retrieved 1 September 2017\. <https://www.usability.gov/what-and-why/user-research.html>

M. B. Catani and D. W. Biers, "Usability evaluation and prototype fidelity: Users and usability professionals," Proceedings of the Human Factors and Ergonomics Society Annual Meeting, vol. 42, no. 19, pp. 1331–1335, Oct. 1998.
