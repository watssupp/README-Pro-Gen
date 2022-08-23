// fuction to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderBadge(data.license)}
## Github URL
[${data.github}](https://github.com/${data.github})
## Description
${data.description}
## Table of Contents
* [Installation](#dependencies)
* [Usage](#usage)
${renderLink(data.license)}
* [Contributors](#conrtibutors)
* [Test](#test)
## Installations (Dependencies)
\`\`\`
${data.dependencies}
\`\`\`
## Usage
${data.usage}
${renderSection(data.license)}
## Contributors
${data.contributors}
Contact me at ${data.email}
## Test
To run test, run these commands:
\`\`\`
${data.test}
\`\`\`
`
}

// Function to render badge
function renderBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ``
}

// Function to render link
function renderLink(license) {
  if (license !== "None") {
    return (
      `\n* [License](#licende)\n`
    )
  }
return ''
}


// Function to render section
function renderSection(license) {
  if (license !== "None") {
    return (
      `## License
      Copyright © ${license}. All rights reserverd.
      
      Licensed under the ${license} license.`
    )
  }
  return ''
}

module.exports = generateMarkdown