var PythonShell = require('python-shell');
var options = {
    mode: 'json',
    pythonOptions: ['-u'],
    scriptPath: './',
};
var test =  new PythonShell('test.py', options);
test.on('message',function (message) {
    console.log(message);
});