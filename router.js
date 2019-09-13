import express from "express";

export const UserRouter = express.Router();

UserRouter.get("/",(req,res) => res.send("user index"))
UserRouter.get("/edit",(req,res) => res.send("user edit"))
UserRouter.get("/password",(req,res) => res.send("user password"))
