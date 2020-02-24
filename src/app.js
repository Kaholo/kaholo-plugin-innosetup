const child_process = require("child_process")

function runSetup(action){
    let remDir = action.params.installDir
    let command = `"${action.params.runSetup}" /VERYSILENT /DIR=${remDir}` 
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