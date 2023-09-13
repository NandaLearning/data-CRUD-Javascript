import user from "../models/UserModel.js";
import UserModel from "../models/UserModel.js";

export const getUsers = async(req ,res) => {
    try{
        const response = await UserModel.findAll();
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);

    }
}

export const getUsersById = async(req ,res) => {
    try{
        const response = await UserModel.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);

    }
}

export const createUsers = async(req ,res) => {
    try{
        await user.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error){
        console.log(error.message);

    }
}


export const updateUsers = async(req ,res) => {
    try{
        await user.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error){
        console.log(error.message);

    }
}


export const delateUsers = async(req ,res) => {
    try{
        await user.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Delated"});
    } catch (error){
        console.log(error.message);

    }
}