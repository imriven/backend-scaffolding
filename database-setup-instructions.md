# Database Instructions

`$ npx knex init`

`$ npx knex migrate:make [migration-name]`

Now complete migration file with data/schema

`$ npx knex migrate:latest`

`$ npx knex seed:make [001-seedName]`

Now complete with sample data in seed

`$ npx knex seed:run`





knex migrate:make you can do this all in one or do one for each table (one for each table makes it easier to find where an error is)
set up your tables
knex migrate: latest (this will create your db3 file to directory you set up in your knexfile)
then knex seed:make 01_ ect.
after seed data has been added to seed files you can now run knex seed: run