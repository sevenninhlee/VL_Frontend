import { get, find, includes, isArray } from './lodash.util';

const findStateCityFromAddressComponents = (addressComponents: any) => {
  const cityComponent = find(addressComponents, (component) => {
    const types = get(component, 'types', []);
    return includes(types, 'administrative_area_level_1');
  });

  if (cityComponent) {
    return get(cityComponent, 'short_name');
  }
  return '';
};

const findCityFromAddressComponents = (addressComponents: any) => {
  const cityComponent = find(addressComponents, (component) => {
    const types = get(component, 'types', []);
    return includes(types, 'locality') || includes(types, 'administrative_area_level_2');
  });

  if (cityComponent) {
    return get(cityComponent, 'long_name');
  }
  return '';
};

const findStreetFromAddressComponents = (addressComponents: any) => {
  const streetComponent = find(addressComponents, (component) => {
    const types = get(component, 'types', []);
    return includes(types, 'route');
  });

  const streetNumComponent = find(addressComponents, (component) => {
    const types = get(component, 'types', []);
    return includes(types, 'street_number');
  });

  if (streetNumComponent && streetComponent) {
    return get(streetNumComponent, 'long_name') + ' ' + get(streetComponent, 'long_name');
  } else {
    return get(streetComponent, 'long_name', '');
  }
};

export const extractStateCityFromGeoPlaceDetail = (placeDetail: any) => {
  if (placeDetail && isArray(get(placeDetail, 'address_components'))) {
    return findStateCityFromAddressComponents(get(placeDetail, 'address_components'));
  }

  return '';
};

export const extractCityFromGeoPlaceDetail = (placeDetail: any) => {
  if (placeDetail && isArray(get(placeDetail, 'address_components'))) {
    return findCityFromAddressComponents(get(placeDetail, 'address_components'));
  }

  return '';
};

export const extractStreetFromGeoPlaceDetail = (placeDetail: any) => {
  if (placeDetail && isArray(get(placeDetail, 'address_components'))) {
    return findStreetFromAddressComponents(get(placeDetail, 'address_components'));
  }

  return '';
};

export const extractCountryComponentFromGeoPlaceDetail = (placeDetail: any) => {
  if (placeDetail && isArray(get(placeDetail, 'address_components'))) {
    const addressComponents = get(placeDetail, 'address_components');
    const countryComponent = find(addressComponents, (component) => {
      const types = get(component, 'types', []);
      return includes(types, 'country');
    });

    return countryComponent;
  }

  return;
};

export const extractCountryCodeFromGeoPlaceDetail = (placeDetail: any) => {
  const countryComponent = extractCountryComponentFromGeoPlaceDetail(placeDetail);

  return get(countryComponent, 'short_name');
};

export const extractPostalCodeFromGeoPlaceDetail = (placeDetail: any) => {
  if (placeDetail && isArray(get(placeDetail, 'address_components'))) {
    const addressComponents = get(placeDetail, 'address_components');
    const cityComponent = find(addressComponents, (component) => {
      const types = get(component, 'types', []);
      return includes(types, 'postal_code');
    });

    if (cityComponent) {
      return get(cityComponent, 'long_name');
    }
  }

  return '';
};
