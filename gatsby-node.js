exports.onCreatePage = ({ page, actions }) => {
	const { createPage } = actions;
	// Make the front page match everything client side.
	// Normally your paths should be a bit more judicious.
	if (page.path === `/`) {
		page.matchPath = `/*`;
		createPage(page);
	}
};

// Work around to resolve @hot-loader issues
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}