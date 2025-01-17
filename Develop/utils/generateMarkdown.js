const renderLicenseBadge = license => {
   
  if(license === "Unlicense"){
    return 'Unlicensed';
  } else {
    const licenseBadge = license.replace('-', '_')
    return `[![License: ${license}](https://img.shields.io/badge/License-${licenseBadge}-yellow.svg)](https://opensource.org/licenses/${license})`
  }
}

const renderLicenseSection = (data, license) => {
  return `  
  ## License
  Copyright (c) ${data.username}\n
  This license made with ${license}
  `

}
const renderContributionsList = contributionsArr => {
  if(!contributionsArr){
    return '';
  }
  const newContArr = contributionsArr
    .map(contribution => "* "+ contribution + "\n")
    .join('');
   return newContArr
}
const renderContributionsSection = data => {
  if(!renderContributionsList){
    return '';
  }
return `If you are looking to contribute you can for example: 
${renderContributionsList(data)}`
}

const renderFrameworksList = frameworksArr => {
  if(!frameworksArr){
    return '';
  }
  const newFrameworkArr = frameworksArr
    .map(framework => "* "+ framework + "\n")
    .join('');
   return newFrameworkArr
}
const renderFrameworksSection = data => {
  if(!renderFrameworksList){
    return '';
  }
  return `${renderFrameworksList(data)}`
}
const generateMarkdown = data => {
  return `${renderLicenseBadge(data.license)}
# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Built With](#built-with)
* [Usage](#usage)
* [Tests](#tests)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)
## Installation
In order to install please enter the following code:
\`\`\`
${data.installation}
\`\`\`
## Built With
${renderFrameworksSection(data.frameworks)}
## Usage
${data.features}

## Tests
If you are looking to test the program please enter this into command: 
\`\`\`
${data.tests}
\`\`\`
## Website
${data.link}

## Contributing
${renderContributionsSection (data.contributing)}

## Questions
If you have any questions or comments you can reach out to me directly at: ${data.email} or [${data.username}](https://github.com/${data.username})
${renderLicenseSection(data, data.license)}
`;
}

module.exports = generateMarkdown;
