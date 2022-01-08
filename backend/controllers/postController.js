const Post = require('../models/postModel');

exports.getAllPosts = async (req, res, next) => {
    try {
        console.log('sess', req.session.id);
        console.log('sess', req.session);
        
        const posts = await Post.find();
        res.status(200).json({
            status : 'success',
            results : posts.length,
            data : { 
                posts
            }
        });
    }
    catch(e) {
        res.status(400).json({
            status: 'error',
        });
    }
}

exports.createPost = async (req, res, next) => {
    try {
        const post = await Post.create(req.body);
        res.status(200).json({
            status: 'success',
            data: {
                post
            }
        });
    }
    catch (e) {
        res.status(400).json({
            status: 'error',
            msg : e
        });
    }
}

exports.getPost = async (req,res,next) => {
    try {
        console.log('params', req.params);
        const post = await Post.find({"_id": req.params.id})
        res.status(200).json({
            status : 'success',
            data : post
        })
    } catch (e) {
        res.status(400).json({
            status : 'error',
            msg : e
        });
    }
}

exports.updatePost = async (req,res,next) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators : true,
        });

        res.status(200).json({
            status : 'success',
            data: post
        })
    } catch (e) {
        res.status(400).json({
            status : 'error',
            msg : e
        })
    }
}

exports.deletePost = async (req,res,next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        
        res.status(200).json({
            status : 'success',
        })

    } catch (error) {
        res.status(400).json({
            status : 'error',
            msg : e
        })
    }
}