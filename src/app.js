const child_process = require("child_process")

function runSetup(action){
    let command = `"${action.params.exeFile}" /VERYSILENT /DIR=${action.params.installDir}` 
	return new Promise((resolve,reject) => {
		child_process.exec(command, (error, stdout, stderr) => {
			if (error) {
			   return reject(`exec error: ${error}`);
			}
			if (stderr) {
				console.log(`stderr: ${stderr}`);
				return reject(`exec error ${stderr}`)
			}
			return resolve(stdout);
		});
	})
}

module.exports = {
    runSetup: runSetup
}