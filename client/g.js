const { exec } = require('child_process');
let args = process.argv;
args.splice(0, 2);
let str = args.join(' ');

console.log(str);
exec('git add .', cbadd);

function cbadd(err, strout, sdtin) {
  if (err) {
    console.log(err);
    return;
  }
  //it worked
  exec(`git commit -m "${str}"`, cbcommit);
}
function cbcommit(err, strout, sdtin) {
  if (err) {
    console.log(err);
    return;
  }
  exec('git push', cbpush)
}

function cbpush(err, strout, sdtin) {
    if (err) {
      console.log(err);
      return;
    }
    //it worked
    console.log('done');
  }


  // npm run gitty -- feat/(proxyTest):added script
  // script: "gitty": "node g.js" package.json 