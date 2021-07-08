// require your server and launch it
const server = require('./api/server');

const PORT = 4600

server.listen(PORT, () => {
    console.log('\n* Server Running on http://localhost:4600 *\n');
})
