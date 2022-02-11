exports.getMime = (extname) => {
  switch (extname) {
    case ".css":
      return "text/css";
    case ".html":
      return "text/html";
    case ".js":
      return "text/javascript";
    default:
      return "text/html";
  }
};
