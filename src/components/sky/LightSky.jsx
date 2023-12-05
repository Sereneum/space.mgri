import { useRef, useEffect } from 'react';

const LightSky = () => {
  const canvasRef = useRef(null);

  const config = {
    size: {
      min: 20,
      max: 60,
    },
    speed: {
      min: 0.4,
      max: 1,
    },
    opacity: {
      min: 0.4,
      max: 1,
    },
  };

  const rnd = (mi, mx) => Math.random() * (mx - mi) + mi;

  const createCloud = (canvas, y) => {
    // от 40 - 120
    const size = rnd(config.size.min, config.size.max);
    const speed = rnd(config.speed.min, config.speed.max);
    const opacity = rnd(config.opacity.min, config.opacity.max);
    const x = rnd(0, canvas.width - size);
    return {
      x, y: y + 100, size, speed, opacity,
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    const ctx = canvas.getContext('2d');

    // const clouds = [
    //     { x: 50, y: 100, size: 80, speed: 1, opacity: 0.8 },
    //     { x: 200, y: 50, size: 120, speed: 0.8, opacity: 0.6 },
    //     { x: 300, y: 300, size: 80, speed: 1, opacity: 0.8 },
    //     { x: 120, y: 400, size: 120, speed: 0.8, opacity: 0.6 },
    //     // Добавьте другие облака по аналогии
    // ];

    const clouds = Array.from({ length: 10 }, (_, i) => createCloud(canvas, i * 100));

    console.log(clouds, createCloud(canvas, 100));

    const drawCloud = (cloud) => {
      ctx.beginPath();

      // Создание эллиптической формы облака
      ctx.ellipse(
        cloud.x,
        cloud.y,
        cloud.size,
        cloud.size / 2,
        0,
        0,
        2 * Math.PI,
      );

      ctx.fillStyle = `rgba(255, 255, 255, ${cloud.opacity})`;
      ctx.fill();
    };

    const animateClouds = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      clouds.forEach((cloud) => {
        cloud.x += cloud.speed;
        if (cloud.x > canvas.width + cloud.size) {
          cloud.x = -cloud.size;
        }

        drawCloud(cloud);
      });

      requestAnimationFrame(animateClouds);
    };

    animateClouds();
  }, []);

  return <canvas ref={canvasRef} className={'sky'} />;
};

export default LightSky;
