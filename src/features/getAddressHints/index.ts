const url =
    "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const token = "a23c19cc1220ab29c9ffae69ec82c5f638c40cff";

const getAddressHints = (text: string) =>
    fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Token " + token,
        },
        body: JSON.stringify({ query: text }),
    })
        .then((response) => response.json())
        .catch((error) => console.log("error", error));

export default getAddressHints;
