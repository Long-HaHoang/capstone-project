import { createProduct, getAllProducts } from "@/helpers/db";

export default async function handler(request, response) {
  switch (request.method) {
    case "GET": {
      const products = await getAllProducts();
      response.status(200).json(products);
      break;
    }
    case "POST": {
      const product = JSON.parse(request.body);
      const createdProduct = await createProduct(product);
      response.status(201).json(createdProduct);
    }

    default: {
      response
        .status(405)
        .setHeader("Allow", "GET,POST")
        .json({
          message: `Request method ${request.method} is not allowed on ${request.url}`,
        });
    }
  }
}
