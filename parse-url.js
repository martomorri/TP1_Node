import url from 'url';

// Esto era el EJ5
//export const parseUrl = a => url.parse(a, true);

// Esto es el EJ6
export const parseUrl = a => {
    try {
        return url.parse(a, true);
    } catch (error) {
        return error;
    }
}