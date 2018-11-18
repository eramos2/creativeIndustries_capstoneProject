module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ?
        //For production build    
        '/creativeindustries/prdn2.0/' : '/'
    //For local testing of the build
    //'/prdn2.0-local/' : '/'
}