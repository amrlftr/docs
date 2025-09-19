export const TryEndpointLink = ({
  href,
  label = 'Try this endpoint in your',
  linkText = 'browser',
}) => {
  if (!href) {
    return null;
  }

  const isExternal = /^https?:/i.test(href);

  return (
    <p className="mt-4 text-base font-medium text-zinc-900 dark:text-zinc-100">
      {label}{' '}
      <a
        href={href}
        className="font-semibold text-primary-600 hover:underline"
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {linkText}
      </a>
      .
    </p>
  );
};
