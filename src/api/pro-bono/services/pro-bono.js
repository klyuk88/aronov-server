'use strict';

/**
 * pro-bono service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pro-bono.pro-bono');
