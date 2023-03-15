import React from "react";
import './Home.css';

 const Home=()=>{
    return(
        <div>
             <header>
        <h1>My Responsive Website</h1>
      </header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <main>
        <section>
          <h2>Welcome to my website</h2>
          <p>Welcome to our website! We're glad you've found us and we hope you'll enjoy exploring all that we have to offer.
             Whether you're looking for information, products, services, or simply a bit of inspiration, we're here to help.</p>
           <p>
           Our mission is to provide you with the highest quality content, resources, and experiences possible. 
             From expert advice and helpful tips to engaging videos and thought-provoking articles, we aim to empower and enrich your life in every way we can.
           </p>
            <p> So take a look around, make yourself at home, and let us know if there's anything we can do to make your experience even better.
              We're always here to listen, learn, and grow, and we can't wait to connect with you! </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Website</p>
      </footer>
        </div>
    )
 }
 
 export default Home;