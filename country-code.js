import countriesData from 'country-codes-list';

export const obtenerMoneda = countryCode => {
    const myCountryCodesObject = countriesData.customList('countryCode', 'La moneda de {countryNameEn} es {currencyCode}');
    return myCountryCodesObject[countryCode];
}