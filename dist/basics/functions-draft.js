"use strict";
function sendRequest(data, cb) {
    return cb({ data: 'Hi there!' });
}
let vb = sendRequest('Send this!', (response) => {
    console.log(response);
    return true;
});
console.log(vb);
let responses = { data: 'Hi there!' };
console.log(responses);
//# sourceMappingURL=functions-draft.js.map