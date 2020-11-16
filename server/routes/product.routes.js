const ProductController = require("../../server/controllers/product.controller");

module.exports = app => {
    app.get("/api/product", ProductController.findAllProducts);
    app.get("/api/products/:_id", ProductController.findSingleProduct);
    app.post("/api/products/new", ProductController.createProduct);
    app.get("/api/products/delete/:id", ProductController.deleteProduct);
    app.put("/api/products/:id/update", ProductController.updateProduct);
}