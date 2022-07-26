import { FunctionComponent } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const mapState = {
  center: [55.761777, 37.556368],
  zoom: 14
};

export const MagnitPlacemark: FunctionComponent = () => (
  <YMaps >
    <Map state={mapState} width={1230} height={525}>
      <Placemark
        geometry={
          [55.751574, 37.573856]
        }
        properties={{
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
        }}
        options={{
          iconLayout: 'default#image',
          iconImageHref: 'images/myIcon.gif',
          iconImageSize: [30, 42],
          iconImageOffset: [-3, -42]
        }}
      />
    </Map>
  </YMaps>
);