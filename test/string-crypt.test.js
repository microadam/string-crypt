var stringCrypt = require('..')

describe('string-crypt', function () {

  it('should correctly encrpyt a string ', function () {
    var encrpytedString = stringCrypt('hello', 'mySecretKey')
    encrpytedString.should.equal('BROKEN')
  })

})
