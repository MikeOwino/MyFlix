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
          src="https://nl36.seedr.cc/ff_get/1151061712/Sing.2.2021.720p.WEBRip.800MB.x264-GalaxyRG.mkv?st=Sld_AcOlS8FNEFDHSDBXFw&e=1650730638"
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
