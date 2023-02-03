const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'rs_clone_server_user',
    password: '2HDhkcaEZhYKyUVzmo4BZmSlwEboEEPp',
    host: 'dpg-cfefcj6n6mpu0ucpms0g-a.frankfurt-postgres.render.com',
    port: 5432,
    database: 'rs_clone_server'
});

module.exports = pool;

// const { Client } = require('pg')
// const client = new Client({
//     user: 'rs_clone_server_user',
//     password: '2HDhkcaEZhYKyUVzmo4BZmSlwEboEEPp',
//     host: 'dpg-cfefcj6n6mpu0ucpms0g-a.frankfurt-postgres.render.com',
//     port: 5432,
//     database: 'rs_clone_server',
// })

// const connectDb = async () => {
//     try {
//         const pool = new Client({
//             user: process.env.PGUSER,
//             host: process.env.PGHOST,
//             database: process.env.PGDATABASE,
//             password: process.env.PGPASSWORD,
//             port: process.env.PGPORT,
//         })
//     await pool.connect()
// }
    // connectDb()