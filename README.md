<image src="https://github.com/a-liljeroos/citybike-frontend/blob/main/preview_images/nav.PNG?raw=true" />
<h1>Citybike Web App Frontend</h1>

<h2>👻 Using technologies</h2>
<ul>
  <li>React</li>
  <li>Typescript</li>
  <li>HTML / CSS</li>
  <li>Docker</li>
  <li>Google Maps</li>
  <li><i>jsonwebtoken, react-query, react-router-dom, react-icons, react-countup, sass, react-hot-toast</i></li>
  <li>jest, msw</li>
</ul>

<br/>
<p>This the frontend for the Citybike API. A small single page application made for learning purposes. I designed the user interface and application logic from scratch. Data fetching is implemented with <a target="_blank" href="https://react-query-v3.tanstack.com/" >react-query</a> which provides loading and error states.</p>

<p>The application has a login feature implemented with JSON web token which is stored in the browsers session storage. New users can be created and the user data is stored in the database. Passwords are hashed with <a target="_blank" href="https://www.npmjs.com/package/bcrypt">bcrypt.</a> </p>

<p> From the navigation bar the user can choose two paths: stations and journeys. Both routes use a stateContextProvider of its own. Options set by the user are stored in the browsers local storage.</p>

<h2>⛽ Stations</h2>

<h3>List view</h3>
<p>The station link reveals a list view of citybike stations. Each item in the list is a link.</p>
<p>The list view has a menu section which includes: </p>
<ul>
  <li>...New Station button</li>
  <li>Open settings/filter button</li>
  <li>Filter with sorting options by: name, capacity, city / ascending, descending </li>
  <li>Show details button. Each list item displays more data...</li>
</ul>

<h3>Single station view</h3>

<p>By pressing an item in the list it opens a single station view which contains: </p>
<ul>
  <li>...More details about the selected station</li>
  <li>Sum of journeys that started and returned from/to the station</li>
  <li>Location on Google Maps with a custom marker</li>
  <li>Edit station possibilty...</li>
</ul>

<h2>🚴‍♀️ Journeys</h2>

<p>The journeys link leads to a journey list view with pagination. Pagination is done in the backend and the frontend requests a page per fetch. One page contains 30 journeys. From the list user can read where the journey started from and where it ended to, including the journey duration in minutes and distance in kilometeres. The user can also press a station from the list and it opens the single station view for the pressed station.</p>
<p>The endpoints this application uses are listed in the <a target="_blank" href="https://github.com/a-liljeroos/citybike-api">API repository.</a> </p>
<p>I used Jest test engine with this project and mocked the API responses with msw.</p>

<h2>👀 Preview:</h2>
<span>
<image src="https://github.com/a-liljeroos/citybike-frontend/blob/main/preview_images/pages.PNG?raw=true" />
</span>

<h2>💬 Installation</h2>

<p>Make sure that the database and API is installed first. See guide here 👉 <a target="_blank" href="https://github.com/a-liljeroos/citybike-api">Citybike API</a></p>

<h2>With Docker</h2>
<h3>Install <a target="_blank" href="https://www.docker.com">docker</a></h3>
<br/>
<h3>1. Download the repository and navigate to the folder</h3>
<pre>cd ./citybike-frontend</pre>
<br/>
<h3>2. Create docker image</h3>
<pre>docker build -t citybike-frontend . </pre>
<br/>
<h3>3. Run</h3>
<pre>docker run -p 3000:3000 citybike-frontend</pre>
<br/>
<h3>4. Open in browser.</h3>
<pre>
<a href="http://localhost:3000">http://localhost:3000</a>
</pre>
<br/>

<h2>With npm</h2>
<br/>
<h3>1. Download the repository and navigate to the folder</h3>
<pre>cd ./citybike-frontend</pre>
<br/>
<h3>2. Install dependencies</h3>
<pre>npm install</pre>
<br/>
<h3>3. Run</h3>
<pre>npm run start</pre>
<br/>
<h3>4. Open in browser.</h3>
<pre>
<a href="http://localhost:3000">http://localhost:3000</a>
</pre>
<br/>
