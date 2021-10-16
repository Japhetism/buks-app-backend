const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');

exports.deleteOne = Model => async (req, res, next) => {
    try {
        const doc = await Model.findByIdAndDelete(req.params.id);

        if (!doc) {
            return next(new AppError(process.env.HTTP_NOT_FOUND_STATUS_CODE, process.env.ERROR_STATUS, 'No document found with that id'), req, res, next);
        }

        res.status(200).json({
            status: process.env.SUCCESS_STATUS,
            data: null
        });
    } catch (error) {
        next(error);
    }
};

exports.updateOne = Model => async (req, res, next) => {
    try {
        const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!doc) {
            return next(new AppError(process.env.HTTP_NOT_FOUND_STATUS_CODE, process.env.ERROR_STATUS, 'No document found with that id'), req, res, next);
        }

        res.status(200).json({
            status: process.env.SUCCESS_STATUS,
            data: {
                doc
            }
        });

    } catch (error) {
        next(error);
    }
};

exports.createOne = Model => async (req, res, next) => {
    const payload = req.body;
    payload.user = req.user._id;
    console.log("payload is ", payload)
    try {
        const doc = await Model.create(payload);

        console.log("doc is ", doc)

        res.status(201).json({
            status: process.env.SUCCESS_STATUS,
            data: {
                doc
            }
        });

    } catch (error) {
        next(error);
    }
};

exports.getOne = Model => async (req, res, next) => {
    try {
        const doc = await Model.findById(req.params.id);

        if (!doc) {
            return next(new AppError(process.env.HTTP_NOT_FOUND_STATUS_CODE, process.env.ERROR_STATUS, 'No document found with that id'), req, res, next);
        }

        res.status(200).json({
            status: process.env.SUCCESS_STATUS,
            data: {
                doc
            }
        });
    } catch (error) {
        next(error);
    }
};

exports.getAll = Model => async (req, res, next) => {
    console.log("request is ", req.user)
    try {
        const features = new APIFeatures(Model.find(), req.query)
            .sort()
            .paginate();

        const doc = await features.query;

        res.status(200).json({
            status: process.env.SUCCESS_STATUS,
            count: doc.length,
            data: doc
        });

    } catch (error) {
        next(error);
    }

};