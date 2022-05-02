import './App.css';
import {Helmet} from "react-helmet";

export default function App() {
  return (
    <>
      <video
        id="my-video"
        className="video-js"
        controls
        preload="auto"
        poster="https://res.cloudinary.com/weknow-creators/image/upload/v1651481667/images/the-bad-guys-share-image-v2_bgant8.jpg"
        data-setup
        loop
      >
        <source
          src="https://nl17.seedr.cc/ff_get/1156861675/the.simpsons.s33e19.1080p.web.h264-cakes.mkv?st=L24MsYf4q4_pk5ONgMlP4Q&e=1651571335"
          type="video/mp4"
        />
      </video>
      <Helmet>
        <script
          src="https://vjs.zencdn.net/5.4.6/video.js"
          type="text/javascript"
        />
      </Helmet>
    </>
  );
}
