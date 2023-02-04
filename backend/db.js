const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'rs_clone_server_user',
    password: '2HDhkcaEZhYKyUVzmo4BZmSlwEboEEPp',
    host: 'dpg-cfefcj6n6mpu0ucpms0g-a.frankfurt-postgres.render.com',
    port: 5432,
    database: 'rs_clone_server',
    ssl: true,
});

// pool.query('Select * from users', (err, res) => {
//     if (!err) {
//         console.log(res.rows);
//     } else {
//         console.log(err);
//     }
//     pool.end;
// })

module.exports = pool;