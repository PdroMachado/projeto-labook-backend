import express from "express"
import { PostController } from "../controller/PostController";

import { PostDatabase } from "../database/PostDatabase";

import { IdGenerator } from "../services/IdGenerator";
import { UserDatabase } from "../database/UserDatabase";
import { TokenMenanger } from '../services/TokenMenager';
import { PostBusiness } from '../business/PostBusinness';

export const postRouter = express.Router()
const postController = new PostController(
    new PostBusiness(
        new UserDatabase(),
        new PostDatabase(),
        new TokenMenanger(),
        new IdGenerator()
    )
);

//getAllPosts
postRouter.get('/', postController.getAllPosts);
//CreatePost
postRouter.post('/', postController.createPost);
//editPost
postRouter.put('/:id', postController.editPost);
//deletePost
postRouter.delete('/:id', postController.deletePost);
//likeDislike
postRouter.put('/:id/like', postController.likeDislikePost);