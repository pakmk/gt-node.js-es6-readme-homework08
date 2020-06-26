// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.license}
  
  ## Description
    ${data.projectDescription}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Contact and GitHub](#contact)
  
  ## Installation
  ${data.dependencies}
  
  ## Usage
  ${data.usingRepo}

  ## Credits
  
  This site was designed by the curriculum team and the designs were provided to me.
  
  ## License
  ${data.license}
  

  ## Contributing
  ${data.contributingRepo}
  
  ## Tests
  ${data.tests}
  

  ## Contact
  Email: ${data.email}
  Github: https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;
