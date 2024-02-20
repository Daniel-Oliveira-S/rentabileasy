type ctaProps = {
  children?: React.ReactNode;
  href: string;
  classname: string;
  target?: string;
};

export function Cta(Props: ctaProps) {
  return (
    <a className={Props.classname} target={Props.target} href={Props.href}>
      {Props.children}
    </a>
  );
}
