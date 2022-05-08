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
        poster="https://res.cloudinary.com/weknow-creators/image/upload/v1652009088/images/maxresdefault_kb7edh.jpg"
        data-setup
        loop
      >
        <source
          src="https://de19.seedr.cc/ff_get/1160689852/Frozen.II.2019.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4?st=rdUt-yAJa601zMvzxFeIGQ&e=1652095512"
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
