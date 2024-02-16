type ctaProps = {
  children?: React.ReactNode;
  href: string;
  classname: string;
};

export function Cta(Props: ctaProps) {
  return (
    <a className={Props.classname} href={Props.href}>
      {Props.children}
    </a>
  );
}
