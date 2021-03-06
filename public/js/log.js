if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error,{enableHighAccuracy:true});
}
function success(position) {
    const coordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    }
    setCookie("geo", JSON.stringify(coordinates),{secure: false, 'max-age': 3600})
}
function error(){}

function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        // add other defaults here if necessary
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}