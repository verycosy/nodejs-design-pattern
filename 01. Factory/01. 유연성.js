function createImage(name) {
  if (name.match(/\.jpeg$/)) {
    return new JpegImage(name);
  } else if (name.match(/\.gif$/)) {
    return new GifImage(name);
  } else if (name.match(/\.png$/)) {
    return PngImage(name);
  }

  throw new Exception("Unsupported format");
}
