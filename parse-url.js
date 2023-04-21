import url from 'url';

// Esto era el EJ5
/*export const parseUrl = a => {
    let parsedUrl = url.parse(a, true);
    return {
        "host": parsedUrl.host,
        "pathname": parsedUrl.pathname,
        "parametros": parsedUrl.query
    }
}*/

// Esto es el EJ6
export const parseUrl = a => {
    try {
        let parsedUrl = url.parse(a, true);
        return {
            "host": parsedUrl.host,
            "pathname": parsedUrl.pathname,
            "parametros": parsedUrl.query
        }
    } catch (error) {
        return error;
    }
}