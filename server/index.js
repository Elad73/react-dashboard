const express = require('express');
const path = require('path');
require('dotenv').config();

const { formatQuery } = require('react-querybuilder');
const processSQL = require('./processSQL');
const keys = require('./config/keys');

const PORT = keys.port || 5000;
const DEV_MODE = keys.devMode === 'true';

const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    port: 9010,
    password: 'app',
    connectionLimit: 5,
});

const app = express();

app.use(express.static(path.join(__dirname, '/../client/build')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

app.post('/api/sales/', async (req, res) => {
    console.log('in sales');
    const query = req.body;
    console.log('sales: req.body -> ' + query);
    const { sql, params } = formatQuery(query, 'parameterized');
    const whereClause = processSQL(sql);
    const testRawData = `SELECT * FROM sales WHERE ${whereClause} ORDER BY order_id ASC`;
    const selectRawData = `SELECT * FROM sales limit 10;`;
    console.log(selectRawData);
    console.log(params);

    let data = [];
    let conn;
    try {
        //data = (await mysql.createPool.query(selectRawData, params)).rows;
        conn = await pool.getConnection();
        console.log('established');
        data = await conn.query(selectRawData);
        console.log(data);
    } catch (err) {
        console.log('EXCAPTION data: ' + err);
        res.json({ data: [], chartData: [], err });
        return;
    }

    //const chartSQL = `SELECT date_trunc('month', order_date)::date order_month, SUM(total_revenue) revenue, SUM(total_profit) profit FROM (${selectRawData}) sales_raw GROUP BY date_trunc('month', order_date) ORDER BY 1`;
    const chartSQL = `SELECT * FROM app.drup_menu limit 10;`;
    console.log(chartSQL);
    let chartData = [];
    try {
        //chartData = (await pool.query(chartSQL, params)).rows;
        conn = await pool.getConnection();
        console.log('established');
        chartData = await conn.query(chartSQL);
        console.log(chartData);
    } catch (err) {
        console.log('EXCAPTION chartData: ' + err);
        res.json({ data: [], chartData: [], err });
        return;
    }
    
    res.json({ data, chartData, err: null });
    if (conn) return conn.end();
    
    
    // finally {
    //     if (conn) return conn.end();
    // }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
