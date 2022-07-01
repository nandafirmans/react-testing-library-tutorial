- ## **Type of Tests**

  - ### Unit Tests

    Test one units of code which is often a function or a react component in isolation, so you don't want to test any interaction of a unit with any other unit of code.

  - ### Integration Tests

    Test how multiple units work together, so that actually test the interactions between units (interaction between components, function or microsevices)

  - ### Functional Tests (Behaviour)

    Tests a particular function of software, in this case function means behaviour. General behaviour of the software and not particular code function. The idea here tho **for functional test you not realy test your code but testing behaviour of your software.**
    and react-testing-library encourages functional test.

  - ### Acceptance / End-to-end (E2E) Tests

    This tests require an actual browser and server that app connected to, so this require special tools such as Cypress or Selenium

<br/>
<br/>

- ## Unit Testing VS Functional Testing

  | Unit Testing                                     | Functional Testing                                                                             |
  | ------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
  | Isolation: mock depedencies, test internal       | Include all relevant units, test behaviour                                                     |
  | ---                                              | ---                                                                                            |
  | 👍 Very easy to pinpoint failures                | 👍 Close to how users interact with software                                                   |
  |                                                  | 👍 Robust tests (refactoring would not break the test as long as it's produce the same output) |
  | ---                                              | ---                                                                                            |
  | 👎 Further from how users interact with software |                                                                                                |
  | 👎 More likely to break with refactoring         | 👎 More difficult to debug failing tests                                                       |
