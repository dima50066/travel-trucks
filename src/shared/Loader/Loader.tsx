import animationDataUrl from "/images/Loader.json?url";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const Loader: React.FC = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await fetch(animationDataUrl);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error fetching animation data:", error);
      }
    };

    fetchAnimationData();
  }, []);

  if (!animationData) {
    return <div>Loading animation data...</div>;
  }

  const styles = {
    height: 200,
    width: 200,
  };

  return (
    <div className="loader-container">
      <Lottie
        animationData={animationData}
        style={styles}
        loop={true}
        autoplay={true}
      />
    </div>
  );
};

export default Loader;
