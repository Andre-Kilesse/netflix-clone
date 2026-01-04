import express from "express";
import { getSearchHistory, removeItemFromSearchHistory, searchMovie, searchPerson, searchTv } from "../controllers/search.controller.js";

const router = express.Router();

router.get("/person/:querry", searchPerson);
router.get("/movie/:querry", searchMovie);
router.get("/tv/:querry", searchTv);

router.get("/history", getSearchHistory);
router.delete("/history/:id", removeItemFromSearchHistory)

export default router;