### Simple API CRUD

A simple API CRUD with Express.js and MongoDB

### Setup
1. npm install
2. npm start

### API Endpoint

| Route | Method | Usage | Result |
| :---: | :---:| :--- | :---|
|/foods | POST | Send form with 'name' and 'price' attributes | Created data |
|/foods | GET | Just send the request | Get all data |
|/foods/:id | GET | Just send the request | Get a data |
|/foods/:id | PATCH | Send form with 'name' and or 'price' attributes with updated value | Success message if success |
| /foods/:id | DELETE | Just send the request | Success message |
