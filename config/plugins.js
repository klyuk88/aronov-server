module.exports = ({ env }) => ({
  //...
  'import-export-entries': {
    enabled: true,
  },
  menus: {
    config: {
      maxDepth: 3,
    },
  },
  ckeditor: {
    enabled: true,
    config: {
      editor: {
        mediaEmbed: {
          previewsInData: true
        }
      }
    }
  }
  
  
});