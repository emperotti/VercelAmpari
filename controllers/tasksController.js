const dogsModel = require('../models/dogsModel');

const getAll = async (_request, response) => {

    const dogs = await dogsModel.getAll();

    return response.status(200).json({ dogs });
};

const createDogs = async (request, response) => {
    const createdDogs = await dogsModel.createDogs(request.body);
    return response.status(201).json(createdDogs);

}

const deleteDog = async (request, response) => {
    const { id } = request.params;

    await dogsModel.deleteDog(id);
    return response.status(204).json();
};

const updateDog = async (request, response) => {

    const { id } = request.params;

    await dogsModel.updateDog(id, request.body);
    return response.status(204).json();
};

module.exports = {
    getAll,
    createDogs,
    deleteDog,
    updateDog
};