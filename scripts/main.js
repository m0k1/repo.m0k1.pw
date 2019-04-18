var gplay = require('google-play-scraper');

gplay.app({appId: 'de.schildbach.wallet.faircoin_test'})
  .then(console.log, console.log);

gplay.app({appId: 'de.schildbach.wallet.faircoin'})
  .then(console.log, console.log);

