import { getProduct } from "@/helpers/db";

export default async function handler(request, response) {
  switch (request.method) {
    case "GET": {
      const product = await getProduct(request.query.id);
      if (!product) {
        response.status(404).json({
          message: `Product ${request.query.id} was not found`,
        });
      } else {
        response.status(200).json(product);
      }
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
