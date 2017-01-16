US GINI COEFFICIENT MAP

CODE SOURCE:

http://bl.ocks.org/NPashaP/a74faf20b492ad377312

and additional material at:

https://gist.github.com/NPashaP/a74faf20b492ad377312

DATA SOURCE:
U.S. Census Bureau, 2015 American Community Survey 1-Year Estimates

DATA MANIPULATION AND CONVERSION:

The data came as a CSV. I cleaned up the CSV using Sublime Text's multi-line cursor and then converted it to JSON using CSVKit in the command line: 

csvjson US_state_gini.csv | python -m json.tool > US_state_gini.json

I removed Puerto Rico and changed District of Columbia to Washington DC to match uStates.js

I also manually converted the JSON to have state by state entries.
