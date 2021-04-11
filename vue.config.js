module.exports = {

  css: {
    loaderOptions: {
      scss: {
        data: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
        `
      },
    }
  },
  
};