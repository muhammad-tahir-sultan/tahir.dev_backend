import User from "../models/user.js";

export const isAuthenticated = async (req, res, next) => {
    try {
        // Get user ID from request headers
        const userId = req.headers['user-id'];
        
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Please Login First"
            });
        }
        
        // Find user by ID
        const user = await User.findById(userId);
        
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }
        
        // Set user in request object
        req.user = user;
        
        // Continue to the next middleware/route handler
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const isAdmin = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Please Login First"
            });
        }
        
        if (req.user.role !== "admin") {
            return res.status(401).json({
                success: false,
                message: "You are not authorized to access this resource"
            });
        }
        
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}