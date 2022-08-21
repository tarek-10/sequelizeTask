const  Sequelize  = require('sequelize');
const sequelize = require('../Configration/DB.config');

const userModels = sequelize.define("user",{

    name:{
        type:Sequelize.STRING,
      
    },

    email:{
        type:Sequelize.STRING,
        unique:true,
    },
    age:{
        type:Sequelize.INTEGER,
    },
    password:{
        type:Sequelize.STRING,
    }
})

module.exports = userModels;