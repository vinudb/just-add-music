import { domain, corsURL,fetchApi } from "../utils";

export const fetchMusicList = () => {
    return fetch(corsURL + domain + fetchApi, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })
        .then(resp => {
            return resp.json();
        });
}
    