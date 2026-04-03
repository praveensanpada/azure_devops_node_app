export const home = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Welcome to DevOps GET API project"
    });
};

export const healthCheck = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "API is healthy",
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
};

export const getUsers = async (req, res) => {
    const users = [
        { user_id: 1, name: "Buddy", email: "buddy@example.com", status: 1 },
        { user_id: 2, name: "Alice", email: "alice@example.com", status: 1 },
        { user_id: 3, name: "Bob", email: "bob@example.com", status: 0 }
    ];

    return res.status(200).json({
        success: true,
        data: users
    });
};

export const getUserById = async (req, res) => {
    const users = [
        { user_id: 1, name: "Buddy", email: "buddy@example.com", status: 1 },
        { user_id: 2, name: "Alice", email: "alice@example.com", status: 1 },
        { user_id: 3, name: "Bob", email: "bob@example.com", status: 0 }
    ];

    const { id } = req.params;
    const user = users.find(item => item.user_id === Number(id));

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    return res.status(200).json({
        success: true,
        data: user
    });
};

export const getAppInfo = async (req, res) => {
    return res.status(200).json({
        success: true,
        app_name: process.env.APP_NAME || "DevOps GET API",
        environment: process.env.APP_ENV || "development",
        version: "1.0.0"
    });
};