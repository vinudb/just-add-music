import { corsURL, wrapperApi } from "../utils";
export const interactMusic = (func, id, type, message) => {
    const postData = func === "comment" ?
        { id, message, type, function: func }
        :
        { id, function: func };
    return fetch(corsURL + wrapperApi, {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(resp => {
            return resp.json();
        })
        .catch((e) => { console.log(e); alert("Oops!! Something went wrong. Please try later.") });
}
