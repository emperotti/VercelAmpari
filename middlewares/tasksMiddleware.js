const validateBody = (request, response, next) => {
    const { body } = request;

    if (body.name == undefined || body.species == undefined || body.sex == undefined || body.castrated == undefined
        || body.alive == undefined || body.adopted == undefined) {
        return response.status(400).json({ message: 'A required field is undefined' }
        );
    }

    if (body.name == '' || body.species == '' || body.sex == '' || body.castrated == '' || body.alive == '' || body.adopted == '') {
        return response.status(400).json({ message: 'A required field is empty' });
    }

    next();
};

module.exports = {
    validateBody,
};
