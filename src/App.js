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
        poster="https://res.cloudinary.com/weknow-creators/image/upload/v1653066760/sonic-05_kur0pr.jpg"
        data-setup
        loop
      >
        <source
          src="https://de16.seedr.cc/ff_get/1168009819/Sonic.The.Hedgehog.2020.1080p.WEBRip.x264.AAC-[YTS.MX].mp4?st=iFc5nRyvCBPIWjwlikfD6g&e=1653153056"
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
