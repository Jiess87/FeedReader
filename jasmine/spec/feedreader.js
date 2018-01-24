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

    describe('RSS Feeds', function() {
        /* a test to make sure that the allFeeds variable
         * has been defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('have defined and populated URLs', function() {
          allFeeds.forEach(function(index) {
            expect(index.url).toBeDefined();
            expect(index.url).not.toBe('');
          });
        });


        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('have defined and populated Names', function() {
           allFeeds.forEach(function(index) {
             expect(index.url).toBeDefined();
             expect(index.url).not.toBe('');
           });
         });
    });

    describe('The menu', function() {

      /* a test that ensures the menu element is
      * hidden by default. You'll have to analyze the HTML and
      * the CSS to determine how we're performing the
      * hiding/showing of the menu element.
      */
      it('hides itself by default', function() {
        expect(document.body.classList.contains("menu-hidden")).toBe(true);
      });
      /* a test that ensures the menu changes
      * visibility when the menu icon is clicked. This test
      * should have two expectations: does the menu display when
      * clicked and does it hide when clicked again.
      */
      it('toggles visibility when clicked', function() {
          document.querySelector('.menu-icon-link').click();
          expect(document.body.classList.contains("menu-hidden")).toBe(false);
          document.querySelector('.menu-icon-link').click();
          expect(document.body.classList.contains("menu-hidden")).toBe(true);
      });
    });

    /* a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
      /* a test that ensures when the loadFeed
      * function is called and completes its work, there is at least
      * a single .entry element within the .feed container.
      */
      beforeEach(function(done) {
          loadFeed(0, done);
      });

      it('there is at least 1 entry', function() {
          expect($('.feed .entry').length).toBeGreaterThan(0);
      });

    });

    describe('New Feed Selection', function() {
      /* a test that ensures when a new feed is loaded
      * by the loadFeed function that the content actually changes.
      * Remember, loadFeed() is asynchronous.
      */
      var compareTo;
      beforeEach(function(done) {
        loadFeed(0, function() {
          compareTo = $('.feed .entry').html();
          loadFeed(1, done);
        });
      });

      it('content changes when a new feed is loaded', function(done) {
        expect($('.feed .entry').html()).not.toBe(compareTo);
        done();
      });
    });
}());
