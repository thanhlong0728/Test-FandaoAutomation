describe('Account Feature', function () {
    before(function () {
        console.log('BEFORE ALL TEST CASE');
    });

    after(function () {
        console.log('AFTER ALL TEST CASE');
    });

    beforeEach(function () {
        console.log('Before Each Test Case');
    });
    afterEach(function () {
        console.log('After Each Test Case');
    });

    it('should show error when missing email', function () {
        console.log('First Test Case');
    });

    it('should create an account successfully', function () {
        console.log('Second Test Case');
    });
});
