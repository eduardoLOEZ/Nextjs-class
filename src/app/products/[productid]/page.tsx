import React from "react";

export default function ProductDetails({
  params,
}: {
  params: { productid: string };
}) {
  return <div>page products details {params.productid}</div>;
}
