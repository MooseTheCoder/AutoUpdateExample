var serverFile = require('./helloWorld');
module.exports = {
    main: function(){
        console.log('Hello World!');
        serverFile.helloFromServer();
    }
}