import './App.css';

function App() {
  return (
    <div className="App">

      <div className="size-11 header">
        <h1>Lexsynergy Limited</h1>
      </div>

      <div className="size-11 bodyContainer">
        <div className="size-4 sideContainer">
        <div className="size-11 contactUs">
          <h2>Contact Us:</h2>
          <h3>Contact Details:</h3>
          <div className="size-6 contactDetails">
            <ul>
              <li><label htmlFor="phone">Phone:</label><br /><button className="size-12 phone">0123456789</button></li>
              <li><label htmlFor="mail">Email Address:</label><br /><button className="size-12 mail">Lexsynergy@lexsynergy.com</button></li>
            </ul>
          </div>
          <h3>Alternatively, Enter your email address here and we will reach out to you</h3>
          <input className="email" type="email" placeholder="Enter Email Address Here" />
          <button>Submit</button>

          <div className="size-4 teamMembers">
            <h3>Team Members</h3>
            <ul>
              <li>Jake Spencer</li>
              <li>Daniel Collings</li>
              <li>Jonty Segal</li>
              <li>Mike Fenton</li>
              <li>Anthonty Tellow</li>
            </ul>
          </div>
        </div>
        </div>

        <div className="size-8 blogSection">
          <h1>Blog</h1>
          <h3>Latest Post</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta, leo at condimentum suscipit, dolor enim feugiat dui, id consectetur lectus mi in lacus. Praesent egestas purus libero, sit amet tempus enim maximus ac. Cras dapibus arcu lectus, vitae ullamcorper velit posuere vitae. Pellentesque volutpat sagittis mauris, vel commodo massa malesuada non. Sed iaculis mi nibh. Quisque id congue arcu. Proin laoreet ipsum arcu, vel pharetra lorem elementum id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis suscipit sapien sem, tristique commodo tellus semper nec. Integer a turpis sed turpis viverra porta. Morbi dignissim tempor tellus, in cursus tortor eleifend et.

            Quisque viverra metus elit, at lobortis arcu tempus a. Fusce risus odio, dictum quis gravida vel, luctus at nisl. Vestibulum at nibh a quam interdum finibus at non diam. Donec at varius ligula. Praesent ornare, libero nec aliquam posuere, odio tortor posuere metus, ac sagittis ipsum augue quis nulla. Etiam vitae placerat tortor, quis vehicula elit. Praesent ac sodales mauris, vitae pellentesque lectus. Donec iaculis tempus massa, mollis consequat nibh.

            Sed ac interdum eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut eros vel ante tincidunt lacinia at auctor ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce risus enim, auctor ac sapien in, semper vulputate tellus. Sed et tellus ac elit finibus pharetra. In et mi arcu. Ut placerat purus dui, egestas euismod quam lacinia id. Donec quis risus risus. Fusce eu sapien odio.
          </p>
        </div>
      </div>
      <div className="size-11 aboutCompany">
        <h2>About Us</h2>
        <p>
          Nulla pretium fringilla leo, ut consectetur tortor consectetur et. Pellentesque id felis pellentesque, sollicitudin ligula id, tincidunt arcu. Vivamus suscipit ipsum libero, nec pellentesque libero consequat eu. Nulla porta pretium pharetra. Sed felis risus, tincidunt vel auctor at, bibendum ac enim. Fusce eleifend ex libero, non malesuada nulla auctor eu. Fusce nec ante eget magna feugiat ultricies. Aenean ultricies mattis velit eu fermentum.
        </p>
      </div>
    </div>
  );
}

export default App;
