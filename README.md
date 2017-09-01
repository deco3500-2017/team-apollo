# Project Proposal: Venu

DECO3500: Social & Human Computing

Team Name: Team Apollo

## 1.0 Introduction

_Venu_ is a project that intends to improve the quality of the community's nights when they go out to venues in their local city. Today there is currently no way of making an informed decision as to what locale or venue have the best atmosphere at the time people choose to go out. The best people can do currently is to choose from their favourite venues, or source information from friends or social media outlets on any given night out. By utilizing social and mobile technology in conjunction, _Venu_ will help people make a more informed decision before they out for the night.

## 2.0 Concept

The core concept of the service is to allow users access to a map that will give ratings of venues in real-time. The ratings will be based on two key metrics: _Buzz_ and _Vibe_. A Venue's _Buzz_ will have three qualities that are displayed to a user, determined by passively gathering data about that venue in real time. These three qualities will be Popularity, Movement, and Sound. Popularity will be determined based on how many users are at the venue at once, Movement will be determined by measurements of user's device accelerometers, and Sound will be determined based on the decibel reading of user's microphones. _Vibe_ will be manually input by our users, where they will have the ability to input atmosphere specific icons or phrases such as 'Loud', 'Social', 'Relaxed' etc..

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
- Paul has been going to parties and nightclubs frequently since he turned 18

**Goals:**

- Paul wants to experience new things and make great memories with his friends while he is young.
- Paul and his friends specifically love going to nightclubs which have a DJ who is really getting the crowd going.

**Frustrations:**

- Paul finds that his nights out can be hit-and-miss.
- Paul hates spending $20 on the entry-fee for a night club if it isn't fun inside.
- Paul doesn't like sending messages out to all the people he knows to see if they're at a good club.

#### 2.1.2 User Persona : Miranda

**Age:** 27

**Location:** 1770, Queensland

**Education:** 1770 State High School

**Occupation:** Miranda is a Real Estate Agent, specialising in rental property management in 1770.

**Personality & History:**

- Miranda likes to meet new people.
- Miranda comes from a creative background, she used to be in a jazz band.
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

1. Privacy within their social network:

The product is going to have a social aspect to it to encourage users to share their good experiences and reviews. It is known that users of social media networks are comfortable doing this, however there is a line when they feel that sharing this information gives away too much information. An example of this is that users of Snapchat are generally comfortable sharing photos or videos of themselves in a clearly defined location at a clearly defined time, however a lot of users had a problem with Snapchat's SnapMaps feature, feeling that it gave away too much information by sharing their location in real-time. From these two observations it can be deduced that there is a certain cut-off point where a user feels uncomfortable sharing their location with too high of a resolution. Therefore the Venu application should be mindful of this when providing features which may potentially give away a user's location when used.

1. The service breaching the user's privacy:

Users of online services consider their privacy important. It is clearly documented that users dislike giving access to their devices peripherals, such as cameras and other sensors, however they are usually willing to make a concession based on the value that the service is providing them. For this reason, Venu needs to make it clear to a user that any access to the microphone and accelerometer required is done in a way that does not possibly breach their privacy, and the features they enable must be of value to the users.

##### Critical Mass

In order for Venu to be a long term success it needs to achieve critical mass, otherwise the community will not last. Critical mass is key for a few key reasons:

1. Venu relies on a large number of users using its features in order for them to be practically beneficial as intended.

2. Without enough users using these features, users will not stay on the platform because it will not be worth their time or effort.

as such, there are a few design considerations that arise out of concern for critical mass.

###### Strategies to implement in lieu of Critical Mass

_Buzz Rating_

Features such as the Buzz Rating will not be possible without a large number of users in each venue listed on the platform. Until these large numbers are sustained, it is worth trying to source this data from other sources.

One example which will be implemented is to calculate the popularity of each venue outside of location tracking on users' phones. It is possible to determine how frequently users are tagging themselves at a venue in the Instagram stories, posted publicly to the world. Taking advantge of this, Venu will have a back end feature which scrapes public Instagram stories, determining popularity of venues based on how many people are tagging themselves there. This can continue indefinitely until Instagram changes the implementation of its Stories architecture, or until critical mass is reached.

###### Strategies to gain Critical Mass more effectively

**_~A new feature proposition by Luke.. Give it a read!~_**

_Venue Accounts_

A key determinant of the lifetime of a community is how strong the foundation of it is when it first begins. A stronger foundation is one where a number of users in the early community are sharing content frequently enough, which is valuable enough, for other users to justify remaining a part of that community. Standard patrons of the app will likely not be posting this high quality of content at the beginning of the platform, because its effectiveness is reduced with the lower amount of peer-users on the app.

