import { FunctionComponent } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import placeMark from '../../assets/images/magnitPlace.svg'

const mapState = {
  center: [55.762477, 37.555625],
  zoom: 15,
  behaviors: ["drag", "disable('scrollZoom')"],
};

export const Location: FunctionComponent = () => {

  return (
    <YMaps preload>
      <Map defaultState={mapState} width={'100%'} height={'100%'}>
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
