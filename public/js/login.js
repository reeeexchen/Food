var mysql = require('mysql');
var DATABASE = 'food';
var T_USER = 't_user';
var T_ARTICLE = 't_article';
var T_COMMENT = 't_comment';
var T_IMAGE = 't_image';
var T_FAV = 't_fav';


// 创建连接
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'mysqlroot',
    port: '3306',
    database: DATABASE,
});

function login(username, password) {
    console.log(username);
    console.log(password);
    connection.connect();
    connection.query(
        'SELECT * FROM ' + T_USER,
        function selectUser(err, result, fields) {
            if (err) {
                throw err;
            }
            if (result) {
                console.log(result);
            }
            connection.end();
        }
    );
}