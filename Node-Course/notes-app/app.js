const chalk = require('chalk') //npm install chalk@2.4.1 in terminal. Load chalk into app.js
// const { demandOption } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js') //pulls info from notes.js

// const msg = getNotes() //pulls message from notes.js
// console.log(msg)


// console.log(chalk.blue.inverse.bold('Error!')) 

// console.log(process.argv[2]) 
//argument vector, will output array w/ 3 strings. 1.path 2.path to app.js file 3.value we provided in terminal
//can grab strings using index [2]

// const command = process.argv[2]

// console.log(process.argv) //<-- this adds "This is my title to the array"




//Customize yargs 
yargs.version('1.1.0')

//add, remove, read, list. Yargs helps you pass this data
//Createa add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {     //this is an object
            describe: 'Note title',
            demandOption: true,
            type: 'string'    //this sets title to a string and not a boolean value
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'

        }
    },
    handler(argv) {     // <-- this line contains all of the arguments 
        notes.addNote(argv.title, argv.body)

    }
})
//Create remove commant 
yargs.command ({
    command: 'remove',
    describe: 'Remove a note',
    builder: {   //remove command to take a required "--title" option
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title) //call removable in remove command handler 
    }
})

//CREATE LIST COMMAND

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})
//CREATE READ COMMAND
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})



// yargs.command ({
//     command: 'read',
//     describe: 'Read a note',
//     handler() {   
//         console.log('Reading a note')
//     }
// })

yargs.parse()
// console.log(yargs.argv) //we need this to access info 

// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }