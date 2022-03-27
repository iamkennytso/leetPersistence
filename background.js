chrome.identity.getAuthToken({interactive: true}, function(token) {
  console.log('got the token', token);
})

const API_KEY = 'AIzaSyCr0z3ea4JUCX-bl_f9qTcp0FORppJv71w';
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
console.log(API_KEY)
function onGAPILoad() {
  // gapi.client.init({
  //   // Don't pass client nor scope as these will init auth2, which we don't want
  //   apiKey: API_KEY,
  //   discoveryDocs: DISCOVERY_DOCS,
  // }).then(function () {
  //   console.log('gapi initialized')
  // }, function(error) {
  //   console.log('error', error)
  // });
  console.log('helloWorld')
}

// window.onloadeddata

