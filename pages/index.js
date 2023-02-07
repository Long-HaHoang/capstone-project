import styled from "styled-components";

import Gallery from "@/components/Gallery";

export default function HomePage({ onCartItem }) {
  return <Gallery onCartItem={onCartItem} />;
}
