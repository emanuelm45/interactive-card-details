# Frontend Mentor - Clipboard landing page solution

This is a solution to the [Clipboard landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshots

#### Desktop Layout

![Desktop](https://github.com/emanuelm45/portfolio-images/blob/main/react-interactive-card-details/desktop.png)

![Desktop](https://github.com/emanuelm45/portfolio-images/blob/main/react-interactive-card-details/active-states.png)

#### Mobile Layout

<p align="center">
  <img src="https://github.com/emanuelm45/portfolio-images/blob/main/react-interactive-card-details/mobile.png" alt="Mobile">
</p>

<p align="center">
  <img src="https://github.com/emanuelm45/portfolio-images/blob/main/react-interactive-card-details/mobile-completed.png" alt="Mobile">
</p>

### Links

- Solution URL: https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw/hub
- Live Site URL: https://react-interactive-card-details.vercel.app/

## My process

### Built with

- Semantic HTML5 markup
- ReactJS
- Typescript
- CSS Flexbox
- CSS Grid
- Desktop-first workflow
- [Framer Motion](https://www.framer.com/motion/) - Library to animate components
- [Styled Components](https://styled-components.com/docs) - Library to style react components
- [Yup](https://github.com/jquense/yup) - Library to validate forms
- [React Hook Form](https://styled-components.com/docs) - Library to get data from forms with less code

### What I learned

I learned a little more about yup and how to create my custom methods with the function 'addMethod'

```ts
  addMethod<StringSchema<string | undefined>>(
  yup.string,
  'checkMonth',
  function (message) {
    return this.test('checkMonth', message, function (value) {
      const { path, createError } = this
      if (parseInt(value!) > 12)
        return createError({
          path,
          message: message ?? 'Insert a valid month'
        })
      return true
    })
  }
)

const cardSchema = yup
  .object({
    month: yup
      .string()
      .required(ERROR_BLANK)
      .length(2)
      .default('00')
      .checkMonth()
)}
```

### Continued development

I intend to continue studying ReactJS, React Hooks, Styled Components and etc.

## Author

- Frontend Mentor - [@emanuelm45](https://www.frontendmentor.io/profile/emanuelm45)
- LinkedIn - [Emanuel Marques](https://www.linkedin.com/in/emanuel-marques-541617215/)
