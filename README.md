# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





<!-- LOGICS -->
Array Filter Method: If your data is in the form of an array of objects, you can use the built-in filter method available on JavaScript arrays. This method allows you to create a new array containing only the elements that match your filter criteria. You can use this method in conjunction with input fields or dropdowns to filter data based on specific attributes.

  const names = ['James', 'John', 'Paul', 'Ringo', 'George'];
  <div>
      {names.filter(name => name.includes('J')).map(filteredName => (
        <li>
          {filteredName}
        </li>
      ))}
    </div>
    <div>

    const people = [
  {
    name: 'James',
    age: 31,
  },
  {people.filter(person => person.age < 60).map(filteredPerson => (
    <li>
      {filteredPerson.name}
    </li>
  ))}
</div>

Search Bar Filter: Implement a search bar that allows users to type in keywords or phrases to search for specific data. You can use the includes method to check if the keyword or phrase is present in any relevant data field. As the user types, you can update the displayed data in real-time based on the search query.

Dropdown Filter: Use dropdown menus to allow users to select specific criteria for filtering the data. Each dropdown can represent a different attribute, such as category, date range, or status. When a user selects an option from the dropdown, you can update the displayed data accordingly.

Multiple Filters: If you need to apply multiple filters simultaneously, you can maintain a filter state object that stores the selected filter values. Whenever a filter value changes, update the filter state and reapply the filters to the data. You can combine different filter logics, such as array filtering or search bar filtering, based on the selected filters.

Pagination and Sorting: Implement pagination and sorting options to enhance the filtering capabilities. Allow users to navigate through different pages of filtered results and provide options to sort the data based on specific attributes, such as alphabetical order or numerical values.
# data-filter
