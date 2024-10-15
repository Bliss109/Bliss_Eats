import React from 'react'; // Importing React
import './AppDownload.css'; // Importing CSS for AppDownload styling
import { assets } from '../../assets/assets'; // Importing assets for app download platforms

const AppDownload = () => {
  return (
    <div className="app-download" id='app-download'> {/* Main container for app download section */}
      <p>For Better Experience Download <br /> Bliss Eats App</p> {/* Text prompting download */}
      <div className="app-download-platforms"> {/* Container for download platform icons */}
        <img src={assets.google_play} alt="Google Play Store" /> {/* Google Play Store icon */}
        <img src={assets.app_store} alt="Apple App Store" /> {/* Apple App Store icon */}
      </div>
    </div>
  );
}

export default AppDownload; // Exporting AppDownload component for use in other parts of the application

