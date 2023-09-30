const connection = require('./connection');

const getAll = async () => {
    try {
        const result = await connection.query('SELECT * FROM animals');
        return result.rows; // Retorna somente as linhas (rows) dos resultados
    } catch (error) {
        console.error('Erro ao obter dados:', error);
        throw error;
    }
};

const createDogs = async (dogsData) => {
    const { photo, name, species, sex, age, carry, weights, castrated, date_vaccine, alive, localization, chip, descriptions, adopted } = dogsData;

    const query = 'INSERT INTO animals(photo, name, species, sex, age, carry, weights, castrated, date_vaccine, alive, localization, chip, descriptions, adopted) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *';

    try {
        const { rows } = await connection.query(query, [photo, name, species, sex, age, carry, weights, castrated, date_vaccine, alive, localization, chip, descriptions, adopted]);
        return rows[0]; // Retorna o registro inserido
    } catch (error) {
        console.error('Erro ao criar dados:', error);
        throw error;
    }
};

const deleteDog = async (id) => {
    const query = 'DELETE FROM animals WHERE id = $1 RETURNING *';

    try {
        const { rows } = await connection.query(query, [id]);
        if (rows.length > 0) {
            return rows[0]; // Retorna o registro removido
        } else {
            return null; // Caso nenhum registro tenha sido removido
        }
    } catch (error) {
        console.error('Erro ao excluir registro:', error);
        throw error;
    }
};


const updateDog = async (id, dogs) => {
    const { photo, name, species, sex, age, carry, weights, castrated, date_vaccine, alive, localization, chip, descriptions, adopted } = dogs;

    const query = 'UPDATE animals SET photo = $1, name = $2, species = $3, sex = $4, age = $5, carry = $6, weights = $7, castrated = $8, date_vaccine = $9, alive = $10, localization = $11, chip = $12, descriptions = $13, adopted = $14 WHERE id = $15 RETURNING *';

    try {
        const { rows } = await connection.query(query, [photo, name, species, sex, age, carry, weights, castrated, date_vaccine, alive, localization, chip, descriptions, adopted, id]);
        return rows[0]; // Retorna o registro atualizado
    } catch (error) {
        console.error('Erro ao atualizar registro:', error);
        throw error;
    }
};



module.exports = {
    getAll,
    createDogs,
    deleteDog,
    updateDog,

};
