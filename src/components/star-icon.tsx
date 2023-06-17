import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export const StarIcon = (restProps: Props) => {
  return (
    <svg
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: "red", width: "0.875rem", height: "0.875rem" }}
      {...restProps}
    >
      <path
        d="M2.8835 12.6667L3.96683 7.98333L0.333496 4.83333L5.1335 4.41667L7.00016 0L8.86683 4.41667L13.6668 4.83333L10.0335 7.98333L11.1168 12.6667L7.00016 10.1833L2.8835 12.6667Z"
        fill="currentColor"
      />
    </svg>
  );
};
