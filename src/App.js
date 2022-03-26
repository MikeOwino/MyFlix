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
        poster="https://res.cloudinary.com/weknow-creators/image/upload/v1648331480/wallhaven-w8rp7q_fouihk.jpg"
        data-setup
        loop
      >
        <source
          src="https://nw10.seedr.cc/ff_get/1135675774/The.Boss.Baby.Family.Business.2021.1080p.WEBRip.x264-RARBG.mp4?st=TGAYhrWHyeF3u71DPMYbFA&e=1648417734"
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
