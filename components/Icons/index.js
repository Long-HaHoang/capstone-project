const paths = {
  arrowleft: {
    path: "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18",
    viewbox: "0 0 24 24",
  },
  cart: {
    path: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
    viewbox: "0 0 24 24",
  },
  minus: {
    path: "M18 12H6",
    viewbox: "0 0 24 24",
  },
  plus: {
    path: "M12 6v12m6-6H6",
    viewbox: "0 0 24 24",
  },
};

export default function SVGIcon({ variant, width, color = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={1.5}
      viewBox={paths[variant].viewbox}
      width={width}
      fill="none"
      stroke={color}
    >
      <title>{variant}</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={paths[variant].path}
      />
    </svg>
  );
}
