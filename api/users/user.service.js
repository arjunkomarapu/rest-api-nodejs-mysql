const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into tbl_profile_setup(Profile_FirstName, Profile_LastName, Profile_Mobile, Profile_Email, Profile_Image, Profile_Status)
            values(?,?,?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.mobile,
                data.email,
                data.image,
                data.status

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