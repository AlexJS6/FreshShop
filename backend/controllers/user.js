const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.signup = (req, res, next) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });
            user.save()
                .then(() => res.status(201).redirect('/index'))
                .catch(
                (error) => {
                    res.status(500).json({
                        error: error
                    })
                }
            )
        //}
    //)
}

exports.login = (req, res, next) => {
    user.findOne({ email: req.body.email}).then(
        (user) => {
            if (!user) {
                return res.status(401).json({
                    error: new Error('User not find!')
                })
            }
            bcrypt.compare(req.body.password, user.password).then(
                (valid) => {
                    if (!valid) {
                        return res.status(401).json({
                            error: new Error('Incorrect password')
                        })
                    }
                    const token = jwt.sign(
                        {userId: user._id},
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h'});
                    res.status(200).json({
                        userId: user._id,
                        token: token
                    })
                }
            ).catch(
                (error) => {
                    res.status(500).json({
                        error: error
                    })
                }
            )
        }
    ).catch(
        (error) => {
            res.status(500).json({
                error: error
            })
        }
    )
}


// to hash signup
/*bcrypt.hash(req.body.password, 10).then(
    (hash) => {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash
        })*/