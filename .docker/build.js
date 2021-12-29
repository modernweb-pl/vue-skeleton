const pkg = require('../package');
const { spawn } = require('child_process');

const docker = spawn('docker', [
  'build',
  '-t',
  pkg.docker.registry + '/' + pkg.name + ':' + pkg.version,
  '.',
]);

docker.stdout.on('data', (data) => console.log(data.toString()));
docker.stderr.on('data', (data) => console.log(data.toString()));
docker.on('exit', (code) => process.exit(code));
