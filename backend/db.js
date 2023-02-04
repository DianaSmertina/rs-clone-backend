const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'rs_clone_server_user',
    password: '2HDhkcaEZhYKyUVzmo4BZmSlwEboEEPp',
    host: 'dpg-cfefcj6n6mpu0ucpms0g-a.frankfurt-postgres.render.com',
    port: 5432,
    database: 'rs_clone_server',
    ssl: true,
});

module.exports = pool;