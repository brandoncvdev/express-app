const mongoose = require('mongoose');
const modelUser = require('../models/user');

const options = {
    page: 1,
    limit: 5
};

const parseId = (id) => {
    return mongoose.Types.ObjectId(id);
}

exports.getData = (req, res) => {
    modelUser.paginate({}, options, (err, docs) => {
        res.send({ items: docs });
    });
};

exports.insertData = (req, res) => {
    const data = req.body;
    modelUser.create(data, (err, docs) => {
        if (err) {
            res.status(422).send({ error: err });
        } else {
            res.send({ data: docs });
        }
    });
};

exports.updateSingle = (req, res) => {
    const { id } = req.params;
    const body = req.body;
    modelUser.updateOne({ _id: parseId(id)}, body, (err, docs) => {
        res.send({
            items: docs
        });
    });
};

exports.deleteSingle = (req, res) => {
    const { id } = req.params;
    modelUser.deleteOne({ _id: parseId(id)}, (err, docs) => {
        res.send({
            items: docs
        });
    });
};