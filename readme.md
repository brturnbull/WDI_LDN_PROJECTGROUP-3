# WDI Project 3: Moodify

---

### Overview
For this project we were put into teams and given the task to design and collaboratively build a MEAN stack app of our own design. Our response to that brief was Moodify. The idea behind this was that a user could take a photo of themselves through the app, which would then use facial recognition to detect their mood and return a Spotify playlist suited to their current state.

### Created By
* Bridget Turnbull
* Elliot Yandzio
* Filippos Antoniadis

### Timeframe
* 7 days

### Technologies used

* Angular
* Javascript (ECMAScript6) + jQuery
* Node.js
* SCSS
* Bulma
* GitHub
* bcrypt
* mongoose
* filestack-js
* Heroku
* Trello
* Balsamiq
* Yarn
* Chai
* Mocha

---

### Process
After receiving the brief and being split into our groups, the team sat down to start brainstorming. As is the norm, we struggled for the first little while to come up with something that really resonated with us. We were after something really unique and challenging, and Moodify was perfect for that. Dabbling with multiple API's wasn't something we had worked with before so we knew we had our work cut out for us and planning imperative. We prioritised functionality of the app and decided that the styling would come with polishing in the final few days of the project.

Once we decided on what our MVP needed to be, we started with some rough wireframes to flesh out our idea and get a better idea of how to split up the work. This was really important because we wanted to ensure there was an even share across the team. We started with building out all of the basic routes and setting up the front and back end of the app before tackling the Spotify aspects first. Tackling the OAuth and the playlists with the Spotify proved a challenge but one that we were able to tackle. We then had to implement the facial recognition API, Face++ which needed to speak to Spotify to return the appropriate playlists, and finally use FileStack to allow users to upload their photos. As we were all working on different parts we all decided that clear comments through our code was of utmost importance in case we needed to fix bugs or work with each others controllers etc.

Once we had our MVP we were then able to focus on polishing the app, writing automated tests and work on the styling. We decided as a team that sleek and simple was the best route to take and took inspiration from the Spotify player itself so the playlist iframe would blend seamlessly. It also meant we had time to write automated tests for the code.

---

### Challenges

Our biggest blocker was with FileStack. After we had the Spotify and Face ++ API's talking to each other, we thought that the photo upload would be a simple step to tying everything together. What we found very quickly, however, was that using the webcam in this instance was not compatible with chrome. This was essential for the apps functionality so this it was something we had to work around. In the end we had to access and alter the source code to allow access to the camera.

### Wins

We knew we had set the bar high using multiple resources for our project so the biggest win was that we were able to get to MVP without having to compromise on the functionality or quality of the app. On top of that we managed to get to that point ahead of time allowing us to work on the styling and automated testing.

---

## Future features

If we had more time we would like to have added more personalisation to the plan a date feature so that users could be shown different types of locations. We would have also liked to add log in with Facebook and email notifications.
