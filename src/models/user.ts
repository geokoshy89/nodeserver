import {Sequelize, Model, DataTypes} from 'sequelize';
import * as bcrypt from 'bcrypt';
const sequelize = new Sequelize("mysql://root:pass@localhost:3306/campaign_db");

interface UserAttributes {
    id?: number;
    name: string;
    password:string;
    email: string;
    phoneNumber:string;
    ratePerCall:string;
    balance:number;
    activeStatus:boolean;
    pulse:string;
    address:string;
    kycStatus:string;
    role:string;
  }
export class UserModel extends Model<UserAttributes>{
    id?: number;
    name: string;
    password:string;
    email: string;
    phoneNumber:string;
    ratePerCall:string;
    balance:number;
    activeStatus:boolean;
    pulse:string;
    address:string;
    kycStatus:string;
    role:string;
}

UserModel.init(
    {
        id:{
            type:DataTypes.INTEGER.UNSIGNED,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull: true
        },
        password:{
            type:DataTypes.STRING,
            allowNull: true
        },
        email:{
            type:DataTypes.STRING,
            allowNull: true
        },
        phoneNumber:{
            type:DataTypes.STRING,
            allowNull: true,
            field:'phone_number'
        },
        ratePerCall:{
            type:DataTypes.STRING,
            allowNull: true,
            field:'ratepercall'
        },
        balance:{
            type:DataTypes.FLOAT,
            allowNull: true
        },
        pulse:{
            type:DataTypes.STRING,
            allowNull: true
        },
        address:{
            type:DataTypes.STRING,
            allowNull: true
        },
        activeStatus:{
            type:DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue:true,
            field:'active_status'
        },  
        kycStatus:{
            type:DataTypes.STRING,
            allowNull: true,
            field:'kyc_status'
        },
        role:{
            type:DataTypes.STRING,
            allowNull: true
        }

    },
    {
        tableName:'users',
        sequelize,
        timestamps: false

    }
);

UserModel.beforeCreate((user, options) => {
    bcrypt.genSalt(10, 
        (err, salt)=> {
            bcrypt.hash(user.password, salt, function(err, hash) {
            user.password=hash;
        });
    });
});