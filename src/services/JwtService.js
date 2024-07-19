const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const generalAccessToken = async (payload) => {
    const access_token = jwt.sign({
        ...payload
    }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' });

    return access_token;
};

const generalRefreshToken = async (payload) => {
    const refresh_token = jwt.sign({
        ...payload
    }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '365d' });

    return refresh_token;
};


const refreshTokenJwtService = (token) => {
    return new Promise((resolve, reject) => {
        try {
            jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, async (err, user) => {
                if (err) {
                    resolve({
                        status: 'ERR',
                        message: 'The authentication'
                    })
                }
                const access_token = await generalAccessToken({
                    id: user?.id,
                    MaNV: user?.MaNV
                })
                resolve({
                    status: 'OK',
                    message: 'Refresh token successful',
                    access_token
                })
            })


        } catch (err) {
            reject(err)
        }
    })
}


module.exports = {
    generalAccessToken,
    generalRefreshToken,
    refreshTokenJwtService
}