There is another type of user which would be encouraged to post high-quality content from the start: the venues themselves. A proposal to encourage strong foundations leading to critical mass is for Venues to be able to create their own type of user account with different permissions. Once verified, a venue account may share content which is visible only within the confines of its space within the app. This content may potentially be live announcements to the community, a few examples may be : "Happy hour begins at 5pm, and we have a special on Cider just for today, $7 for a jug!", or "Our resident DJ: DJ Plutonium, is going to be dropping his new mix at main bar between 11 and 12!!", or "Special Discount for Venu users: say the passphrase 'Buzz out of 10' at the bar for 1/2 price beer". These types of content will have a strong incentive behind them, because it will help venues attract patrons. They will also have the effect of providing valuable enough content to encourage early users to stay, even before enough mass is sustained for the other key features of the app to be fully functional.

_City Release Plans_

In order to better focus efforts to gain a strong foothold of users at the beginning of the platform, it will be important to start with a specific city for first release, followed by more specific cities afterwards until there is a buzz around the platform, and word of mouth spreads. The key reasons for this strategy are as follows:

1. When launching the app for the first time, it helps to start with a specific city, because advertising can be tailored towards the specific nightlife culture of that city. With this more targeted advertising, it will be much easier to encourage enough users to join such that critical mass is achieved in that community. A starting city can also be targeted based on its unique characteristics, for example a city with a more confined nightlife precinct, which gets has Patrons per Venue than another city, would be easier to reach critical mass in. This strategy can be repeated for multiple cities in a row.

2. Once the platform has launched in a few cities, buzz should begin to build surrounding the app. This will help the platform spread faster in the new cities it launches in. An example of this effect in practise can be seen in Uber's launch in Brisbane. When Uber launched in Brisbane, it had already been successfully implemented in other cities around the world for years. The word of mouth from users who had used Uber in those cities, as well as media companies discussing its merits and history, helped Uber generate buzz organically, and encouraged more people to join to see what the fuss is about.

From these two key points it can be deduced that by focusing on critical mass in confined locations first, the buzz surrounding the platform will help it spread as it moves to other cities.

## 3.0 Team

( Who is on your team, what are their responsibilities, and how will you work together? List all the members and their course code. Identify: )

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

The User Testing Specialist will be assigned with the role of handling all user facing issues of the application. This will include arrange test sessions, invite participant, and overseeing all user testing deliverables, handling any sessions required to get user feedback and collating and delivering the results from these sessions. The User Testing Specialist will work closely with other members of the group who may also be required to help facilitate testing.

### 3.2 Team Processes

#### 3.2.1 Decision Making

It is generally expected that the team will discuss all decisions and organically come to a conclusion. Where a team member strongly disagrees with an option they may make a motion to have a conflict resolution activity. This activity will involve everyone in the team taking a few minutes each to deliver their key concerns and reasons for their decision. After team members are happy that they have delivered their point, the team will take a democratic vote on which decision to go with.

#### 3.2.2 Poor Performance and Conflict Resolution

Where a team member feels that another member hasn't performed, they should privately discuss with the other team members or the team leader their concerns. If the member's come to agreement, they may decide to communicate with the offending team member to let them know that their work is falling behind. If no suitable remedy can be determined then the team may elect to have a Peer Assessment Factor introduced, by democratic vote.

## 4.0 Communications

The team will meet Tuesday every week between 12pm and 2pm, during the scheduled class workshop. During this time, team member's should raise any important developments they know of, or concerns they might have. The team may also elect to have secondary team meetings on Wednesdays between 2pm and 4pm, when all team members have proven to have free time, if it is deemed necessary. These secondary meetings will not happen by default, but only on specific weeks when the team feels it is necessary.

There are five team members, each of us will contribute at least 2 hours for discussing and planning the project development. It is crucial for us to meet at the beginning of each week to discuss three main questions: 1\. How does the project progress going toward the project development goals last week. 2\. What we plan for improving and developing the project this week. 3\. Have we met any difficulties from last week? At the meeting the team leader aims to help each other to define the current process of project. The benefit of this meeting is to identify about "what's went well", "what stop us to continue" and "how we improve for next step."

Attendance of team meetings is considered mandatory and important, except for when reasonable circumstances may arise. If the circumstances are not considered reasonable by the rest of the team then the Poor Performance and conflict resolution policies may be called upon.

### 4.1 Slack

Slack will be the groups core method of communication and will be where the majority of outside-meeting communication will occur. Slack will be used for more informal communication such as meeting arrangement and short correspondence, including small questions, reminders, and updates.

