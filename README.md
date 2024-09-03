# Tic-tac-toe app

This project is a simple implementation of the game tic-tac-toe

Demo: https://globusoffzeworld.github.io/tic-tac-toe/

## Code structure:

A simple architecture was chosen with division into components, each of which is responsible for its own small part and is located in a separate folder along with a file for styles, inside components, everything is collected together in the App component, the utils folder is responsible for additional functionality not related to design

## Libraries & tools:

- React (As stated in the task) 
- Typescript (In my opinion, is a must to avoid many mistakes and misunderstandings during development, convenience during writing in the form of code hints)
- Scss (Balance in customization and ease of development, for such a small project it is ideal, for larger projects I would probably choose libraries like ChakraUI/Antd/material)
- Vite (A fast and modern way to create and build a project, perfect for creating a regular one-page application)
- Eslint (Automatically fix linter errors as you write code)
- Prettier (Showing errors in code style so that the entire project can adhere to the same concepts)


## Design decisions:

Added function calculateWinner to get winner id, there are many ways to store and process selected fields, one of them was chosen as the most convenient for quickly writing a small project

## How to start project:

```bash
git clone https://github.com/GlobusOffZeWorld/tic-tac-toe.git
cd tic-tac-toe
npm install
```
