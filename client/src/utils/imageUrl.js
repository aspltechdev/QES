const SERVER_URL = "http://localhost:5000";

export function getImageUrl(image) {
  if (!image) {
    return "";
  }

  /*
    Already a complete URL.

    Examples:
    http://localhost:5000/uploads/image.jpg
    https://example.com/image.jpg
    data:image/...
    blob:...
  */
  if (
    image.startsWith("http://") ||
    image.startsWith("https://") ||
    image.startsWith("data:") ||
    image.startsWith("blob:")
  ) {
    return image;
  }

  /*
    Backend normally returns:

    /uploads/products/file.jpg

    Convert it to:

    http://localhost:5000/uploads/products/file.jpg
  */
  if (image.startsWith("/")) {
    return `${SERVER_URL}${image}`;
  }

  /*
    Handles:

    uploads/products/file.jpg
  */
  return `${SERVER_URL}/${image}`;
}

export default getImageUrl;