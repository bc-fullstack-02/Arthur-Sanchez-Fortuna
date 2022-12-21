// isso daki foi feito pra gilizar na autenticação pelo q eu entendi
// ai quando prescisa só importa, aula 10 min 1H e 29

export function getAuthHeader() {
    const token = localStorage.getItem("accesstoken");
    const authHeader = {
        headers: {
            Authorization: 'Bearer ${token}'
        },
    };
    return authHeader;
};