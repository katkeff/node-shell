module.exports = function () {
  process.stdout.write('prompt > ');

  process.stdin.on('data', (data) => {
    const pwd = process.env.PWD;

    process.stdout.write(pwd);
    process.stdout.write('\nprompt > ');
  })
}
