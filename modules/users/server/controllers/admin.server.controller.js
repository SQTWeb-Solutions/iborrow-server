'use strict';

/**
 * Module dependencies
 */
var _ = require('lodash');

/**
 * Extend user's controller
 */
module.exports = _.extend(
  require('./admin/admin.authentication.server.controller'),
  require('./admin/admin.users.server.controller')
);
