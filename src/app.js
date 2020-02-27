const child_process = require("child_process")

function runSetup(action){
	return new Promise((resolve,reject) => {
		if(!action.params.exeFile) 
			return reject(`setup file must be specifide`)
	let flags = [];
	if (action.params.silenMode)
		flags.push(`/VERYSILENT`)
	if (action.params.installDir) 
		flags.push(`/DIR=${action.params.installDir}`)
	
    let command = `"${action.params.exeFile}" ${flags.join(' ')}` 
	
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