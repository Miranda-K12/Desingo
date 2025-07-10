import React from "react";
import styles from "./Locations.module.css";
import Canada from "../../assets/locations/desktop/image-map-canada.png";
import CanadaMap from "../../assets/locations/tablet/image-map-canada.png";
import Australia from "../../assets/locations/desktop/image-map-australia.png";
import AustraliaMap from "../../assets/locations/tablet/image-map-australia.png";
import UK from "../../assets/locations/desktop/image-map-united-kingdom.png";
import UKMap from "../../assets/locations/tablet/image-map-uk.png";
import LocationCard from "../../components/sharedComponents/locationList/LocationList";
function Locations() {
  return (
    <div className={styles.locationWrapper}>
      <LocationCard
        title="Canada"
        location={
          <>
            <p className={styles.subTitle}>Designo Central Office</p>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </>
        }
        contact={
          <>
            <p className={styles.subTitle}>Contact</p>
            <p>P: +1 253-863-8967</p>
            <p>M: contact@designo.co</p>
          </>
        }
        imageSources={{
          default: Canada,
          tablet: CanadaMap,
        }}
      />
      <LocationCard
        title="Australia"
        location={
          <>
            <p className={styles.subTitle}>Designo AU Office</p>
            <p>19 Balonne Street</p>
            <p>New South Wales 2443</p>
          </>
        }
        contact={
          <>
            <p className={styles.subTitle}>Contact</p>
            <p>P : (02) 6720 9092</p>
            <p>M : contact@designo.au</p>
          </>
        }
        imageSources={{
          default: Australia,
          tablet: AustraliaMap,
        }}
        reverse
      />
      <LocationCard
        title="United Kingdom"
        location={
          <>
            <p className={styles.subTitle}>Designo UK Office</p>
            <p>13 Colorado Way</p>
            <p>Rhyd-y-fro SA8 9GA</p>
          </>
        }
        contact={
          <>
            <p className={styles.subTitle}>Contact</p>
            <p>P: 078 3115 1400</p>
            <p>M: contact@designo.uk</p>
          </>
        }
        imageSources={{
          default: UK,
          tablet: UKMap,
        }}
      />
    </div>
  );
}

export default Locations;
