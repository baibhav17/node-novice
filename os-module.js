// OS Module

const os = require('os')

//info about the current user

console.log(os.userInfo())

// method returns the system iuptime

console.log(`the uptime of this system is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
}

console.log(currentOS);