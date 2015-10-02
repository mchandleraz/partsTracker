'use strict';

var _ = require('lodash');
var Item = require('./item.model');

function handleError (res, err) {
  return res.status(500).send(err);
}

/**
 * @api {get} /items Get a list of items
 * @apiVersion 0.1.0
 * @apiName GetItems
 * @apiDescription Get all the item.
 * @apiGroup Items
 *
 */
exports.index = function (req, res) {
  Item.find(function (err, items) {
    if (err) { return handleError(res, err); }
    return res.status(200).json(items);
  });
};

/**
 * @api {get} /items/:id Get a single item
 * @apiVersion 0.1.0
 * @apiName GetItem
 * @apiDescription Get only one unique element of item based on its unique id.
 * @apiGroup Items
 *
 * @apiParam {String} id Items unique id.
 *
 */
exports.show = function (req, res) {
  Item.findById(req.params.id, function (err, item) {
    if (err) { return handleError(res, err); }
    if (!item) { return res.status(404).end(); }
    return res.status(200).json(item);
  });
};

/**
 * @api {post} /items Create a new item
 * @apiVersion 0.1.0
 * @apiName CreateItem
 * @apiDescription Creates a new item.
 * @apiGroup Items
 *
 */
exports.create = function (req, res) {
  Item.create(req.body, function (err, item) {
    if (err) { return handleError(res, err); }
    return res.status(201).json(item);
  });
};

/**
 * @api {put} /items/:id Updates an existing item
 * @apiVersion 0.1.0
 * @apiName UpdateItem
 * @apiDescription Update an element of item based on its unique id.
 * @apiGroup Items
 *
 * @apiParam {String} id Items unique id.
 *
 */
exports.update = function (req, res) {
  if (req.body._id) { delete req.body._id; }
  Item.findById(req.params.id, function (err, item) {
    if (err) { return handleError(res, err); }
    if (!item) { return res.status(404).end(); }
    var updated = _.merge(item, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(item);
    });
  });
};

/**
 * @api {delete} /items/:id Deletes a item
 * @apiVersion 0.1.0
 * @apiName RemoveItem
 * @apiDescription Delete an element of item based on its unique id.
 * @apiGroup Items
 *
 * @apiParam {String} id Items unique id.
 *
 */
exports.destroy = function (req, res) {
  Item.findById(req.params.id, function (err, item) {
    if (err) { return handleError(res, err); }
    if (!item) { return res.status(404).end(); }
    item.remove(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(204).end();
    });
  });
};
