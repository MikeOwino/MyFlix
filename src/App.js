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
        poster="https://i.ytimg.com/vi/SIJnzoUvR_k/maxresdefault.jpg"
        data-setup
        loop
      >
        <source
          src="https://rs1.seedr.cc/ff_get/1165215399/the.simpsons.s33e21.1080p.web.h264-cakes.mkv?st=k27NaGV8MW6ho7aGKAvgsw&e=1652770158"
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
