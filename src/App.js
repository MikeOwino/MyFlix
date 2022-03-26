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
        poster="https://res.cloudinary.com/weknow-creators/image/upload/v1648315616/wallhaven-new7ek_yehasb.jpg"
        data-setup
        loop
      >
        <source
          src="https://nw3.seedr.cc/ff_get/1135568439/Death%20on%20the%20Nile.2022.1080p.BDRip.X264.AC3-EVO.mkv?st=McPhZP7VQDK-QE2XGsDPcA&e=1648403226"
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
