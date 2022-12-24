const Cube = require('../models/Cube');

exports.create = (cube) => Cube.create(cube);

exports.getAll = async (search = '', from = 1, to = 6) => {
    fromNumber = Number(from) || 0;
    toNumber = Number(to) || 6;

    const result = await Cube.find({name: {$regex: new RegExp(search, 'i')}}).
        where('difficultyLevel').lte(toNumber).gte(fromNumber).lean();
    
    return result;
}