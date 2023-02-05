// Import of styled component
import { StyledButtonSVG } from "./Icons.styled";

export function SmallMinus() {
  return (
    <StyledButtonSVG
      aria-label="minus icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
    </StyledButtonSVG>
  );
}
