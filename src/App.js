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
          src="https://nw9.seedr.cc/ff_get/1151072069/Sing.2.2021.1080p.WEBRip.x264-RARBG.mp4?st=EkMM81EqwVEyIyFFBSgMFw&e=1650731503"
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
