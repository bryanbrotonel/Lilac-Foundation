import React from 'react';

import './styles.scss';

class VideoHeader extends React.Component {
  render() {
    return (
      <header>
        <div className="overlay" />
        <video playsInline={true} autoPlay={true} muted="muted" loop="loop">
          <source
            src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
            type="video/mp4"
          />
        </video>
        <div className="container h-100">
          <div className="d-flex text-center h-100">
            <div className="my-auto w-100 text-white">
              <h1 className="display-3">The Lilac Foundation</h1>
              <h2>To enrich the lives of those we embody</h2>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default VideoHeader;
