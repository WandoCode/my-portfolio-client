# Portfolio - Maxime Chirez

This repository contains the code for the frontend of my personal portfolio.

## Hightlighted skills in this project

- Use of NextJS (and NextJS API)
- Use of Redux
- Implementation of controlled/non-controlled components
- Unit test
- Use of intersectionObserver API for animations

## Main features

### Automatic emails

The contact form automatically is processed to send confirmation emails and avoid spam.
I used NextJS API to create an endpoint that send the emails with NodeMailer.

### User preferences

- Dark/light theme
- Multilingual management

The user preferences are saved in localStorage

### Accessibility/performance

- Fully responsive
- Accessible
- Optimized (for Lighthouse)

# How to install

## Prerequisities

This project use:

- NodeJs v16.14
- Typescript v4.6.3

## Setup

- Fork the project
- Run `npm install`
- Add .env file with environement variables

# Dependencies

This project use:

- Vite
- Vitest
- Testing-library
- NextJS
- React
- Redux
- React-query
- Nodemailer

# Script

## `dev`

Launch the development server with live refresh.

## `build`

Build the app with Vite

## `test`

Launch tests with Vitest.

## `preview`

Host the last built version of the app with Vite.

# License

This website has been build for demonstration purpose only.

All the content is published under the MIT licence (see ['/licence.txt'](https://github.com/WandoCode/my-portfolio-client/blob/main/licence.txt))
