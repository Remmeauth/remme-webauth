const host = `webauth-testnet.remme.io`

export const hostRequestCert = `https://${host}:444/`;

export const homeUrl = '/api/home';
export const certificateUrl = '/api/certificate';
export const registerUrl = '/api/register';
export const google2FAUrl = `/api/2fa`;

// for token
export const secret = 'thnjiugc';

export const networkConfig = {
  nodeAddress: host,
  nodePort: 443,
  sslMode: true,
};
