import React from "react";
import mapicon from "../../images/icons8-map-marker-24.png";
import tripicon from "../../images/icons8-treasure-map-24.png";
import discovericon from "../../images/icons8-compass-24.png";
import savedicon from "../../images/icons8-selective-highlighting-24.png";
import dashboardicon from "../../images/icons8-medium-icons-24.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";



const Footer = () => {
    return (
        <div className="map-footer">
            <Link to='/' className="map-icon"><img alt="map-icon"  src={mapicon}/></Link>
            <Link to='/Trip' className="map-icon"><img alt="triph-icon"  src={tripicon}/></Link>
            <Link to='/Discover' className="map-icon"><img alt="discover-icon"  src={discovericon}/></Link>
            <Link to='/Saved' className="map-icon"><img alt="saved-icon"  src={savedicon}/></Link>
            <Link to='/Dashboard' className="map-icon"><img alt="dashboard-icon"  src={dashboardicon}/></Link>
        </div>
    )
}

export default Footer 