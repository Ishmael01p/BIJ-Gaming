# BIJ-Gaming  
###  Boluwatife Adeshina, Jayden Lim, Ishmael Percy
Goal: The objective of this project is to collaboratively design, build, and deploy a dynamic website featuring some of the world’s most popular games. Through this project, our team aims to strengthen our full-stack development skills by implementing a variety of modern web technologies across both frontend and backend. Additionally, we seek to gain practical experience in project planning, version control, and agile teamwork within a real-world development environment. This website will serve as both a portfolio piece and a learning opportunity, showcasing our ability to create engaging, interactive web applications from concept to deployment.
## Running React development server: 
    Run the followiing commands in terminal:
        - "cd gaming-app" # if needed
        - "npm install"
        - "npm run dev" 
## Main Branch
- Currently just the React gaming-app
    - src/main.jsx contains just routing information utilizing the createBrowserRouter library
    - src/pages/HomePage.jsx - empty 
    - src/pages/GamesPage.jsx - empty
    - src/pages/ErrorPage.jsx - currently handles user made routing errors and routing back to HomePage.jsx
## HP branch
- The Goal of this branch is developing the HomePage
- Potential using a simple game like tic-tac-toe in order to design the UI
## React + Vite
### Documentation - Recommend glancing over foundations links 
- React Documentation: https://react.dev/
    -  React Foundations: https://nextjs.org/learn/react-foundations 
- Vite Documentation: https://vite.dev/guide/
    - Using Vite for faster recompile time
- React Router Doumentation: https://reactrouter.com/en/main/start/overview
## Understanding React
### React Component
- Components are resuable UI elements for your app.
- In a React app, every piece of UI is a component.
- React components are regular JS functions execpt:
    - Their names always begin with a capital letter.
    - They return JSX markup.
- Common practice to have a 1-to-1 relationship between file and React Components where the file name corresponds to the component name.

  ```JSX
      function Car() {
          return <h2>Hi, I am a Car!</h2>;
        }

        export default Car;
  ```
     
### JS vs JSX 
- JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It introduces XML-like tags and attributes to create React elements. JS, on the other hand, is plain JavaScript code without any special syntax or extensions.
- Vanilla JS Component:
  
  ```JavaScript
  import React from 'react';

    function Greeting(props) {
      return React.createElement('h1', null, 'Hello, ' + props.name);
    }
  
    export default Greeting;
- JSX Component:

   ```JSX
      import React from 'react';
      
      function Greeting(props) {
          return <h1>Hello, {props.name}</h1>;
        }
       export default Greeting;
     ```JSX

## Future Goals
### Potential Games List 
- Difficulty by ability to complete
- Easy:
    - Tic-Tac-Toe
    - Rock Paper Scissors
    - 2048
    - Matching Games
    - HangMan
    - MineSweeper
- Medium / Hard
    - 3D games
    - Real-Time Multiplayer Games
   
