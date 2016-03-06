
module.exports = function(webpackConfig) {
  //webpackConfig.babel.plugins.push('antd');
  webpackConfig.module.loaders.forEach(function(e){
  	console.log(e);
  });
  return webpackConfig;
};
