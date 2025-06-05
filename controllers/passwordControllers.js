import crypto from 'crypto';

// Function to generate a random password
function generatePassword(length = 12) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = crypto.randomInt(0, chars.length);
        password += chars[randomIndex];
    }

    return password;
}

// Controller function for generating passwords
export const getPassword = (req, res) => {
    // Get the length from query parameters (e.g., /generate-password?length=12)
    const length = parseInt(req.query.length) || 12;

    // Validate length (must be between 8 and 64)
    if (length < 8 || length > 64) {
        return res.status(400).json({
            success: false,
            message: 'Password length must be between 8 and 64 characters.'
        });
    }

    const password = generatePassword(length);

    // res.json({
    //     success: true,
    //     password: password
    // });

    return{
        password
    };
};
