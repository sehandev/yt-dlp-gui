import { useEffect, useState } from "react";
import "./Splashscreen.css";

const LOADING_MILLISECONDS = 3_000;
const PREPARING_MILLISECONDS = 1_000;
const ALMOST_MILLISECONDS = 500;
const READY_MILLISECONDS = 500;

const totalProgressMilliseconds: number =
  LOADING_MILLISECONDS + PREPARING_MILLISECONDS + ALMOST_MILLISECONDS + READY_MILLISECONDS;

function Splashscreen() {
  const [loadingText, setLoadingText] = useState("Initializing...");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadingSteps = [
      { text: "Loading yt-dlp...", duration: LOADING_MILLISECONDS },
      { text: "Preparing interface...", duration: PREPARING_MILLISECONDS },
      { text: "Almost ready...", duration: ALMOST_MILLISECONDS },
      { text: "Ready!", duration: READY_MILLISECONDS },
    ];

    let currentStep = 0;
    let totalTime = 0;
    let timeoutId: number;

    const runStep = () => {
      if (currentStep < loadingSteps.length) {
        const step = loadingSteps[currentStep];
        setLoadingText(step.text);
        setProgress((totalTime / totalProgressMilliseconds) * 100);
        totalTime += step.duration;
        currentStep++;
        timeoutId = setTimeout(runStep, step.duration);
      } else {
        window.location.href = "/";
      }
    };

    runStep();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="splashscreen">
      <div className="splashscreen-content">
        <div className="logo-container">
          <div className="app-logo">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
            >
              <title>App Logo</title>
              <circle
                cx="40"
                cy="40"
                r="35"
                stroke="#ff6b6b"
                strokeWidth="4"
                fill="none"
              />
              <path
                d="M30 25 L50 40 L30 55 Z"
                fill="#ff6b6b"
              />
            </svg>
          </div>
          <h1 className="app-title">yt-dlp GUI</h1>
          <p className="app-subtitle">Download videos with ease</p>
        </div>

        <div className="loading-section">
          <div className="loading-bar">
            <div
              className="loading-progress"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="loading-text">{loadingText}</p>
        </div>

        <div className="version-info">
          <span>v1.0.0</span>
        </div>
      </div>
    </div>
  );
}

export default Splashscreen;
