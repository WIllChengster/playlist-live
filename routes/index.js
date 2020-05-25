const example = require('./example')

module.exports = (app) => {
    app.use('/api', example);
    
}
