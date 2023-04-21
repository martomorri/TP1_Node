import countriesData from 'country-codes-list';

export const obtenerMoneda = countryCode => {
    const myCountryCodesObject = countriesData.customList('countryCode', '{currencyCode}');
    if (myCountryCodesObject[countryCode]) {
        return myCountryCodesObject[countryCode];
    } else {
        return null;
    }
}