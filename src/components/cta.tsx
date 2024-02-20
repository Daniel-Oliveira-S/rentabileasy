import { CSSProperties } from "react";

type ctaProps = {
  children?: React.ReactNode;
  href: string;
  classname: string;
  target?: string;
  style?: CSSProperties | undefined;
};

export function Cta(Props: ctaProps) {
  return (
    <a
      className={Props.classname}
      target={Props.target}
      style={Props.style}
      href={Props.href}
    >
      {Props.children}
    </a>
  );
}
