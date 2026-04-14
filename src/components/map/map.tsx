import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map';
import { Offer } from '../../types/offer';
import {MARKERS, CITIES} from '../../const';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

type MapProps = {
  offers: Offer[];
  selectedOffer: Offer | undefined;
  currentCity: string;
  mapClassName: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: MARKERS.URL_MARKER_DEFAULT,
  iconSize: [23, 36],
  iconAnchor: [23, 36]
});

const currentCustomIcon = new Icon({
  iconUrl: MARKERS.URL_MARKER_ACTIVE,
  iconSize: [23, 36],
  iconAnchor: [23, 36]
});

function Map(props: MapProps): JSX.Element {
  const {offers, selectedOffer, currentCity, mapClassName} = props;
  const cityArr = CITIES.filter((item) => item.name === currentCity);
  const city = cityArr[0];

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer, city.location.latitude, city.location.longitude, city.location.zoom]);

  return <section className={`${mapClassName} map`} ref={mapRef}></section>;
}

export default Map;
