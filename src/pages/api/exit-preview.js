/**
 * Exit preview mode and redirect to homepage.
 *
 */
export default async function exit(req, res) {
  res.clearPreviewData();
  res.writeHead(307, { Location: "/" });
  res.end();
}
