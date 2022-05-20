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
        poster="https://res.cloudinary.com/weknow-creators/image/upload/v1653067188/sonic-2-poster-game_awkira.jpg"
        data-setup
        loop
      >
        <source
          src="https://nw7.seedr.cc/ff_get/1168023601/Sonic.the.Hedgehog.2.2022.1080p.WEBRip.1400MB.DD2.0.x264-GalaxyRG.mkv?st=lNU3jErxxRM1cQEgIr5wSA&e=1653153963"
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
