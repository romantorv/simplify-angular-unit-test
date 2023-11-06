# SimplifyUnitTest

This repository is used for demonstrating the topic `Simplify Angular unit test` which is presented at `Ho Chi Minh - Angular meetup Nov 04, 2023`,. The article for this repo can be read here: [Unit test - Make it simple](https://docs.google.com/presentation/d/1Q8pra0ZEfKckuMWMmhxUgfwTnnnP1P1JC-fk9x-4JyA/edit?usp=sharing) https://docs.google.com/presentation/d/1Q8pra0ZEfKckuMWMmhxUgfwTnnnP1P1JC-fk9x-4JyA/edit?usp=sharing

## Project configuration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.

And there are some changes to the default Angular project created by Angular CLI:

- Using `jest` framework for writing tests
- Using `yarn` for the package installation
- The `yarn run test` will trigger `jest --verbose` to provide the list of test cases

## Sample branches

### The `main` branch

This is the default branch, and contains only basic configurations to prepare for the samples

### Case #1: Focusing on the component and its behaviors

The usage branch: `01-sample-one`:

- `src/app/components/sample-one.component.before.spec.ts`: The original creation of the testing module, where we need to import all child components with pipes (or directives)
- `src/app/components/sample-one.component.after.spec.ts`: The simplified version, where we use the `NO_ERROR_SCHEMA` with mock pipes to test the component itself.

Other test file
- `src/app/components/block.component.spec.ts`

### Case #2: Simulate the dependency injections (if applicable) instead of combining them

The usage branches `02-sample-two`:

- `src/app/components/sample-two.component.before.spec.ts`: The original creation of the testing module, where we need to simulate deep-relation dependency injections for checking the output result
- `src/app/components/sample-two.component.after.spec.ts`: The simplified version, where we just mock the usage dependency injection for the test case input.


### Case #3: Using testing libraries to simplify the event-based cases

The usage branch `03-sample-three`:

- `src/app/components/counter.component.before.spec.ts`: The original creation of the testing module, where we need to declare the `store` and simulate the state to get the changes. This approach having some unsure matter where a state changed may lead to side effects.
- `src/app/components/counter.component.after.spec.ts`: The simplified implementation, which uses mock service and the helper tool to cast the observable input value for testing output result.



### Case (n): TBA

(Feel free to add more use cases)

## Ending words

Thank you for the support from @trungk for arranging the meetup to share this topic. Also I send thanks to all people joining and sharing this document.
