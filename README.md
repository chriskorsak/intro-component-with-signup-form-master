# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Acceptance Criteria:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_
- Receive a success message after submitting a form that is filled out correctly (the message is purely for demonstration, the data doesn't actually go anywhere)

### Screenshot

| Desktop                                                                                                                                                                   | Mobile                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img width="1280" alt="Screen Shot 2022-06-03 at 8 11 00 PM" src="https://user-images.githubusercontent.com/61766455/171977785-09feb96c-d50f-4c16-b942-8365df94d68d.png"> | <img width="193" alt="Screen Shot 2022-06-03 at 8 12 07 PM" src="https://user-images.githubusercontent.com/61766455/171977875-8ae5b312-8e4e-457a-9b58-e0f43341d76b.png"> |

### Links

- Solution URL: [Solution](https://your-solution-url.com)
- Live Site URL: [Live Site](https://chriskorsak.github.io/intro-component-with-signup-form-master/)

## My process

### Built with

- HTML5
- JavaScript
- SASS (including variables & functions)
- CSS Grid
- Mobile-first workflow
- NPM gh-pages dependency

### What I learned

#### Styling (SASS)

I got some more practice with SASS, and implemented a solution using SASS functions for the creation of the component drop shadows. Instead of hard-coding a color for the drop-shadow, I instead took the primary color SASS variable and fed it into the darken & desaturate SASS functions. Therefore, if I were to update the primary color, the drop shadow color would automatically update as well.

#### App Logic

With these types of smaller projects, it's tempting to not create a scalable solution for logic, because it may take a lot more time. However, I chose to focus a bit on scalability during the form validation and error/success message handling for a good challenge. Instead of creating an empty element for messages in the HTML for example, I dynamically created them with JS. Also, if I were to add more form inputs in the future, I would not have to update any JS logic for the validation and error/success message handling to work!

## Author

- Portfolio - [Chris Korsak](https://www.chriskorsak.net)
- Frontend Mentor - [@chriskorsak](https://www.frontendmentor.io/profile/chriskorsak)
