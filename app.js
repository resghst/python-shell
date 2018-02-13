var PythonShell = require('python-shell');

var options = {
    mode: 'text',
    encoding: 'utf8',
    pythonOptions: ['-u'],
    scriptPath: './',
    args: ["哈摟", "安安", "你好"]
};
console.log(options.args)
// console.log('start')
var test =  new PythonShell('test.py', options);
test.on('message',function (message) {
    console.log(message);
});