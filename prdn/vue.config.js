module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ?
        //For production build    
        '/creativeindustries/prdn2-local/' : '/'
    //For local testing of the build
    //'/prdn2-local/' : '/'
}