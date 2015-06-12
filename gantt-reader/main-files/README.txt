# timetraveljs-gantt-reader

# ----------------------------------------------------------------------------#
# Thank you for the purchase of this Gantt Reader JavaScript library          #
# ----------------------------------------------------------------------------#

# You will find the documentation at this location :
# gantt-reader/doc/Timetraveljs Gantt Reader.pdf

# To run the demo or the examples you will need to launch a http server at the
# root of the package to prevent cross-scripting security issues
# For example with python

cd gantt-reader
python -m SimpleHTTPServer

# then go to

http://localhost:8000/demo




# package content

gantt-reader                                       // root folder
|-- dist                                           // library content folder
|   |-- css
|   |   `-- ganttchart.css                         // css to always import
|   |-- image
|   |   `-- gantt-reader.svg                       // branding image
|   |
|   |-- locale                                     // locales folder
|   |   `-- fr-fr.js
|   |-- theme                                      // theme folder
|   |   |-- BluegreyLightblue.js
|   |   |-- BlueYellow.js
|   |   |-- BrownCyan.js
|   |   |-- CyanOrange.js
|   |   |-- DeeporangeCyan.js
|   |   |-- DeeppurplePurple.js
|   |   |-- GreyRed.js
|   |   `-- TealYellow.js
|   |-- timetraveljs-gantt-reader-all-included.js  // import this file if you want to all themes and
|   |                                              // locales included
|   |
|   |-- timetraveljs-gantt-reader.js               // import this file to only load default theme and
|   |                                              // locale
|   |
|   |-- timetraveljs-gantt-reader-with-locales.js  // import this file to get all locales included
|   |
|   `-- timetraveljs-gantt-reader-with-themes.js   // import this file to get all themes included
|
|-- demo                                           // demo folder
|-- doc
|   |-- timetravel-gantt-reader.pdf
|   `-- examples                                   // documentation examples
|
|-- CHANGELOG.txt                                  // history of the versions
|
`-- README.txt                                     // to read at first