### 4.2 Email

Email will be used for all external-group and official course related communications. The _team leader_ will be responsible for this communication where possible, however other group members do have the ability to email outside of the group for project related reasons.

### 4.3 Google Drive (File storage & sharing Method)

The team will use Google Drive to collaboratively work on tasks where it is seen as appropriate. They may also use Google Drive's commenting feature as a method to discuss specific points within documents that are being written. Google drive will be the group main method for storing and sharing files. Google Drive will primarily be used to create documents collaboratively, or to share media between each other. The team's Google Drive folder should not be used to store code and prototypes, because the Git Repository will serve this purpose better.

#### 4.3.1 Naming convention

The file naming convention will be used for organise and identify the files, the naming convention for every files (include code files) will follow this structure: Time**FileName**PersonName__Version Number. The files with a naming convention provide a preview of the content, are organized in a logical way identify the responsible party and convey the work history

### 4.4 Conflict resolution strategies

Where team members may determine it is more effective to communicate via voice, in scenarios where team meetings aren't an option, they make use a discord channel to communicate. Examples of this circumstance may be to discuss the implementation of a new feature, where it would be too hard and time consuming to communicate via Slack. Any key decisions determined within these voice chats should be shared via the Slack channel.

In conclusion, the team conflict resolution strategies include:

#### 1\. Encourage team communication

In most case, conflict occurs because of lack of communication, if conflict there is a conflict, then get every team member into a comfortable environment to communicate with one another and resolve the issue,

#### 2\. Seek a mediator

If the conflict couldn't be resolved within the team, then calling for aid from the teaching group (tutor/ lecturer), this strategy will be used to resolve serious conflict include zero contribution, any kind of abuse, etc.

#### 3\. Democratic vote

Any design or development conflict that can be solved within the team will be resolved by democratic vote, but the vote will be conducted after team discussion (engaging communication first).

## 5.0 Project Plan

### 5.1 Major Deliverables

Deliverable                  |   Due Date
---------------------------- | ---------:
Oral Pitch                   | 29-08-2017
Proposal                     | 01-09-2017
Low-Fidelity Prototypes      | 12-09-2017
Clear Plans for User Testing | 03-10-2017
Interactive Prototype        | 17-10-2017
Final Prototype              | 25-10-2017
Final Proposal               | 27-10-2017

### 5.2 Project Phases

The following table is a detailed timeline of task completion, start and finish dates;

Phases                    | Milestone                  | Start Date |   End Date
------------------------- | :------------------------- | :--------: | ---------:
**Research**              | Industry Research          | 02-09-2017 | 15-09-2017
                          | Competitive Analysis       | 02-09-2017 | 10-09-2017
                          | User Research              | 08-09-2017 | 30-09-2017
**Requirement Gathering** | Surveys                    | 10-09-2017 | 30-09-2017
                          | Usability Testing          | 12-09-2017 | 15-09-2017
                          | Interview                  | 12-09-2017 | 15-09-2017
**Design**                | Develop Wireframes         | 11-09-2017 | 15-09-2017
                          | Low-Fidelity User Testing  | 15-09-2017 | 03-10-2017
**Prototyping**           | Develop Framer Prototype   | 03-10-2017 | 17-10-2017
                          | High-Fidelity User Testing | 17-10-2017 | 20-10-2017

--------------------------------------------------------------------------------

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

#### Milestone 2.2: Interview

Interviews are a similar, but more personal method of collecting data from users than surveys. Interviews are about getting to the users, whether that be on the street or online and discussing the application with them and receiving feedback. These types of interviews can be both formal or informal and can be a source of invaluable, unbiased information on the application potential effectiveness.

--------------------------------------------------------------------------------

### Phase 3: Design

During this phase, we will be creating wireframes that will helps us to arrange the element to accomplish a particular purpose. In addition, this wireframe will also be used for user testing.

#### Milestone 3.1: Wireframes

The wireframes will be focused on the functionality, behavior, and priority of content. In other words, it focuses on what the screen does not how it looks.wireframes is a good way which allow us to clear understand the product without objection and help us to visualize the final product. Through sketches, presente the application interactions interface and layouts on papar to reach a consensus in our team.

it's including: 1.Product flow chart / UI flow;

1. All product page-layouts and mockups 3.site map

At this stage, it is important to find out: 1.application design style exploration. 2\. An overall visual design of key page 3\. Key interaction perfomance.

After design the wireframes, we needs to collect data about: 1\. To verify the product functionality. 2\. The more controversial part of the design process(product interaction,vision). 3.Problems encountered in the design process and solutions(which interactive method is easy for user to accept).

