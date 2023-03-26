'use strict';

/**
 * thank service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::thank.thank');
