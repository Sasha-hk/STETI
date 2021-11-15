import { API_URL, API_URL_NEWS } from './APIUrls'

function checkSlash(toCheck) {
    let output = toCheck
    if (toCheck.slice(-1) == '/') {
        output = toCheck.slice(0, -1)
    }
    if (toCheck.slice(0, 1) == '/') {
        output = output.slice(1)
    }
    return output
}

export function combineUrl({baseUrl = API_URL, parts=[]}) {
    let output = ''  
    if (baseUrl.slice(-1) != '/') {
        output = baseUrl + '/'
    }
    else {
        output = baseUrl
    }
    for (let i = 0; i < parts.length; i++) {
        output += checkSlash(parts[i]) + '/'
    }

    return output
}