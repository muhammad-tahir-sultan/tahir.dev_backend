import express from 'express'
import { addNewCategory, deleteCategory, editCategory, getAllCategories, getCategory } from '../controller/category.js'
import { isAdmin, isAuthenticated } from '../auth/isAuthenticated.js'


const router = express.Router()


router.get("/categories", getAllCategories)

router.get("/category/:id", getCategory)

router.post("/category/create", addNewCategory)

router.delete("/category/:id", deleteCategory)

router.put("/category/:id", editCategory)



export default router