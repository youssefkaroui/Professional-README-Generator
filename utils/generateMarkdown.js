// packages needed 
 var dayjs= require("dayjs");
 var year= dayjs().format("YYYY");
 var userName= "";

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
      return "No license provided for this project.";
    
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
      return "https://www.mozilla.org/en-US/foundation/licensing/";
    case "None":
      return "N/A";
    
  }

}

// returns the license section of README

function renderLicenseSection(license) {
  switch (license) {
    case "IBM":
      return `   Copyright ${year} ${userName}    LI documents set out the detailed licensing terms that apply to individual programs. They are available for programs released after May 1999 and a new document is created for each release (or update) of an IBM program. LI documents are normally provided with IBM software in hardcopy or softcopy form. Acceptance of the terms of the LI document is necessary prior to installation or first use of the software.`;
    case "ISC":
      return `   Copyright ${year} ${userName}    Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.`;
    case "Apache":
      return `   Copyright ${year} ${userName}    Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.` ;
    case "MIT":
      return `   Copyright ${year} ${userName}    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.`;
      case "BSD":
      return `   Copyright ${year} ${userName}    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met: 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.`;
    case "GNU":
      return `   Copyright ${year} ${userName}    The GNU General Public License is a free, copyleft license for software and other kinds of works. The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too.`;

    case "Boost":
      return `   Copyright ${year} ${userName}    permission is hereby granted, free of charge, to any person or organization obtaining a copy of the software and accompanying documentation covered by this license (the Software) to use, reproduce, display, distribute,execute, and transmit the Software, and to prepare derivative works of the Software, and to permit third-parties to whom the Software is furnished to do so`;
    case "Mozilla":
      return `   Copyright ${year} ${userName}    Most Mozilla software projects use the MPL, but some have different terms. Detailed information on the licensing of existing code can be found by inspecting its license headers, or by visiting the license information page in the relevant Mozilla software.`;
    case "None":
      return "No License provided for this project";
    

  }
}

// generates markdown for README
function generateMarkdown(data) {

  userName= data.userName;
  var licenseBadge= renderLicenseBadge(data.license);
  var licenseText = renderLicenseSection(data.license);
  var licenseLink= renderLicenseLink(data.license);
 
  
   return `# ${data.title}
  ${data.description}
 
  ${licenseBadge}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contributionGuidelines)
  - [Testing](#testing)
  - [License](#license)
  - [Questions](#questions)


  <a name="installation"></a>
  ## Installation

  ${data.installation}

  <a name= "usage"></a>

  ## Usage

  ${data.usage}
  <a name="contributionGuidelines"></a>

  ## Contribution 

  ${data.contributionGuidelines}

  <a name="testing"></a>

  ## Testing 

  ${data.testing}

  <a name="license"></a>

  ## License 

  ${licenseText}

  [If you would like to know more about licensing information here's a link for more details:] (${licenseLink})

  <a name="questions"></a>

  ## Questions 

  [Email me if you have any questions](mailto:${data.emailAddress})

[Review my other projects on GitHub.](https://www.github.com/youssefkaroui)

  `;
};

module.exports = generateMarkdown;

