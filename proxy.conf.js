const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:8092/',
    secure: false,
    LogLevel:'debug'
  }
];

module.exports = PROXY_CONFIG;
