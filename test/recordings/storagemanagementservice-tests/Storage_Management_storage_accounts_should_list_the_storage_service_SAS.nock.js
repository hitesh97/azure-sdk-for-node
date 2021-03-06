// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = '2aa30309-3723-4112-bd0b-79e9f65fc52d';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/resourceGroups/nodeTestGroup678/providers/Microsoft.Storage/storageAccounts/testacc2792/ListServiceSas?api-version=2016-05-01', '*')
  .reply(200, "{\"serviceSasToken\":\"sv=2015-04-05&sr=c&sk=key1&spr=https,http&sip=0.0.0.0-255.255.255.255&st=2016-12-19T08%3A41%3A22Z&se=2016-12-19T09%3A41%3A22Z&sp=rdwlacup&sig=bvUUlMe6w11Fsxt5w9f7r7hvtUcY%2FxEvW%2BSpehyvy6E%3D\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '214',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c0729430-7b8b-4539-940c-ef64f05c3af6',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': 'c0729430-7b8b-4539-940c-ef64f05c3af6',
  'x-ms-routing-request-id': 'JAPANEAST:20161219T084123Z:c0729430-7b8b-4539-940c-ef64f05c3af6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 19 Dec 2016 08:41:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/resourceGroups/nodeTestGroup678/providers/Microsoft.Storage/storageAccounts/testacc2792/ListServiceSas?api-version=2016-05-01', '*')
  .reply(200, "{\"serviceSasToken\":\"sv=2015-04-05&sr=c&sk=key1&spr=https,http&sip=0.0.0.0-255.255.255.255&st=2016-12-19T08%3A41%3A22Z&se=2016-12-19T09%3A41%3A22Z&sp=rdwlacup&sig=bvUUlMe6w11Fsxt5w9f7r7hvtUcY%2FxEvW%2BSpehyvy6E%3D\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '214',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c0729430-7b8b-4539-940c-ef64f05c3af6',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': 'c0729430-7b8b-4539-940c-ef64f05c3af6',
  'x-ms-routing-request-id': 'JAPANEAST:20161219T084123Z:c0729430-7b8b-4539-940c-ef64f05c3af6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 19 Dec 2016 08:41:23 GMT',
  connection: 'close' });
 return result; }]];