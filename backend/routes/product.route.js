import express from "express";
const router = express.Router();
router.get("/",protectRoute,adminRoute,getAllProductes)
export default router;

