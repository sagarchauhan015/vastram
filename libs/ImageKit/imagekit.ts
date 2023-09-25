const ImageKit = require('imagekit');
import config from '../../config.js'

export const imagekit = new ImageKit({
  publicKey: config.imageKit.publicKey,
  privateKey: config.imageKit.privateKey,
  urlEndpoint: config.imageKit.urlEndpoint
});