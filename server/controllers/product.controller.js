const Product = require('../models/product.model.js');

module.exports.findAllProducts = (req,res) => {
    Product.find()
        .then(allProducts => res.json({products: allProducts}))
        .catch(err => res.json({message: "beep beep whizz whirrrr it broke fam", error: err}));
};

module.exports.findSingleProduct = (req,res) => {
    console.log('getting id: ${req.params._id}');
    Product.findOne({_id: req.params._id})
        .then(singleProduct => res.json({product: singleProduct}))
        .catch(err => res.json({message: "beep beep whizz whirrrr it broke fam", error: err}));
};

module.exports.createProduct = (req,res) => {
    console.log("trying to create");
    Product.create(req.body)
        .then(newProduct => res.json({products: newProduct}))
        .catch(err => res.json({message: "beep beep whizz whirrrr it broke fam", error: err}));
};

module.exports.deleteProduct = (req,res) => {
    Product.remove({_id: req.params._id})
        .then(product => {
            console.log(product);
            res.json({message: "delete successful"})
        })
        .catch(err => res.status(400).json(err));
};

module.exports.updateProduct = (req,res) => {
    Product.update({_id: req.params._id}, {
        $set: {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description
        }
    })
    .then(product => res.json(product))
    .catch(err => res.status(400).json(err));
};