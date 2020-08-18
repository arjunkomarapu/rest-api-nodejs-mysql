const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into tbl_profile_setup(name, email, gender, password, number)
            values(?,?,?,?,?)`,
            [
                data.name,
                data.email,
                data.gender,
                data.password,
                data.number
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error); 
                }
                return callBack(null, results)
            }
        );
    },
    getUsers: callBack => {
        pool.query(
            `select id, name, email, gender, number from tbl_profile_setup`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                    return callBack(null, results);
            }
        );
    }, 
    getUserByUserId: (id, callBack) => {
        pool.query(
            `select id, name, email, gender, number from tbl_profile_setup where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                    return callBack(null, results[0]);
            }
        );
    },
    updateUser: (data, callBack) => {
        pool.query(
            `update tbl_profile_setup set name=?, email=?, gender=?, password=?, number=? where id = ?`
            
            [
                data.name,
                data.email,
                data.gender,
                data.password,
                data.number,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error); 
                }
                return callBack(null, results[0])
            }
        );

    },
    deleteUser: (data, callBack) => {
        pool.query(
            `delete from tbl_profile_setup where id = ?`,
        
        [data,id],
        (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
                return callBack(null, results[0])
            }
        );
    }
};