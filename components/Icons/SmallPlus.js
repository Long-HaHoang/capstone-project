// Import of styled component
import { StyledButtonSVG } from "./Icons.styled";

export function SmallPlus() {
  return (
    <StyledButtonSVG
      aria-label="plus icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </StyledButtonSVG>
  );
}
