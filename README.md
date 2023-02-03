<image src="https://github.com/a-liljeroos/citybike-frontend/blob/main/docs/nav.PNG?raw=true" />
<h1>Citybike Web App Frontend</h1>

<h2>👻 Using technologies</h2>
<ul>
  <li>React</li>
  <li>Typescript</li>
  <li>HTML / CSS</li>
  <li>react-query, react-router-dom, react-icons, react-countup, sass</li>
</ul>

<br/>
<p>This the frontend for the Citybike API. A small single page application made for learning purposes. At first I planned to make this with react-native but did not have enough time to learn it so I went with react and made the UI more mobile friendly. It works with wider screens as well. I designed the user interface and application logic from scratch. Data fetching is implemented with <a target="_blank" href="https://react-query-v3.tanstack.com/" >react-query</a> which provides loading and error states.</p>
<p>The application has two main routes. From the navigation bar the user can choose two paths: stations and journeys. The station link reveals a list view of citybike stations and by pressing an item it opens a single station view which contains the station name, address, station capacity and the sum of journeys that started and returned from/to the particular station. The station data is fetched two times during this process from two different endpoints. The first call gives the station names only for the list and the second gives the station info by id. These endpoints are listed in the <a target="_blank" href="https://github.com/a-liljeroos/citybike-api">API repository.</a> </p>
<p>The journeys link leads to the journey list view with pagination. Pagination is made in the backend and the frontend requests only with the page number. One page contains 29 journeys and new fetch is made on every page. From the list user can read where the journey started from and where it ended to, including the journey duration in minutes and distance in kilometeres. The user can also press a station from the list and it opens the single station view for the pressed station.</p>

<h2>👀 Preview:</h2>
<span>
<image src="https://github.com/a-liljeroos/citybike-frontend/blob/main/docs/stations.gif?raw=true" />
<image src="https://github.com/a-liljeroos/citybike-frontend/blob/main/docs/journeys.gif?raw=true" />
</span>

<h2>💬 Installation</h2>

<p>Make sure that the database and API is installed first. See guide here 👉 <a target="_blank" href="https://github.com/a-liljeroos/citybike-api">Citybike API</a></p>
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
