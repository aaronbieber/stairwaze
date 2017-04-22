// Insert your auth token here.
const token = 'asdf';

export default function addAuthHeader(headers = {}) {
  return Object.assign({}, headers, { 'Auth-Token': token });
}
