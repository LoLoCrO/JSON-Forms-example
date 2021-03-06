# MODIFIED CLONE of JSON Forms React seed App

See the original at [https://github.com/eclipsesource/jsonforms-react-seed]

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# JSON Forms React seed App

This seed demonstrates how to use [JSON Forms](https://jsonforms.io) with React in order to render a simple form for displaying a task entity. It showcases the React standalone component.
It is based on create-react-app and only contains minor modifications.

- Execute `npm ci` to install the prerequisites. If you want to have the latest released versions use `npm install`.
- Execute `npm start` to start the application.

Browse to http://localhost:3000 to see the application in action.

## File Structure

Let's briefly have a look at the most important files:

- `src/schemas/example/schema.json` contains the JSON schema (also referred to as 'data schema')
- `src/schemas/example/uischema.json` contains the UI schema
- `src/index.js` is the entry point of the application and sets up the JSON and the UI schema necessary for JSON Forms.
- `src/App.js` is the main React component and makes use of the React standalone component in order to render a form.

The [data schema](https://github.com/eclipsesource/jsonforms-react-seed/blob/master/src/schema.json) defines the structure of a Task: it contains attributes such as title, description, due date and so on.

The [corresponding UI schema](https://github.com/eclipsesource/jsonforms-react-seed/blob/master/src/uischema.json) specifies controls for each property and puts them into a vertical layout that in turn contains two horizontal layouts.

## Rendering our form

The `App` component is responsible for rendering our actual forms.

The standalone form is rendered by importing and using the `JsonForms` component and directly handing over the `schema`, `uischema`, `data`, `renderer` and `cell` props. We listen to changes in the form via the `onChange` callback .

## Custom renderers

Please see [JSON Forms tutorial](https://jsonforms.io/docs/tutorial) on how to add custom renderers.
