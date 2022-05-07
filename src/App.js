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
        poster="https://res.cloudinary.com/weknow-creators/image/upload/v1651939792/p06dwmg7_vdxsyd.jpg"
        data-setup
        loop
      >
        <source
          src="https://de15.seedr.cc/ff_get/1160158678/Wreck.it.Ralph.2012.1080p.BrRip.x264.BOKUTOX.YIFY.mp4?st=lCUUeytmz_lzx7ZWJ9HphA&e=1652026271"
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
