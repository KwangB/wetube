import express from "express";
import routes from "../routes";
import { videos2, 
    videoDetail, 
    editVideo, 
    deleteVideo, 
    getUpload, 
    PostUpload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, PostUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter