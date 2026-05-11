export async function GET(request) {
  return Response.json({
    status: "success",
    message: "Hello from the API route!",
  });
}
