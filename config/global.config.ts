module.exports = ( async ()=> {
    let config;

    switch(process.env.NODE_ENV) {
        case 'envOne':
            config = await require('../config/envOne.config');
            break;
        case 'envTwo':
            config = await require('../config/envTwo.config');
            break;
        default :
            config = await require('');
            break;
    }
    return {
        ...config,
    }
})();