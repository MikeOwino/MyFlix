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
          src="https://nw11.seedr.cc/ff_get/1136167690/Killing.Eve.S04E06.WEBRip.x264-ION10.mp4?st=eTGd5Na_VqBr12tVKYGqOg&e=1648487022"
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
