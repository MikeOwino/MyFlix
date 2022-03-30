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
        poster="https://res.cloudinary.com/weknow-creators/image/upload/v1648400395/wallhaven-4v32r5_vtploh.jpg"
        data-setup
        loop
      >
        <source
          src="https://nw6.seedr.cc/ff_get/1137599940/Moon.Knight.S01E01.The.Goldfish.Problem.1080p.DSNP.WEB-DL.DDP5.1.Atmos.H.264-CMRG.mkv?st=bEqaiejPbR37bjLhGk_WZQ&e=1648716136"
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
