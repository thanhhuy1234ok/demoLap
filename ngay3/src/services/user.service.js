const userModel = require('../models/user.model');
const postService = require('./post.service');

class UserService {
    async createUser(user) {
        try {
            const existingUser = await userModel.findOne({ email: user.email });
            if (existingUser) {
                throw new Error('Email already exists');
            }

            const newUser = new userModel({ ...user });
            await newUser.save();
            return newUser;
        } catch (err) {
            if (err.code === 11000) {
                throw new Error('Email already exists');
            }
            throw err;
        }
    }

    async detailUser(id) {
        return await userModel.findById(id)
    }

    async getListUser() {
        try {
            const dataUser = await userModel.find();
            return dataUser
        } catch (error) {
            throw error;
        }
    }

    async deleteUser(id) {
        try {

            const user = await userModel.findById(id);
            if (!user) {
                return { success: false, message: 'User not found' };
            }
            await postService.deletePostsByUserId(id);


            const deletedUser = await userModel.findByIdAndDelete(id);

            return { success: true, message: 'User deleted successfully', user: deletedUser };
        } catch (error) {
            return { success: false, message: `Error deleting user: ${error.message}` };
        }
    }

    async updateUser(id, userUpdate) {
        return await userModel.findOneAndUpdate({ _id: id }, { ...userUpdate }, { new: true })

    }

    async findEmail(email) {
        await userModel.find({ email: email })
        return 0
    }
}



module.exports = new UserService