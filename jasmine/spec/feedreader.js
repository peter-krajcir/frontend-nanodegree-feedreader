/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    "use strict";
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // loop through the allFeeds variable and check the variable url
        it('all entries have URL defined and are not empty', function() {
            for(var i=0;i<allFeeds.length;i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
        });

        // loop through the allFeeds variable and check the variable name
        it('all entries have NAME defined and are not empty', function() {
            for(var i=0;i<allFeeds.length;i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
        });
    });

    describe('The menu', function() {

        // the left menu is visible when body element doesn't have .menu-hidden class set
        it('is hidden by default', function() {
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

        // click emulated by jquery's function click
        // used the same test as in previous test for checking menu visibility
        it('shows when clicked on the icon and then hides when clicked again', function() {
            $(".menu-icon-link").click();
            expect($("body").hasClass("menu-hidden")).not.toBe(true);
            $(".menu-icon-link").click();
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

    });

    describe('Initial Entries', function() {

        // to perform this async test, we call function loadFeed with additional callback function - done()
        beforeEach(function(done) {
            setTimeout(function() {
                loadFeed(0, function() {
                    done();
                });
            }, 1);
        });

        // the test checks if element with class .feed has at least 1 item with .entry-link class after async load is completed
        it('should be asynchronously loaded and put in .feed element', function(done) {
            expect($('.feed .entry-link').length).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', function() {
        var firstLoadContent = '';
        var secondLoadContent = '';

        // the function first loads feed 0 and in the callback stores the html content of  the '.feed' element to firstLoadContent variable
        // and then loads feed 1 and in its callback stores the html content of the '.feed' element to secondLoadContent and call done()
        beforeEach(function(done) {
            setTimeout(function() {
                loadFeed(0, function() {
                    firstLoadContent = $('.feed').html();
                    loadFeed(1, function() {
                        secondLoadContent = $('.feed').html();
                        done();
                    });
                });
            }, 1);
        });

        // compares the changes after first load (feed[0]) and second load (feed[1])
        it('changes the actual content on the webpage (feed[0] and feed[1])', function(done) {
            expect(firstLoadContent).not.toBe(secondLoadContent);
            done();
        });
    });
}());
