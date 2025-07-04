
import express from "express"
import { addTestimonial, getAllTestimonials, deleteTestimonial, approveTestimonial } from "../controller/testimonial.js";
// import { isAdmin, isAuthenticated } from "../auth/isAuthenticated.js";


const router = express.Router()

router.get("/testimonials", getAllTestimonials)

router.post("/testimonial/add", addTestimonial)

router.put("/testimonial/:id", approveTestimonial)

router.delete("/testimonial/:id", deleteTestimonial)



export default router;