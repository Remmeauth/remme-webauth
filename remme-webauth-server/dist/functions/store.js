"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCollection = undefined;

var getCollection = exports.getCollection = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name) {
    var url, mongo, db;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "mongodb://localhost:27017";
            _context.next = 3;
            return _mongodb.MongoClient.connect(url);

          case 3:
            mongo = _context.sent;
            db = mongo.db("users");
            _context.next = 7;
            return db.collection(name);

          case 7:
            return _context.abrupt("return", _context.sent);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getCollection(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _mongodb = require("mongodb");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }