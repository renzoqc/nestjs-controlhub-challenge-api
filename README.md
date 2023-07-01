# Controlhub challenge API

## Introduction

This is a [Nest.js](https://nestjs.com/) project for a challenge.

## Node Version

This project uses node >= 16.2.0

It's easiest to get going in this project using `nvm`.

[Check nvm documentation here](https://github.com/nvm-sh/nvm)

After installation run to make sure you have it enabled for the project.

[More information here in the Tooling section](#tooling)

## Installation
### Typescript

To enable prettier with typescript go to your IDE settings and add:

```
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
```

replace with your own IDE's prettier

## How to

### Getting Started (Run application)
First, run the development server:

```bash
npm run start:dev
```
You can access the endpoints configured in the /domain folder at: [http://localhost:3000/{domain}/{query}](http://localhost:3000/{domain}/{query})

For more information go to the [Commands Section](#commands)

## Code Style Guide.

We should always look to have a declarative code rather than imperative oriented code pattern. That is, the idea we can abstract complicated or long blocks for imperative code in shorter and easier to understand functions.

Long term this makes the code more readable and easier to understand. While not as "DRY" the gains to readability and making it easier for other developers to understand your code makes it worth it.

Check out: https://medium.com/dev-genius/from-imperative-to-declarative-javascript-f6bd8eec05bd for examples

## Testing (Unit tests)

Testing our code base ensures functionality, prevents bugs before they cause issue for end-users, optimize performance by identifying performance issue and maintain code quality.

Test should focus on the behavior more than on covering each lines. It helps decoupling the test from the code and allow developers to make changes without breaking test as we focus on the WHAT it does and not the HOW it does it.

Test Coverage for the Repo should ideally be at least 70%.

## Commits

As a standard for commits we are following conventional commits convention [conventional commits doc](https://www.conventionalcommits.org/en/v1.0.0/#summary) .

It helps standardized the commit message and understand at one glance the intent of the commit. It allows as well to implement automatization based on the message (E.g. Change-log or incrementing version).

### Format

The commit message title should be following the following convention: `<type>(<optional scope>): <description>` (if we have a ticket we should use it as scope)

E.g: `feat(SPKVX-999): Add feature X fix(auth): Resolve issue X`

## Commands

```bash
$ npm run start # development
$ npm run start:dev # watch mode
$ npm run start:prod # production mode
$ npm run build # Generates an optimized version of your application for production
$ npm run lint # Runs ESLint for all files in src/domain/* 
$ npm run lint:fix # Runs ESLint for all files in src/domain/* and fix warnings 
$ npm run test # Runs jest tests
$ npm run test:cov # Runs jest tests and get coverage
$ npm run prepare # Prepares app to start using husky
$ npm run format # Runs prettier to format files with prettier specifications
```

## Tooling
| Name | Version |
|------|---------|
| Node.js | 16.20.0 |
| npm | 8.19.4 |

## Troubleshooting
*Any known error or problem that occured with their solution*

If you see a "Module not found" error, try deleting the `node_modules` folder and running `npm install` again.

## Contributions

We welcome contributions! Please follow the coding standards outlined in `.eslintrc.js` and submit pull requests against the `develop` branch.

## Learn More

To learn more about Nest.js, take a look at the following resources:

- [Nest.js Documentation](https://docs.nestjs.com/) - learn about Nest.js.
- [Learn Nest.js](https://courses.nestjs.com/) - an interactive Nest.js tutorial.

You can check out [the Nest.js GitHub repository](https://github.com/nestjs/nest/) - your feedback and contributions are welcome!
