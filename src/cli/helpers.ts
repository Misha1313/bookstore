export function childProcOut(childProc) {
  childProc.stdout.on('data', function (msg) {
    console.log(msg.toString());
  });

  childProc.stderr.on('data', function (msg) {
    console.log(msg.toString());
  });
}
