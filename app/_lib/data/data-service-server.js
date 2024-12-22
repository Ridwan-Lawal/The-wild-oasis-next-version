export async function createBlurDataURL(imageUrl) {
  try {
    // Fetch the image and generate placeholder
    const { base64 } = await getPlaiceholder(imageUrl);
    return base64;
  } catch (error) {
    console.error("Error generating blur placeholder:", error);
    return error.message;
  }
}
