# EMBL-EBI front-end developer task

User story:
As a researcher I want to be able to find articles in my field so that I can
keep up to date with current research.

## Requirements
- Download and install [node](https://nodejs.org/en/download/) and [npm](https://nodejs.org/en/download/)
- Install yarn with `npm install --global yarn`

## Running the application on dev
- Clone this repo and run the download requirements above.
- Go into the project directory using `cd embl-ebi-fe-task`.
- Install all dependencies using `yarn`.
- Run the application locally using `yarn start`.
- Access the application on [https://localhost:3000](https://localhost:3000)

## Testing application
- Run all unit test files using `yarn test`.
- Check test coverage using `yarn test --coverage`.

## Building the application
- Install serve globally using `yarn global add serve`, if permission denied run the command with administrative rights.
- Run build using `serve -s build`.
- Build file located at the `build` folder.

## Suggested UI Components that can be reusable are:
- Query Component: `/components/Query`
- Button Component: `/components/Button`
- Result Component: `/components/Result`