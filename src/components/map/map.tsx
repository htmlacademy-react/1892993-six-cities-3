import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map';
import { Offer } from '../../types/offer';
import { City } from '../../types/city';
import {MARKERS} from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: Offer[];
  selectedOffer: Offer | undefined;
  city: City;
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
  const {offers, selectedOffer, city} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
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
  }, [map, offers, selectedOffer]);

  return <section className="cities__map map" ref={mapRef}></section>;
}

export default Map;