#### Milestone 3.2: Low Fidelity User Testing

After sketching and wireframe stage, the next step is define the main product UI guideline. The main color of the low fidelity prototype should be grayscale instead of use colours, which can help us to observe how does user understand the product and wiped off the distraction of color. This stage is helpful for the team to detect problems encountered in the first early design process, which including the product visual performance, text messaging, control and usage of the overall user experience.

In the first user testing procedure, the testing process will be divided into 5 steps.

1. The user test will begin with a consent form for both the user and the tester to sign. (0-5 mins)
2. We will provide a pre-test interview for user to understand about what the purpose of our project and how long the test will take. (0-5mins)
3. The test task form will be prepared before the test, and the form will be provided for user to have a clearly follow list and help them to complete all the task. (5-10mins)
4. After the user test, user needs to complete a post-test questionnaire form to provide their suggestion about the improvement of initial prototype.(0-5mins)
5. In the end, it is crucial for us to have a debrief time to evaluate and analysis the task form and the questionnaire form to improve the user experience.

##### Participants

Around six or eight users will be recruited in the test plan. Each of them needs to take around 15 mins to complete the whole test tasks. We aim to invite university students as our main user as their activity and routine meet the goals of the product.

item     |       Iteration 1
-------- | :----------------------:
Date     | (15/09/2017- 03/10/2017) |
Number   |   3 = Female 3 = Male    |
User     |       Novice User        |
Duration |         19 days          |
Age      |         18 - 30          |

##### Location & Dates

The first user testing location will be conducted at Room 109, building 78, Queensland of university at SEP 20.

##### Tools

Good Drive will be the main tool for us to generate the questionnaire form which is convenient for user to fill. Based on the first digital prototype is an application, the main equipment for the user testing is the mobile phone.

Axure will be the main digital mockup tools for the low-fi prototype, which is easy and efficient to generate preliminary product model.

--------------------------------------------------------------------------------

### Phase 4: Prototyping

At the final stage of prototype development, we need to evaluate the data from the Low-FI prototype user testing and draw conclusion about the usability of the product and whether we achieve the user experience goal. A Hi-Fi prototype will be developed once we get enough raw data from the test, which can simulate the final visual effects, interatie effects and user experience. The high fidelity prototype is also the Minimum viable product(MVP Product) which not only allows team members better understand the product but also improve the user experience of the target audience.

Before the high-fidelity prototype design phase, we need to define and analysis data from the low-fidelity prototype design phase as below: 1: Overview: the main user experience tool 2: Product description: use one sentence to descript the product positioning and the product core function. 3: Observe product user experience: discover the obvious flaws of product design from the low-fi user testing, which including: functionality design, interaction design, visual design and service flow design. We should give the optimization proposal and suggestion as the next phase strategy. 4: User requirements analysis: User suggestion analysis, User needs and user psychology analysis.

#### Milestone 4.1: Framer Prototype

The main tool we choose for developing the high-fidelity mockup is Framer. Framer is an application used for building hi-fi prototype which provide intuitive visual simplicity and specified approach for designers. It is use CoffeeScript, so that our team could use simple language like Version which can be compiled in Javascript.

#### Milestone 4.2: High Fidelity User Testing

preparation for High Fidelity user testing:

In order to achieve the UX goals through build Hi-Fi prototype, we formed a frame as our strategy to test the user experience when they interact with the product.

1. Functional analysis: we need to define the operating steps for user.
2. Structure layer: the whole framework of the application should be shown clearly, and the relationship between each core interactive modules should be clearly identified.
3. Frame layer: the design should be have a logical conception and be well planned, which including the navigation design, information design, interface design and interactive performance design.

Tasks during the High fidelity user testing:

1. Introduction of the product
2. Sign the user test agreement form
3. Show the user test tasks list to user and guide them
4. Recode or video the user test process
5. Answer the questionnaire once the the test finished
6. Give thanks and appreciation for users after user testing.

After user testing: Summarize user experience, refine user suggestions and report the result with clear user needs, clear further goals,conclusions and analysis.

##### Participants

item     |      Iteration 1
-------- | :-------------------:
Date     | 17/10/2017-20/10/2017
Number   |  1 = Female 2 = Male
User     |      Expert User
Duration |  Duration = 15 days
Age      |        18 - 30

--------------------------------------------------------------------------------

## 6.0 Resources

- Computers with Framer software for prototype development
- Balsamiq for Low Fidelity Prototype development
- A smartphone which supports the Framer app, so that the prototype may be loaded onto it for testing purposes.

## 7.0 References

<https://www.usability.gov/what-and-why/user-research.html>
