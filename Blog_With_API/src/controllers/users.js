import { httpConnection as http } from '../js/httpConnection';

export const searchUserById = (id) => {
    http().get(localUserEndpoint(id)).then(data => {
        document.getElementById('modalUser').innerHTML = `<p>Email - ${data.email}</p>
        <p>Username - ${data.username}</p>`
    });
}





