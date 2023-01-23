'use strict';

/**
 * blog controller
 */

const {
    createCoreController
} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog', ({
    strapi
}) => ({
    // Method 2: Wrapping a core action (leaves core logic in place)
    async find(ctx) {
        // console.log(ctx.query.ip);
        // Calling the default core action
        const {
            data,
            meta
        } = await super.find(ctx);

        data.forEach(item => {
            try {
                strapi.entityService.update('api::blog.blog', item.id, {
                    data: {
                        views: item.attributes.views + 1,
                    },
                });
            } catch (error) {
                return error
            }

        })

        return {
            data,
            meta
        };
    },
}));