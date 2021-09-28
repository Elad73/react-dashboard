// const requireLogin = require('../middlewares/requireLogin');
const { formatQuery } = require('react-querybuilder');
const processSQL = require('../processSQL');

const keys = require('../config/keys');

// db connection
const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: keys.mySqlHost,
    user: keys.mySqlUser,
    port: keys.mySqlPort,
    password: keys.mySqlPass,
    database: keys.mySqlDatabase,
    connectionLimit: 5,
});

module.exports = (app) => {
    // @route  GET api/v1/reports/performance
    // @desc   Get performance
    // @access Private

    // app.get('/api/v1/reports/performance/:customerId', requireLogin, async (req, res) => {
    app.get('/api/v1/reports/performance', async (req, res) => {
        console.log('In get /api/v1/reports/performance');
        // get the report from the db and send it back to the client
        let dbRes = [];

        try {
            conn = await pool.getConnection();
            const query = 'SELECT * FROM drup_watchdog limit 500';
            dbRes = await conn.query(query);
            console.log('returned from DB: ' + JSON.stringify(dbRes)); //[ {val: 1}, meta: ... ]
            // const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
            // console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
        } catch (err) {
            console.log('db error: ' + err); //[ {val: 1}, meta: ... ]
            throw err;
        } finally {
            if (conn) {
                console.log('closing connection');
                conn.end();

                console.log('sending res to client');
                res.send(dbRes);                
            }
        }

        // const categories = await Category.find({
        //     default: 'true'
        // });

        // console.log(
        //     'categoriesRoute -> without parentId: ' + JSON.stringify(categories)
        // );
        // res.send(categories);
    });
};

// app.post('/api/sales/', async (req, res) => {
//     console.log('in /api/sales/');
//     // const query = req.body;
//     // console.log('sales: req.body -> ' + query);
//     // const { sql, params } = formatQuery(query, 'parameterized');
//     // const whereClause = processSQL(sql);
//     // const testRawData = `SELECT * FROM watchdog WHERE ${whereClause} ORDER BY order_id ASC`;
//     // const selectRawData = `SELECT * FROM watchdog limit 10;`;
//     // console.log(selectRawData);
//     // console.log(params);

//     const query = `SELECT * FROM drup_watchdog limit 10;`;

//     let data = [];
//     let conn;
//     try {
//         //data = (await mysql.createPool.query(selectRawData, params)).rows;
//         conn = await pool.getConnection();
//         console.log('established');
//         data = await conn.query(query);
//         console.log(data);
//     } catch (err) {
//         console.log('EXCAPTION data: ' + err);
//         res.json({ data: [], chartData: [], err });
//         return;
//     }

//     //const chartSQL = `SELECT date_trunc('month', order_date)::date order_month, SUM(total_revenue) revenue, SUM(total_profit) profit FROM (${selectRawData}) sales_raw GROUP BY date_trunc('month', order_date) ORDER BY 1`;
//     const chartSQL = `SELECT * FROM app.drup_menu limit 10;`;
//     console.log(chartSQL);
//     let chartData = [];
//     try {
//         //chartData = (await pool.query(chartSQL, params)).rows;
//         conn = await pool.getConnection();
//         console.log('established');
//         chartData = await conn.query(chartSQL);
//         console.log(chartData);
//     } catch (err) {
//         console.log('EXCAPTION chartData: ' + err);
//         res.json({ data: [], chartData: [], err });
//         return;
//     }

//     res.json({ data, chartData, err: null });
//     if (conn) return conn.end();

//     // finally {
//     //     if (conn) return conn.end();
//     // }
// });
