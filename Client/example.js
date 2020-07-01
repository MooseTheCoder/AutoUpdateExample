const fs = require('fs');
const request = require('sync-request');
const UPDATE_URL = "http://localhost:7000";
const FILE_LOCATION = "files/";

function checkForUpdates(){
    // Create the files directiory if we dont have one
    if(fs.existsSync(FILE_LOCATION) == false){
        console.log('Files directory does not exist, creating');
        fs.mkdirSync(FILE_LOCATION);
    }
    // Ask the update server if we need files
    filesList = request('GET',UPDATE_URL);
    fileList = JSON.parse(filesList.getBody('utf8'));
    fileList.forEach(file => {
        // A hacky download method, but this is only an example
        serverFile = request('GET',UPDATE_URL+'/files/'+file);        
        fileContent = serverFile.getBody('utf8');
        fs.writeFileSync(FILE_LOCATION+file,fileContent);
    });
}
checkForUpdates();
var core = require('./files/main.js')

core.main();