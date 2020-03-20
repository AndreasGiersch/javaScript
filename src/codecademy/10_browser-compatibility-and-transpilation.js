function browserComp() {
    /**
     * caniuse: website to research, which functionality is supported by which browsers
     * e.g. search for "template literals" to find out, that about 95% of all browsers accept it
     *
     */

    /**
     * convert ES6 syntax to ES5 syntax manually
     */

    var pasta = 'Spaghetti' // ES5 syntax

    const meat = 'Pancetta' // ES6 syntax

    let sauce = 'Eggs and cheese' // ES6 syntax

    // Template literals, like the one below, were introduced in ES6
    const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`

    // ES5 syntax only:
    var pasta1 = 'Spaghetti'

    var meat1 = 'Pancetta'

    var sauce1 = 'Eggs and cheese'

    var carbonara1 =
        'You can make carbonara with ' +
        pasta1 +
        ', ' +
        meat1 +
        ', and a sauce made with ' +
        sauce1 +
        '.'

    console.log(carbonara)
    console.log(carbonara1)

    /**
     * transpilation: babel is a transpiler, which can convert newer ECMAscript version, like ES6,
     * to older versions. E.g. it converts ES6 javascript syntax to ES5 javascript syntax,
     * to raise the browser compatibility
     */

    // "npm install babel-cli"
    // This installs one of the two required Babel packages.

    // "npm install babel-preset-env"
    // This installs the second of two required Babel packages.

    // In the terminal, type "npm run build" and press enter.

    // You can view the ES5 code in ""./lib/main.js".

    // You may need to refresh to see the newly created lib directory.

    /**
     * npm init
     */

    // In the last exercise, you wrote one command in your terminal to transpile ES6 code to ES5. In the next five exercises you will learn how to setup a JavaScript project that transpiles code when you run npm run build from the root directory of a JavaScript project.

    // The first step is to place your ES6 JavaScript file in a directory called src. From your root directory, the path to the ES6 file is ./src/main.js

    // The initial JavaScript project file structure is:

    // project
    // |_ src
    // |___ main.js
    // Before we install Babel, we need to setup our project to use the node package manager (npm). Developers use npm to access and manage Node packages. Node packages are directories that contain JavaScript code written by other developers. You can use these packages to reduce duplication of work and avoid bugs.

    // Before we can add Babel to our project directory, we need to run npm init. The npm init command creates a package.json file in the root directory.

    // A package.json file contains information about the current JavaScript project. Some of this information includes:

    // Metadata — This includes a project title, description, authors, and more.
    // A list of node packages required for the project — If another developer wants to run your project, npm looks inside package.json and downloads the packages in this list.
    // Key-value pairs for command line scripts — You can use npm to run these shorthand scripts to perform some process. In a later exercise, we will add a script that runs Babel and transpiles ES6 to ES5.
    // If you have Node installed on your computer, you can create a package.json file by typing npm init into the terminal.

    // The terminal prompts you to fill in fields for the project’s metadata (name, description, etc.)

    // You are not required to answer the prompts, though we recommend at minimum, you add your own title and description. If you don’t want to fill in a field, you can press enter. npm will leave fill these fields with default values or leave them empty when it creates the package.json file.

    // After you run npm init your directory structure will contain the following files and folders:

    // project
    // |_ src
    // |___ main.js
    // |_ package.json
    // npm adds the package.json file to the same level as the src directory.

    /**
     * install node packages
     */

    // "npm install babel-cli"
    // This installs one of the two required Babel packages.

    // "npm install babel-preset-env"
    // This installs the second of two required Babel packages.

    /**
     * .babelrc config
     */

    // Now that you’ve downloaded the Babel packages, you need to specify the version of the source JavaScript code.

    // You can specify the initial JavaScript version inside of a file named .babelrc. In your root directory, you can run touch .babelrc to create this file.

    // Your project directory contains the following folders and files:

    // project
    // |_ node_modules
    // |___ .bin
    // |___ ...
    // |_ src
    // |___ main.js
    // |_ .babelrc
    // |_ package.json
    // Inside .babelrc you need to define the preset for your source JavaScript file. The preset specifies the version of your initial JavaScript file.

    // Usually, you want to transpile JavaScript code from versions ES6 and later (ES6+) to ES5. From this point on, we will refer to our source code as ES6+, because Ecma introduces new syntax with each new version of JavaScript.

    // To specify that we are transpiling code from an ES6+ source, we have to add the following JavaScript object into .babelrc:

    // {
    //   "presets": ["env"]
    // }
    // When you run Babel, it looks in .babelrc to determine the version of the initial JavaScript file. In this case, ["env"] instructs Babel to transpile any code from versions ES6 and later.

    /**
     * babel source lib
     */

    //  add ' "build": "babel src -d lib" ' to the scripts in package.json

    /**
     * build
     */

    // now running "npm run build" to use babel for transpiling all ES6 and upwards syntax
    // into the .lib directory

    // note: it did only transpile .js files, not the other existing ts files.
    // "npm install --save-dev @babel/preset-typescript" should be needed

    /**
     * review
     */

    // Initialize your project using npm init and create a directory called src
    // Install babel dependencies by running
    // npm install @babel/cli -D
    // npm install @babel/preset-env -D
    // Create a .babelrc file inside your project and add the following code inside it:
    // {
    //   "presets": ["env"]
    // }
    // Add the following script to your scripts object in package.json:
    // "build": "babel src -d lib"
    // Run npm run build whenever you want to transpile your code from your src to lib directories.
}

browserComp()
