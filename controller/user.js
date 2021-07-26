const user = mongoose.model("user");
module.exports = {
    add(req, res) {
        if (!req.body._id) {
            user.aggregate([{
                $match: {
                    isdeleted: 0,
                    name: req.body.name,
                    mobileno: req.body.mobileno,
                }
            }]).then(data => {
                if (data != 0) {
                    return res.status(200).send({ status: false, message: req.body.name + 'user already exsist!' })
                } else {
                    return user.create({
                        name: req.body.name,
                        mobileno: req.body.mobileno,
                        email: req.body.email,
                        password: req.body.password,
                        gender: req.body.gender,
                        description: req.body.description,
                        isdeleted: 0,
                    }).then(data => {
                        return res.status(200).send({ status: true, message: 'user Added successfully', data })
                    }).catch(err => {
                        return res.status(200).send({ status: false, message: err.message })
                    })
                }
            })
        } else {
            return user.findById(req.body._id)
                .then(data => {
                    if (!data) {
                        return res.status(200).send({ status: false, message: 'user not found !' })
                    }
                    data.updateOne({
                        name: req.body.name,
                        mobileno: req.body.mobileno,
                        email: req.body.email,
                        password: req.body.password,
                        gender: req.body.gender,
                        description: req.body.description,
                    }).then(data => {
                        return res.status(200).send({ status: true, message: 'user Updated successfully', data })
                    }).catch(err => {
                        return res.status(200).send({ status: false, message: err.message })
                    })
                })
        }
    },
    list(req, res, next) {
        user.aggregate([{
            $match: {
                isdeleted: 0,
            }
        }]).then((value) => {
            res.status(200).json(value)
        }).catch((err) => {
            res.status(200).json({
                status: false,
                message: err.message
            })
        })
    },
    delete(req, res, next) {
        if (req.body._id) {
            user.find({
                "_id": req.body._id
            }).then((data) => {
                if (data.length == 0) {
                    res.status(200).json({
                        "status": false,
                        "message": "No record"
                    })
                } else {
                    data[0].update({
                        isdeleted: 1,
                    }).then((finaldata) => {
                        res.status(200).json({
                            "status": true,
                            "message": "user deleted..........."
                        })
                    }).catch((err) => {
                        res.status(200).json({
                            "status": false,
                            "message": err.message
                        })
                    })
                }
            })

        }
    },

}