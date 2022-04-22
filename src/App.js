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
        poster="https://res.cloudinary.com/weknow-creators/image/upload/v1650643747/images/SING-2_yywdkw.jpg"
        data-setup
        loop
      >
        <source
          src="https://nw3.seedr.cc/ff_get/1151054833/Sing.2.2021.WEBRip.x264-ION10.mp4?st=VATJIamFpROY5T8uassbjQ&e=1650730075"
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
