# Dev Team HTML Generator

## Description

This tool will create a HTML file that display your dev team's information.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation

First clone the repo to your local machine. You will need to have [node.js](https://nodejs.org/en/) installed. The from the root of the repo run ```npm install```, this will install all the dependencies needed for the script to work.

## Usage


Once everything is installed, you can run ```node index.js``` at the root of the repo. You will be prompted with some questions, answer all of them. Then your input will be used to create a the HTML file in the ```dist``` directory.
[Demo Video](https://drive.google.com/file/d/1CFbXusZfGdnSoL9sOp_CoL_u92_Uqwgw/view)