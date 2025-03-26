import React, { useEffect, useRef } from "react";

const Visualizer = ({ microphone, isSilent }) => {
  const canvasRef = useRef(null);
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const analyser = audioContext.createAnalyser();
  analyser.fftSize = 2048;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  useEffect(() => {
    const source = audioContext.createMediaStreamSource(microphone.stream);
    source.connect(analyser);
    draw();
  }, []);

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    const width = (canvas.width = canvas.offsetWidth);
    const height = (canvas.height = canvas.offsetHeight);
    const centerY = height / 2;

    requestAnimationFrame(draw);
    analyser.getByteTimeDomainData(dataArray);

    context.clearRect(0, 0, width, height);

    const primaryColor = "rgba(37, 99, 235, 0.9)"; // Electric Blue
    const secondaryColor = "rgba(55, 235, 208, 0.8)"; // Vibrant Cyan
    const glowColor = "rgba(37, 99, 235, 0.6)"; // Light Blue Glow

    context.lineWidth = 4;
    context.shadowBlur = 20;

    if (isSilent) {
      // Standby mode → Two slow-moving waves
      context.strokeStyle = secondaryColor;
      context.shadowColor = secondaryColor;
      drawWave(context, width, height, centerY, 12, 0.5, 0.8, true);

      context.strokeStyle = primaryColor;
      context.shadowColor = glowColor;
      drawWave(context, width, height, centerY, 24, 1, 1, true);
    } else {
      // Active speech mode → One real-time wave
      context.strokeStyle = primaryColor;
      context.shadowColor = glowColor;
      drawWave(context, width, height, centerY, 30, 1, 1, false);
    }
  };

  const drawWave = (context, width, height, centerY, waveHeight, speed, opacity, isStandby) => {
    context.globalAlpha = opacity;
    context.beginPath();
    const sliceWidth = width / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      let v;
      if (isStandby) {
        v = Math.sin((i / bufferLength) * Math.PI * 2 + speed * Date.now() * 0.002) * waveHeight;
      } else {
        v = (dataArray[i] / 128.0 - 1) * waveHeight * 3;
      }

      const y = centerY + v;
      if (i === 0) context.moveTo(x, y);
      else context.lineTo(x, y);

      x += sliceWidth;
    }

    context.stroke();
    context.globalAlpha = 1;
  };

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default Visualizer;
