const Server = require('./models/server');
require('dotenv').config();
const cors = require('cors');

const server = new Server();
server.listen();