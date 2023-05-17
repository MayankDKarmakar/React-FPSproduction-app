import React from "react";
import vg from "../assets/2.png";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>FPS Production</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to music and video production. We
            are a leading production house company and aur aim is to provide
            qualtiy services.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            ultrices ullamcorper ornare. Pellentesque mi nulla, lobortis id nunc
            sit amet, molestie vulputate sapien. Donec accumsan ex eget velit
            iaculis pharetra. Nulla non ligula vitae est commodo eleifend eget
            vitae metus. Maecenas dapibus semper mauris. Morbi non molestie
            magna. Proin nec enim vitae nisi aliquam ultricies. Cras in viverra
            nunc. Suspendisse pharetra massa non odio malesuada, vel iaculis
            odio vulputate. Donec varius egestas sapien. Pellentesque ac tortor
            interdum, tincidunt tellus eu, consequat ante. Curabitur lacus
            ipsum, aliquet ut orci ac, tincidunt ultrices odio. Phasellus non
            auctor tellus.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{animationDelay:'0.3s'}}>
            <AiFillGoogleCircle />
            <p>Google</p>
            </div>
            <div style={{animationDelay:'0.5s'}}>
            <AiFillAmazonCircle />
            <p>Amazon</p>
            </div>

            <div style={{animationDelay:'0.7s'}}>
            <AiFillYoutube />
            <p>Youtube</p>
            </div>

            <div style={{animationDelay:'1s'}}>
            <AiFillInstagram />
            <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
