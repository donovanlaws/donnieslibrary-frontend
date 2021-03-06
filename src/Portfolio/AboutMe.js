import React from "react";
import img_phoenix from "../Images/phoenixnight.png";

export default function AboutMe() {
  return (
    <article className="container-fluid slideFromRight" id="about">
      <section className="InfoRow">
        <div className="col-lg-8">
          <h2 className="portfolio-h2">About Me:</h2>
          <p className="portfolio-p">
            Some of what I've learned is self-taught, including some core
            JavaScript experience and also a small amount of C# (with
            Discord.Net) to develop personal projects. As of April 2021, I
            completed Thinkful's Immersive Software Engineering Program, and in
            5 quick but knowledge-packed months, have completed with
            certification and lots of Web Dev experience! I also enjoy working
            with and organizing databases, so far I have had experience with
            ElephantSQL and MongoDB. I work in Visual Studio Code on Windows 10.
          </p>
          <p className="portfolio-p">
            I love expressing myself naturally to those I interact it.
            Professionalism is important, and I also believe it's great for
            everyone to get to know and understand the person they're talking
            to! I thrive on experimenting with creativity or a lengthy
            challenge, trying to find solutions (odd or not) to problems, or
            cleanup, and showing I am able to solve technical challenges given
            for solo work or teamwork.
          </p>
          <p className="portfolio-p">
            Apart from programming and working on applications, or the
            occasional return to work with some Content Creation, there are a
            lot of things I do with my free time! I spend a lot of time with
            some online friends, where you may find me as a participant in a
            monster-slaying party, or sometimes a supporting actor in some type
            of clownery. I really enjoy Virtual Reality and am passionate about
            VRChat, where I've worked on and made well over 10 avatars in Unity,
            regularly keeping them updated with the latest SDKs, and have even
            gotten paid to do texture work commissions for people online.
          </p>
        </div>
        <div className="col-lg-4">
          <img src={img_phoenix} alt="pink square" className="rounded ccc" />
        </div>
      </section>
    </article>
  );
}
