type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  external?: boolean;
};

export default function SafeLink({ external, ...props }: Props) {
  const isExternal = external ?? /^https?:\/\//i.test(props.href || "");
  if (isExternal) {
    return (
      <a
        {...props}
        target="_blank"
        rel="noopener noreferrer"
      />
    );
  }
  return <a {...props} />;
}
