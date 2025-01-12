const jsonServer = require('json-server');
const auth = require('json-server-auth');
const os = require('os');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Set up the middleware for authentication
server.db = router.db;
server.use(middlewares);
server.use(auth);
server.use(router);

// Function to get local IP address
function getLocalIp() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

const PORT = 5000;
const HOST = getLocalIp();

// Start the server and listen on the specified port and host
server.listen(PORT, '0.0.0.0', () => {
  console.log(`JSON Server is running at http://${HOST}:${PORT}`);
});
