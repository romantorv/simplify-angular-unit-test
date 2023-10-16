# SimplifyUnitTest

This repository is used for demonstrating the topic `Simplify Angular unit test` which is presented at `Ho Chi Minh - Angular meetup Oct 26, 2023`,. The article for this repo can be read here.

## Project configuration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.

And there are some changes to the default Angular project created by Angular CLI:

- Using `jest` framework for writing tests
- Using `yarn` for the package installation
- The `yarn run test` will trigger `jest --verbose` to provide the list of test cases

## Sample branches

### The `main` branch

This is the default branch, contains only basic configurations to prepare for the samples

### Case #1: Focusing on the component and its behaviors

The usage branches:

- `01-sample-one-before`: Presenting the fact we try to test non-related child components into a unit-test.
- `01-sample-one-after`: Presenting we can simplify it without testing the child components.

### Case #2: Simulate the dependency injections (if applicable) instead of combining them

The usage branches:

- `02-sample-two-before`:
- `02-sample-two-after`:

### Case #3: Trying 3rd testing libraries for complex marble testing

The usage branches:

- `03-sample-three-before`:
- `03-sample-three-after`:

### Case (n): TBA

(Feel free to add more use cases)

## Ending words

Thank you for the support from @trungk for arranging the meetup to share this topic. Also I send thanks to all people joining and sharing this document.
