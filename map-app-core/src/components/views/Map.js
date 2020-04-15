import React, { useState } from "react";

// import mapimage from "../../images/mapimage.png";

import searchicon from "../../images/icons8-search-24.png";
import expandicon from "../../images/icons8-full-screen-24.png";
import centericon from "../../images/icons8-target-24.png";
import additionalicon from "../../images/icons8-map-editing-24.png";
import layersicon from "../../images/icons8-layers-24.png";

import Footer from "../assets/Footer";
import MapAsset from "../assets/MapAsset";



function Map() {
    let [checked,changed] = useState(false)


 

    return (
        <section className='map-page'>
            <div className="map-header">
                <img className="map-icon" alt="search-icon" src={searchicon}/>
                <img className="map-icon" alt="expand-icon"  src={expandicon}/>
                <button onClick={() => changed(checked = true)}><img className="map-icon" alt="center-icon" src={centericon}/></button>
                <img className="map-icon" alt="additional-icon"  src={additionalicon}/>
                <img className="map-icon" alt="layers-icon"  src={layersicon}/>
            </div>
            <div className="mock-map">
                <MapAsset
                    checked={checked}
                />
            </div>
            <Footer/>
        </section>
    )
}

export default Map 