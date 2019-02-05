var ExtractTextPlugin = require("extract-text-webpack-plugin")
module.exports = {
  css: {
    extract: {
      extract: true,
      filename: 'style.css'
    },
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
          @import "@/scss/animate.scss";
          @import "~@/scss/fonts.scss";
          @import "@/scss/theme.scss";
          @import "@/scss/survey.scss";
          @import "@/scss/forms.scss";
          @import "@/scss/home.scss";
        `
      }
    }
  }
};
