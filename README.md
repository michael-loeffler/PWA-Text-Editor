# PWA-Text-Editor
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
    
The PWA Text Editor is an example of a Progressive Web Application (PWA) which is basically a website that resembles a mobile application, both aesthetically and functionally. Users of this Text Editor application will be able to store notes and/or code snippets for future reference as the application will store the information in multiple locations (IndexedDB and LocalStorage), as well as cache key components like the HTML and images, so that the application can be accessed even without the internet. Finally, users also have the ability to download the application to their local machine (whether desktop or mobile) so that the same functionality can be accessed without visiting the browser at all. 

I was motivated to create this application because PWA's allow developers to emulate the look and feel of mobile apps bought in App Stores in the browser, while still offering the ability to install it locally. The flexibility as well as robust nature that are inherent to PWA's prove their utility in the web market and therefore building and deploying a PWA are great skills to have learned and practiced during this project.

Through working on this project, I learned a lot about everything that goes into creating a Progressive Web Application. Some of the biggest points of learning include:
* Webpack bundling, loading, and use of the webpack plugin to compress all files into a dist folder for deployment and installation
* Ensuring that newer JavaScript elements still function even when a browser doesn't support them by using the babel loader/plug-in
* Using the Client/Server file structure to separate out and organize files by their role within the application
* Establishing Service Workers to cache static HTML and image assets
* Storing data in and retrieving data from IndexedDB, as well as performing CRUD operations on that data
* Creating a Webpack PWA Manifest so that the application can be downloaded to a user's machine, as well as providing the instructions/parameters to do so

## Table of Contents
        
- [Installation](#installation-if-you-would-like-to-clone-the-repo-otherwise-simply-visit-the-deployed-application)
- [Usage](#usage)
- [Link to Deployed Application](#link-to-deployed-application)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
 
## Installation (if you would like to clone the repo, otherwise simply [visit the deployed application](https://limitless-woodland-21063.herokuapp.com/)) 
            
1. Install Node.js
    - [Download Version 16 of Node.js](https://nodejs.org/download/release/v16.18.0/node-v16.18.0-x64.msi)
2. Clone this repo
   ```sh
   git clone https://github.com/michael-loeffler/PWA-Text-Editor.git
   ```
3. Install the dependencies and register the custom scripts included in the package.json file in the main directory using the following command:
   ```sh
   npm i
   ```
4. Install the rest of the required dependencies using the following custom script in the command line (this will install the dependencies in the package.json files in both the client and server directories):
   ```sh
   npm run install
   ```
5. Start the server by using the following command in the command line:
   ```sh
   npm start
   ```
6. Open the site on your local host (e.g., http://localhost:3000/)
7. Click the Install button in the upper left-hand corner of the webpage if you wish to install the application locally to your machine
    
## Usage
    
The PWA Text Editor is bundled and rendered using a combination of webpack packages/plug-ins as well as loaders. This allows all the files to be compressed and more easily stored so that the browser can cache everything that is needed to run the application even without the internet. The function of the application itself is a simple text editor that allows users to store notes and/or code snippets for future reference. Every time the user clicks off the application's window, the text they have typed is stored in both IndexedDB and LocalStorage to ensure the data is retained. Finally, the application uses an event listener to look for the browser generated "beforeinstallprompt" event which is triggered when an application meets required installation criteria, and renders an Install button when this event fires. When the Install button is clicked, the prompt generated from the "beforeinstallprompt" event is released so that the user can choose whether or not to install the application. If they choose to install the app, it will automatically install and can be used like any other application on your desktop. To complete the process, the Install button is hidden from view.

## Link to deployed application
[https://limitless-woodland-21063.herokuapp.com/](https://limitless-woodland-21063.herokuapp.com/)

## Credits

Node packages used:
  - babel's suite of packages
  - css-loader
  - style-loader
  - http-server
  - webpack's suite of packages
  - code-mirror
  - idb
  - express
  - nodemon
  - concurrently

-*Custom scripts included in the package.json file for the main directory and the code used for the asset-caching in src-sw.js are borrowed from course activities*<br>
-*Event listener functions for the install.js file follow the guides included in the very helpful articles [How to provide your own in-app install experience](https://web.dev/customize-install/) and [Make it installable](https://web.dev/codelab-make-installable/) by **web.dev**.*

## License
    
Covered under the MIT License. For more details and to view the license in full, please visit the [MIT License Webpage](https://choosealicense.com/licenses/mit/).

## Contributing
    
If you have a suggestion for improvement, please fork the repo and create a pull request. You can also open an issue and tag it for "enhancement".
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/featureName`)
3. Commit your Changes (`git commit -m 'adds featureName'`)
4. Push to the Branch (`git push origin feature/featureName`)
5. Open a Pull Request
    
## Tests

N/A

## Questions

Please visit my [GitHub profile](https://github.com/michael-loeffler) or [send me an email with any additional questions.](mailto:michaelloeffler23@gmail.com)