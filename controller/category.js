import Category from "../models/category.js"

export const getAllCategories = async (req, res) => {
    try {
        console.log('getAllCategories')
        const categories = await Category.find()
        console.log('categories', categories)
        return res.json({
            success: true,
            categories
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: error.message
        })
    }
}

export const addNewCategory = async (req, res) => {
    try {
        const { category } = req.body
        await Category.create({
            category
        })

        return res.status(201).json({
            success: true,
            message: "Category Created Successfully"
        })
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}


export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params

        await Category.findByIdAndDelete(id)

        return res.status(200).json({
            success: true,
            message: "Category Deleted Successfully"
        })
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}
export const editCategory = async (req, res) => {
    try {
        const { id } = req.params

        const { category } = req.body


        let categoryFound = await Category.findById(id)

        categoryFound.category = category

        await categoryFound.save()

        return res.status(200).json({
            success: true,
            message: "Category Updated Successfully",

        })
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}
export const getCategory = async (req, res) => {
    try {
        const { id } = req.params

        let category = await Category.findById(id)

        return res.status(200).json({
            success: true,
            category
        })
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}