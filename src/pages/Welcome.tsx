import React from 'react';
import { useEffect, useRef } from 'react';

const Welcome: React.FC = () => {

  const videoRef = useRef(null);

  const init = () => {
    const playUrl = 'http://flv.bdplay.nodemedia.cn/live/bbb.flv';
    const player = new window.Jessibuca({
      container: videoRef.current,
      videoBuffer: 0.2, // 缓存时长
      isResize: false,
      text: "",
      isFlv: true,
      loadingText: "加载中",
      decoder: "/decoder.js",
      debug: false,
      loadingTimeout: 60,
      loadingTimeoutReplay: true,
      timeout: 60,
      heartTimeout: 60,
      heartTimeoutReplay: true,
      showBandwidth: true, // 显示网速
      operateBtns: {
        fullscreen: true,
        screenshot: true,
        play: true,
        audio: true,
      },
      isNotMute: false,
    });
    player.play(playUrl);
    return () => {
      player.destroy();
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }} ref={videoRef} ></div>
  );
};

export default Welcome;
