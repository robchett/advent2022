const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What day is it ? ', function (day: string) {
  rl.question('What\'s the task called ? ', function (name: string) {
    let codeTemplate = fs.readFileSync('./template/code.ts').toString().replace('{name}', name).replace('{day}', day)
    fs.writeFileSync('./src/' + day + '.ts', codeTemplate);

    let testsTemplate = fs.readFileSync('./template/tests.ts').toString().replace('{name}', name).replace('{day}', day)
    fs.writeFileSync('./tests/' + day + '.test.ts', testsTemplate);

    fs.writeFileSync('./inputs/' + day + '.txt', '');
  });
});

rl.on('close', function () {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});