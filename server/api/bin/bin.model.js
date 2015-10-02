'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BinSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Bin', BinSchema);
