Project 6 - Feed Reader
=======================

Run the project
---------------
In order to run the project, you need to fork/clone/download the project and click on `index.html`. You can also visit my github webapge and get the latest version. (https://github.com/peter-krajcir/frontend-nanodegree-feedreader)

GUI
-----------------------------------------------------------------------------------------------
The unit testing is provided by 3rd party framework called `Jasmine`.
The tests are divided into 4 sections:
 * RSS Feeds
 * The menu
 * Initial Entries
 * New Feed Selection

Each section tests different part and functionality of the webpage.

RSS Feeds section
-----------------
There are 3 tests:
 * the `allFeeds` variable is defined
 * all entries have URL defined and are not empty
 * all entries have NAME defined and are not empty

The menu
--------
There are 2 tests:
 * the menu is hidden by default when the page loads
 * the menu shows when clicked on the icon and then hides when clicked again

Initial Entries
---------------
There is 1 test:
 * when the loadFeed function is called and completes its work, there is at least a single `.entry` element within the `.feed` container

New Feed Selection
------------------
There is 1 test:
 * when a new feed is loaded by the loadFeed function that the content actually changes, it specifically tests first and second feed in the list and compares the content visible on the webpage