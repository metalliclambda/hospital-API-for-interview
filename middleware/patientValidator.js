const { body, validationResult } = require('express-validator');

module.exports.userValidationRules = () => {
    return [
        body('email').isEmail(),
        body('address').isLength({ min: 10 }),
        body('name').not().isEmpty(),
        body('phoneNumber').isNumeric().isLength({min : 12}),
        body('password').isStrongPassword({
            minLength : 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols : 0
        }).isLength({max : 15})
    ];
}

module.exports.validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    
    console.log('in validation');
    return res.status(422).json({ errors: errors.array() });
    // or use this :
    // const extractedErrors = []
    // errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

    // return res.status(422).json({
    //     errors: extractedErrors,
    // })
}
