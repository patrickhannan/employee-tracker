# employee-tracker

## Description 

This project is a app that will help the user build a database of employees allowing them to track names, jobs, managers, departments, and salaries. 

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

The user must download the files from this repository. Those can be accessed [here](https://github.com/patrickhannan/employee-tracker).

Once the user downloads these files, they must open the files in VS Code. In VS Code, the user will run a new terminal. In the terminal, the user will change their working directory to the current directory. 

Run "npm install" to install the app.

After installing, the user will open the file titled seed.sql, and copy and paste that into their mysql workbench. (NOTE: The user may decide whether or not to include the insert commands. These are more for examples rather than real life usage as these are fictional people and departments." 

After generating this database, the user must connect, so all they have to do is change the passcode in the index.js file to their mysql password.


## Usage 

Once installed, run 'node index.js' in order to connect to the local server with this app. When doing so, the user will be prompt with a series of possible actions. The user will select which action they would like to do, and then follow the prompts (unless they are simply view or exiting the app, then there are no problems directly associated with these actions.)

Below is a image of how the page will look when the user is initially prompted.
![Example notes](./assets/initialmenu.png)


## Credits

* [Node.js](https://nodejs.org/en/)
* [MySQL](https://www.npmjs.com/package/mysql)
* [InquirerJs](https://www.npmjs.com/package/inquirer/v/0.2.3)


## License

MIT License

Copyright (c) 2020 Patrick Hannan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.