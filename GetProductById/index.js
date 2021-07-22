const { ObjectId } = require('mongodb');
const createMongoClient = require('../shared/mongoClient');

module.exports = async (context, req) => {
    const { id } = req.params;

    if (!id) {
        context.res = {
            status: 400,
            body: 'Provide a product id on params',
        };
        return;
    }

    const { client: MongoClient, closeConnectionFn } = await createMongoClient();
    const Products = MongoClient.collection('products');
    const body = await Products.findOne({ '_id': ObjectId(id) });

    closeConnectionFn();

    context.res = {
        status: 200,
        body
    };
};