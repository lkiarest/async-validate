var expect = require('chai').expect
  , format = require('../../lib/format');

describe("async-validate:", function() {

  it("should format string (%s)", function(done) {
    var res = format('%s', 'foo');
    expect(res).to.eql('foo');
    done();
  });

  it("should format multiple strings (%s:%s)", function(done) {
    var res = format('%s:%s', 'foo', 'bar');
    expect(res).to.eql('foo:bar');
    done();
  });

  it("should format digit as NaN (%d)", function(done) {
    var res = format('%d', 'foo');
    expect(res).to.eql('NaN');
    done();
  });

  it("should format digit (%d)", function(done) {
    var res = format('%d', '16');
    expect(res).to.eql('16');
    done();
  });

  it("should format json string (%j)", function(done) {
    var res = format('%j', 'foo');
    expect(res).to.eql('"foo"');
    done();
  });

  it("should format json array (%j)", function(done) {
    var res = format('%j', [1,2,3]);
    expect(res).to.eql('[1,2,3]');
    done();
  });

});