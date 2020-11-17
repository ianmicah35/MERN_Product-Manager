const ProductController = require("../../server/controllers/product.controller");

module.exports = app => {
    app.get("/api/product", ProductController.findAllProducts);
    app.get("/api/product/:_id", ProductController.findSingleProduct);
    app.post("/api/product/new", ProductController.createProduct);
    app.delete("/api/product/:_id/delete", ProductController.deleteProduct);
    app.put("/api/product/:_id/update", ProductController.updateProduct);
}