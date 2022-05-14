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
          src="https://nl38.seedr.cc/ff_get/1164296744/Tom%20And%20Jerry%20Willy%20Wonka%20And%20The%20Chocolate%20Factory%202017%20Movies%20720p%20HDRip%20XviD%20AAC%20New%20Source%20rDX.mkv?st=2CrIhnXS9T6Q59EoZo8Ucg&e=1652631101"
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
