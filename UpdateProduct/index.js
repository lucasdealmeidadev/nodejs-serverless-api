const { ObjectId } = require('mongodb');
const createMongoClient = require('../shared/mongoClient');

module.exports = async (context, req) => {
    const { id } = req.params;
    const product = req.body || {};

    if (!id || !product) {
        context.res = {
            status: 400,
            body: 'Provide a product and product id on params',
        };
        return;
    }

    const { client: MongoClient, closeConnectionFn } = await createMongoClient();
    const Products = MongoClient.collection('products');

    try {
        const products = await Products.findOneAndUpdate(
            { _id: ObjectId(id) },
            { $set: product },
        );
        closeConnectionFn();

        context.res = {
            status: 200,
            body: 'Product used successfully.'
        };

    } catch (error) {
        context.res = {
            status: 500,
            body: 'Error updating product.',
        };
    }
};