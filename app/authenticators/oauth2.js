import Ember from 'ember';
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend( {
    serverTokenEndpoint: `http://localhost:3000/token`,
    makeRequest(url, data) {
        console.log(data);
        var client_id = '12345';
        var client_secret = 'secret';
        data.grant_type = 'password';
        return Ember.$.ajax({
            url: this.serverTokenEndpoint,
            type: 'POST',
            data: data,
            dataType: 'json',
            datatype : "application/x-www-form-urlencoded",
            // contentType: 'application/x-www-form-urlencoded',
            crossDomain: true,
            headers: {
                Authorization: "Bearer " + btoa(client_id + ":" + client_secret)
            }
        });
    }
});