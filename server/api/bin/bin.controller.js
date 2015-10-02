'use strict';

var _ = require('lodash');
var Bin = require('./bin.model');

function handleError (res, err) {
  return res.status(500).send(err);
}

/**
 * @api {get} /bins Get a list of bins
 * @apiVersion 0.1.0
 * @apiName GetBins
 * @apiDescription Get all the bin.
 * @apiGroup Bins
 *
 */
exports.index = function (req, res) {
  Bin.find(function (err, bins) {
    if (err) { return handleError(res, err); }
    return res.status(200).json(bins);
  });
};

/**
 * @api {get} /bins/:id Get a single bin
 * @apiVersion 0.1.0
 * @apiName GetBin
 * @apiDescription Get only one unique element of bin based on its unique id.
 * @apiGroup Bins
 *
 * @apiParam {String} id Bins unique id.
 *
 */
exports.show = function (req, res) {
  Bin.findById(req.params.id, function (err, bin) {
    if (err) { return handleError(res, err); }
    if (!bin) { return res.status(404).end(); }
    return res.status(200).json(bin);
  });
};

/**
 * @api {post} /bins Create a new bin
 * @apiVersion 0.1.0
 * @apiName CreateBin
 * @apiDescription Creates a new bin.
 * @apiGroup Bins
 *
 */
exports.create = function (req, res) {
  Bin.create(req.body, function (err, bin) {
    if (err) { return handleError(res, err); }
    return res.status(201).json(bin);
  });
};

/**
 * @api {put} /bins/:id Updates an existing bin
 * @apiVersion 0.1.0
 * @apiName UpdateBin
 * @apiDescription Update an element of bin based on its unique id.
 * @apiGroup Bins
 *
 * @apiParam {String} id Bins unique id.
 *
 */
exports.update = function (req, res) {
  if (req.body._id) { delete req.body._id; }
  Bin.findById(req.params.id, function (err, bin) {
    if (err) { return handleError(res, err); }
    if (!bin) { return res.status(404).end(); }
    var updated = _.merge(bin, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(bin);
    });
  });
};

/**
 * @api {delete} /bins/:id Deletes a bin
 * @apiVersion 0.1.0
 * @apiName RemoveBin
 * @apiDescription Delete an element of bin based on its unique id.
 * @apiGroup Bins
 *
 * @apiParam {String} id Bins unique id.
 *
 */
exports.destroy = function (req, res) {
  Bin.findById(req.params.id, function (err, bin) {
    if (err) { return handleError(res, err); }
    if (!bin) { return res.status(404).end(); }
    bin.remove(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(204).end();
    });
  });
};
