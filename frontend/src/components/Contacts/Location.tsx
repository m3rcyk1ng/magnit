import { FunctionComponent } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import placeMark from '../../assets/images/MagnitPlacemark.png'

const mapState = {
  center: [55.762477, 37.555625],
  zoom: 14
};

export const Location: FunctionComponent = () => (
  <YMaps >
    <Map defaultState={mapState} width={1230} height={592}>
      <Placemark
        geometry={
          [55.762477, 37.555625]
        }
        properties={{
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
        }}
        options={{
          iconLayout: 'default#image',
          iconImageHref: placeMark,
          iconImageSize: [188, 93],
          // iconImageOffset: [-3, -42]
        }}
      />
    </Map>
  </YMaps>
);
