import React from "react";

export default function Introduction() {
  return (
    <article className="container-fluid" id="intro">
      <section className="InfoRow">
        <div className="col-lg-5">
          <img src="https://avatars.githubusercontent.com/u/91988909?v=4" className="border border-secondary rounded-circle" alt="Donovan" />
        </div>
        <div className="col-lg-7">
          <h2 className="portfolio-h2">Looking for a Web Developer?</h2>
          <h3 className="portfolio-h3">Here's a short summary:</h3>
          <p className="portfolio-p">
            Howdy there! My name is Donovan, and I am a Web Developer who is
            still learning and coming from a background in content creation.
            I've taken Thinkful's Immersive Software Engineering Program to
            learn Web Development, and reside in Peoria Arizona, half an hour
            out from Phoenix!
          </p>
          <p className="portfolio-p">
            I work with JavaScript, SQL, React, Express, Node, and more
            subsequent libraries to create frontend and backend applications.
            One of my personal projects is written in C# with Discord.Net, and
            is connected to a MongoDB managing over 50,000 users!
          </p>
          <p className="portfolio-p">
            Feel welcome to explore this webpage and contact me if you need to!
          </p>
        </div>
      </section>
    </article>
  );
}
