const { tweets } = require("../models");

module.exports = {
    create: async (req, res) => {
        try {
            console.log("isi posts", req.body.posts.length);
            console.log("IMAGE", req.body.image.split("http").length);
            if (req.body.posts.length <= 150 && req.body.image.split("http").length < 3) {
                const result = await tweets.create(req.body);
                return res.status(201).send(result);
            } else {
                throw {
                    rc: 400,
                    success: false,
                    message: "Maksimal Karakter 150 karakter."
                };
            }
        } catch (error) {
            console.log(error);
            return res.status(error.rc || 500).send(error);
        }
    },
    update: async (req, res) => {
        try {
            if (req.body.posts.length <= 150) {
                const result = await tweets.update(
                    {
                        posts: req.body.posts,
                        image: req.body.image
                    },
                    {
                        where: {
                            id: req.params.id
                        }
                    }
                );

                return res.status(200).send({
                    success: true,
                    message: "Update Success",
                    result: result
                });

            } else {
                throw {
                    rc: 400,
                    success: false,
                    message: "Melebihi karakter maksimal"
                }
            }
        } catch (error) {
            console.log(error);
            return res.status(error.rc || 500).send(error);
        }
    },
    get: async (req, res) => {
        try {
            const result = await tweets.findAll();
            console.log((new Date() - result[0].createdAt) / 1000 / 3600 / 24);
            // result.map(() => {
            //     if ()
            // })
            return res.status(200).send(result)
        } catch (error) {
            console.log(error);
            return res.status(500).send(error)
        }
    }
};