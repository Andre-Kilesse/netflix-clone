import express from "express";
import { searchMovie, searchPerson, searchTv } from "../controllers/search.controller.js";

const router = express.Router();

router.get("/person/:querry", searchPerson);
router.get("/movie/:querry", searchMovie);
router.get("/tv/:querry", searchTv);

export default router;