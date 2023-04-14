import url from 'url';

//export const parseUrl = a => url.parse(a, true);

export const parseUrl = a => {
    try {
        return url.parse(a, true);
    } catch (error) {
        return error;
    }
}