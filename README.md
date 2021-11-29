# TrackIt - Frontend

## About this Project

This project was developed as part of the Driven Web Full-Stack Bootcamp, a 6-month bootcamp where I started my journey as a web developer.

It serves as the front-end for TrackIt -> the back-end of this project can be found [here](https://github.com/CarlosEFPaiva/TrackIt_Backend). The backend is still under development, though.

TrackIt is an app for helping users to keep track of their habits, both to encourage creating new habits and to help keeping old ones. Its layout was developed exclusive for mobile applications.

The code for this project was developed in English, but it's interface is currently in Portuguese.

## Functionalities

- Create your own login, using the registration screen. It will save your information in a database and allow you to login wherever you want.

- Sign in using your email and password, and a homescreen will show your profile picture and your habits for the current day, allowing you to check which habits you have already done.

- The bottom bar allows you to navigate to the Habits screen, where you can check every habit you have created, the weekdays on which you should complete the task related to your habit. You can also create a new habit, setting its description and weekdays.

- The history Screen shows a calendar with clickable dates, green ones being the days when the user has completed every task for the day, and red being the ones where at least one task was left behind. It helps keeping track with habits on a longer term!

- At any desired moment, user might log out of the app using the button on the top bar.

## Getting Started

### Prerequisites

To run this project in the development mode, you'll need to have a basic environment to run a React App.

- Vercel Deploy: This project can be fully experienced by its Vercel deploy, clicking [here](https://projeto10-track-it-sage.vercel.app/).

- Run it locally: As long as the backend is under development, the app uses an API given by the Driven group. For that reason, the app can be used without the need of combining it to another backend repository. This will change in a nearby future, though.

### Running

The following scripts are set for better using of the app:

- start -> Will start the app and communicate with the API given by the Driven group.

- build -> command to make a build version of the project.

- eject -> command to eject a running version of the project.

## Built With

- [React](https://reactjs.org/) - Web Framework for javascript
- [ESlint](https://eslint.org/) - Linter
- [Axios](https://www.npmjs.com/package/axios) - Promise bases HTTP client
- [Styled Components](https://www.npmjs.com/package/styled-components) - Creates easily manipulated components for React
- [React Icons](https://www.npmjs.com/package/react-icons) - Access to a variety of icons to be easily implemented
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - Package for setting routes and the communication between them.
- [Sweet Alert 2](https://www.npmjs.com/package/sweetalert2) - Easily creates customizable responses, alerts and pop-ups for browser.
- [dayJs](https://www.npmjs.com/package/dayjs) - Package for manipulating dates.
- [react-calendar](https://www.npmjs.com/package/react-calendar) - Package for customizable calendar
- [react-circular-progressbar](https://www.npmjs.com/package/react-circular-progressbar) - Circular progress indicator component.
