## Prerequisites

Requires Node JS (version >= 10.0.0) and NPM (version >= 6)

The backend (https://github.com/gavob/developer-activity-service) to be running for pulling GitHub data

## Install

From the command line/powershell in the `/development-activity-frontend` directory run `npm install` to install node modules

Run `npm start` to start the application

## Usage

Open the application in a browser http://localhost:3000/

Type the name of a public repository and select 'View Activity' to see an analysis of development activity for that repo

![alt text](image.png)

Use the search bar again to find and select another repository to change the analysis

The charts for releases, commits, comments, issues and pull requests simply display number of occurrences arranged by date. 
These can be affected negatively by very active public repositories because the 100 records fetched in the backend may
be reduced to just a few instances.

The charts for active contributors and issue types display the most prevalant recent issue labels and the most active
recent contributors

The charts for issue close times and pull request times shows the time in hours for the most recent pull requests to be merged and
the times issues take to be closed