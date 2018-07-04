var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  let name = (who === undefined) ? 'you' : who;
  return `One for ${name}, one for me.`
};

module.exports = TwoFer;