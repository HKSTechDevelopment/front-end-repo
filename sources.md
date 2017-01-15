Code adapted from:

// DID NOT USE https://bl.ocks.org/eesur/8678df74ee7efab6d645de07a79ebcc5

// DID NOT USE http://bl.ocks.org/mbostock/29cc3cc4078091fd2115


http://bl.ocks.org/NPashaP/a74faf20b492ad377312
https://gist.github.com/NPashaP/a74faf20b492ad377312


DATA:
Source:  U.S. Census Bureau, 2015 American Community Survey 1-Year Estimates

The data came as a CSV. I cleaned up the CSV using Sublime Text's multi-line cursor and then converted it to JSON using CSVKit in the command line: 

csvjson US_state_gini.csv | python -m json.tool > US_state_gini.json

I removed Puerto Rico and changed District of Columbia to Washington DC to match uStates.js
