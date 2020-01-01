import express from "express";
import routes from "../routes";
import { videoDetail, 
    getEditVideo, 
    deleteVideo, 
    getUpload, 
    PostUpload,
    postEditVideo} from "../controllers/videoController";
import { uploadVideo,onlyPrivate } from "../middlewares";

const videoRouter = express.Router();

//upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, PostUpload);
//video detail
videoRouter.get(routes.videoDetail(), videoDetail);
//edit video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;