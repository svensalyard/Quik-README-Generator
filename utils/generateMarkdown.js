// Combinded license badge and link to send them right next to each other
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache license 2.0':
      return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg) [Apache license 2.0](https://opensource.org/licenses/Apache-2.0)`;
    case'Boost Software License 1.0':
      return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg) [Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)`;
    case 'BSD 3-Clause License':
      return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg) [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)`;
    case 'Creative Commons Zero v1.0 Universal':
      return `![License](https://licensebuttons.net/l/zero/1.0/80x15.png) [Creative Commons Zero v1.0 Universal]((http://creativecommons.org/publicdomain/zero/1.0/)`;
    case 'Do What The F*ck You Want To Public License':
      return `![License](https://img.shields.io/badge/License-WTFPL-brightgreen.svg) [Do What The F*ck You Want To Public License](http://www.wtfpl.net/about/)`;
    case 'MIT':
      return `![License](https://img.shields.io/badge/License-MIT-yellow.svg) [MIT](https://opensource.org/licenses/MIT)`;
    case 'Mozilla Public License 2.0':
      return `![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg) [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`;
    case 'The Unlicense':
      return `![License](https://img.shields.io/badge/license-Unlicense-blue.svg) [The Unlicense](http://unlicense.org/)`;
    case 'zLib License':
      return `![License](https://img.shields.io/badge/License-Zlib-lightgrey.svg) [zLib License](https://opensource.org/licenses/Zlib)`;
    default: ''
  }
};

// Renders the license section, but Empties the line if there is no license chosen
const renderLicenseSection = (license) => {
  if(license == '') {
    return ''
  } else {
    return `
### License

Protected under the: ${license} ${renderLicenseBadge(license)}
`
  }
};

// Generates the markdown based on users responses
const generateMarkdown = (responses) => {
return `# ${responses.title}

### Description

${responses.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Useage](#useage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Contact](#Contact)

### Installation

${responses.installation}

### Useage

${responses.useage}
${renderLicenseSection(responses.license)}
### Contributing

${responses.contributing}

### Tests

${responses.tests}

### Contact

Author: ${responses.firstname} ${responses.lastname}

Email: ${responses.email}

Github: [My Github](https://github.com/${responses.username})
`;
}

module.exports = generateMarkdown;