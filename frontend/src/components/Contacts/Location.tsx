import {FunctionComponent, useEffect, useState} from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import placeMark from '../../assets/images/magnitPlace.svg'
import {useWindowDimensions} from '../../utils/Functions';

const mapState = {
  center: [55.762477, 37.555625],
  zoom: 15,
  behaviors: ["drag", "disable('scrollZoom')"],
};

export const Location: FunctionComponent = () => {
  const { width } = useWindowDimensions();
  const [mapSize, setMapSize] = useState({ width: 1230, height: 592 });

  useEffect(() => {
    if (width > 1600) {
      setMapSize({width: 1230, height: 592});
    }
    if (width < 1600) {
      setMapSize({width: 1000, height: 400});
    }
    if (width <= 1280) {
      setMapSize({width: 800, height: 400});
    }
    if (width < 1100) {
      setMapSize({width: 600, height: 300});
    }
    if (width < 700) {
      setMapSize({width: 340, height: 320});
    }
  }, [width])

  return (
    <YMaps preload>
      <Map defaultState={mapState} width={mapSize.width} height={mapSize.height}>
        <Placemark
          geometry={
            [55.762477, 37.555625]
          }
          options={{
            iconLayout: 'default#image',
            iconImageHref: placeMark,
            iconImageSize: [80, 80],
          }}
        />
      </Map>
    </YMaps>
  );
}
