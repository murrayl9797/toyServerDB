Let's build a toy server that keeps track of people's first names and their favorite color.

## Check out Database code
Inside the index.js file in the `db` directory, I've initialized connection to a MySQL database, along with initializing a table in that database. This will store a table that keeps track of names seen so far. So a table might look like:

TABLENAME: people

| Id     | Name    | Color |
| ------ | ------- | ----- |
| 1      | john    | blue  |
| 2      | carol   | red   |
| 3      | david   | yellow|

The code in the index.js of `db` will initialize the database with an empty table.

## Set up server and routes
Your goal is to create an express server that is able to handle:

 * A `POST` request to the path `/people?name=[anyName]&color=[anyColor]`
 * A `GET` request to the path `/people` that will respond with all of the people in your DB