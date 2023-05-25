const db = require('./db');
var arr = [
    {id: 0, imgUrl: '/server/assets/iShot_2022-05-29_15.40.54.png'},
    {id: 1, imgUrl: '/server/assets/iShot_2022-05-29_15.40.54.png'},
    {id: 2, imgUrl: '/server/assets/iShot_2022-05-29_15.40.54.png'}
];
// ! CREATE
//? sql: INSERT INTO banner SET imgUrl='XXXX'
// ! UPDATE
//? sql: UPDATE banner SET imgUrl='XXX' WHERE id=1;
// ! DELETE
//? sql: delete from banner
// 对数组进行for循环，并插入到mysql中的banner表
arr.map(val => {
    let sql = `insert into banner values (${val.id}, '${val.imgUrl}')`;
    db.query(sql, (err, data) => {
        if (err) {
            throw err;
        }
        console.log(data);
    });
});


