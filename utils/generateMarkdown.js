//  creates a license badge based on which license is passed in

function renderLicenseBadge(license) {
  switch (license) {
    case "IBM":
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "BSD":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "GNU":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "Boost":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    case "Mozilla":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "None":
      return "";
    // default :
    //   return "";
  }
}

//  returns the license link

function renderLicenseLink(license) {
  switch (license) {
    case "IBM":
      return "https://www.ibm.com/about/software-licensing/us-en/licensing/license_information_documents";
    case "ISC":
      return "https://opensource.org/license/isc-license-txt/";
    case "Apache":
      return "https://www.apache.org/licenses/LICENSE-2.0" ;
    case "MIT":
      return "https://opensource.org/license/mit/";
    case "BSD":
      return "https://opensource.org/license/bsd-3-clause/";
    case "GNU":
      return "https://www.gnu.org/licenses/gpl-3.0.en.html";
    case "Boost":
      return "https://www.boost.org/users/license.html";
    case "Mozilla":
      return "https://www.mozilla.org/en-US/MPL/";
    case "None":
      return "";

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
