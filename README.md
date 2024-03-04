## Anxend Interview Mini Project

Welcome to the Anxend software engineer interview challenge.

This challenge should take around 1-2hrs of your time. We know your time is precious so this is a short challenge and the change for you to show us what you can do.

This project uses typescript (for frontend and backend), react, remix, tailwind and edgedb as it's main dependencies.

If you are unfamiliar with any of these please refer to their documentation if needed, but we won't be using any of their technologies too much and the mini projects below are typical web development tasks. There is an example page for you to refer to if needed and example db entry in the models folder.

To get started make sure your have nodejs setup on your system and then:

### Install Dependencies

`npm ci`

### EdgeDB

To setup Edgedb follow the instructions on https://www.edgedb.com/install#linux-debianubuntults to setup the Edgedb cli.
Then use `edgedb project init` to create an edgedb database and run the migration
The databse will be populated with a starting schema defined by the `default.esdl` file.

If needed you can run a migration with: `edgedb migrate`
(and to create a new one run `edgedb migration create`)

### Development

To start development, run the remix server use: `npm run dev`

## Projects

For the projects below we have outlined a small core task.

For stretch goals for each of those tasks, consider typical production ready requirements for each,
eg. security, validation, tests, progressive enhancement, caching and for the more visual tasks, responsive design and accessibility.
If you are unfamiliar with any of these best practices (or short of time) instead briefly describe how you might begin to tackle them.

### Project 2:

Create a very mini quiz game where the user (eg a student at a school) would pick an image for their avatar and an accessory (hat etc..) Then give them a multiple choice question to answer (with 4 possible answers, 1 correct answer). The quicker they pick the correct answer the higher their score would be. Show their score at the end.

