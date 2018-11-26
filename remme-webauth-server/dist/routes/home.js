"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _remme = require("remme");

var _remme2 = _interopRequireDefault(_remme);

var _remmeUtils = require("remme-utils");

var _config = require("../config");

var _functions = require("../functions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var remme = new _remme2.default.Client({
  networkConfig: {
    nodeAddress: _config.nodeAddress
  }
});
var router = _express2.default.Router();

router.get("/", function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var backURL, certificate, cert, isValid, check, session, _ref2, userId, store, _ref3, secret;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            backURL = req.header('Referer');

            if (req.get('X-SSL-Client-Cert')) {
              _context.next = 4;
              break;
            }

            res.redirect(backURL + "?isOk=false&name=false&userId=false&ga=false");
            return _context.abrupt("return");

          case 4:
            certificate = decodeURIComponent(req.get('X-SSL-Client-Cert'));
            cert = (0, _remmeUtils.certificateFromPem)(certificate);

            if (!certificate) {
              _context.next = 39;
              break;
            }

            isValid = false;
            _context.prev = 8;
            _context.next = 11;
            return remme.certificate.check(certificate);

          case 11:
            check = _context.sent;

            isValid = check;
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](8);

            res.redirect(backURL + "?isOk=false&name=false&userId=false&ga=false");

          case 18:
            if (!isValid) {
              _context.next = 36;
              break;
            }

            _context.next = 21;
            return (0, _functions.getCollection)("session");

          case 21:
            session = _context.sent;
            _context.next = 24;
            return session.insertOne({ certificate: certificate });

          case 24:
            _ref2 = _context.sent;
            userId = _ref2.insertedId;
            _context.next = 28;
            return (0, _functions.getCollection)("certificates");

          case 28:
            store = _context.sent;
            _context.next = 31;
            return store.findOne({ hashOfCertificate: (0, _remmeUtils.sha256)(certificate.replace(/\r?\n?/g, "")) });

          case 31:
            _ref3 = _context.sent;
            secret = _ref3.secret;


            res.redirect(backURL + "?isOk=true&name=" + cert.subject.getField('CN').value + "&userId=" + userId + "&ga=" + !!secret);
            _context.next = 37;
            break;

          case 36:
            res.redirect(backURL + "?isOk=false&name=false&userId=false&ga=false");

          case 37:
            _context.next = 40;
            break;

          case 39:
            res.redirect(backURL + "?isOk=false&name=false&userId=false&ga=false");

          case 40:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[8, 15]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

router.delete('/', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var userId, session;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            userId = req.body.userId;
            _context2.next = 3;
            return (0, _functions.getCollection)("session");

          case 3:
            session = _context2.sent;
            _context2.next = 6;
            return session.deleteOne({ user: userId });

          case 6:

            res.json({ success: true });

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}());

exports.default = router;