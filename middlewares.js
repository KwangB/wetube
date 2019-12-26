import routes from "./routes";
import multer from "multer";

export const multerVideo = multer({dest:"uploads/videos/"});
export const multerAvatar = multer({dest: "uploads/avatars/"});
export const localsMiddleware = (req,res,next) =>{
    res.locals.siteName = "Wetube";
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || {};
    next();
}

export const onlyPublic = (req, res, next) => {
    if(req.user){
        res.redirect(routes.home);
    }else{
        next();
    }
};

export const onlyPrivate = (req,res,next) => {
    if(req.user){
        next();
    }else{
        res.redirect(routes.home);
    }
}

export const uploadVideo = multerVideo.single("videoFile");
export const uploadAvatar = multerAvatar.single("avatar");