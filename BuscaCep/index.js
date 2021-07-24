const axios = require('axios');

module.exports = async (context, req) => {
    const { cep } = req.params;

    if (!cep) {
        context.res = { status: 400, body: 'Provide a cep on params.'};
        return;
    }

    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
        context.res = { status: 200, body: response.data };
    } catch (error) {
        context.res = { status: 400, body: error };
    }
}