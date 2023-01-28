export default function handler(request, response) {
  switch (request.method) {
    case "GET": {
      response.status(200).json("Hello, there!");
      break;
    }

    default: {
      response
        .status(405)
        .setHeader("Allow", "GET")
        .json({
          message: `Request method ${request.method} is not allowed on ${request.url}`,
        });
    }
  }
}
