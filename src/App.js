import logo from './logo.svg';
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
        poster="https://res.cloudinary.com/weknow-creators/image/upload/c_scale,w_1280/v1647843623/wallhaven-83g6zy_i52wko.png"
        data-setup
        loop
      >
        <source
          src="https://nl26.seedr.cc/ff_get/1135405814/The.Blacklist.S09E13.720p.HDTV.x264-SYNCOPY.mkv?st=bmzCzzkMvGWC8HMnv-M7hw&e=1648380057"
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
