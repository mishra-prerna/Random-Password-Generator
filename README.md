# Random Password Generator

This is a Node.js web application for generating secure random passwords. It uses Express for routing and EJS as the template engine to render dynamic web pages. Users can generate passwords with customizable lengths and view them on a result page.

## Features

- Generate secure random passwords. <br>

- Customizable password length (8-64 characters). <br>

- User-friendly web interface with input validation. <br>

- Dynamic EJS templates for rendering pages. <br>

- Error handling for invalid inputs. <br>

## Dependencies

- Express: For building the web server. <br>

- EJS: Template engine for rendering dynamic views. <br>

- Crypto: Node.js module for generating secure random values. <br>

- Nodemon (optional): Automatically restarts the server during development. <br>

## Screenshots

<p align="center">
  <img src="assets/Screenshot%202025-02-14%20123334.png" alt="Output Image 1" width="300" height="300" >
  <img src="assets/Screenshot%202025-02-14%20123348.png" alt="Output Image 2" width="300" height="300" >
</p>
<p align="center">
  <img src="assets/Screenshot%202025-02-14%20123355.png" alt="Output Image 3" width="300" height="300" >
   <img src="assets/Screenshot%202025-02-14%20123408.png" alt="Output Image 3" width="300" height="300" >
</p>


## Future Enhancement

- Advanced Password Customization: <br>

  - Allow users to include or exclude specific character sets (uppercase, lowercase, numbers, special characters). <br>
  - Provide an option to avoid similar characters like O and 0, l and 1 for better readability. <br>

- Password Strength Indicator: <br>

  - Add a visual indicator (e.g., weak, moderate, strong) based on password length and character diversity. <br>
  - Use color-coded feedback (e.g., red for weak, green for strong). <br>

- Password History:<br>

  - Maintain a session-based history of generated passwords. <br>
  - Allow users to view or copy previously generated passwords.<br>