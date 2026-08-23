import { type ReactNode } from "react";

export interface Crumb {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-ink-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.path && !isLast ? (
                <a href={item.path} className="hover:text-brand-accent transition-colors">{item.label}</a>
              ) : (
                <span className={isLast ? "text-ink font-medium" : ""}>{item.label}</span>
              )}
              {!isLast && <span className="text-ink-muted/40">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

interface PageHeaderProps {
  breadcrumbs: Crumb[];
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHeader({ breadcrumbs, title, description, children }: PageHeaderProps) {
  return (
    <div className="border-b border-ink/10 bg-white">
      <div className="container-content py-10 md:py-14">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="heading-1 text-ink max-w-3xl">{title}</h1>
        {description && <p className="text-lead mt-4 max-w-2xl">{description}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  );
}
