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
          src="https://nl19.seedr.cc/ff_get/1156829895/The.Bad.Guys.2022.1080p.WEBRip.x264.AC3-EVO.mkv?st=7y-Mps44sSw0vhaXEo1UHg&e=1651568608"
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
