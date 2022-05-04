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
          src="https://nw7.seedr.cc/ff_get/1158308956/Sonic.the.Hedgehog.2.2022.1080p.WEBRip.1400MB.DD2.0.x264-GalaxyRG.mkv?st=EPoxFk3IWFpGqi78v-na3w&e=1651765204"
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
