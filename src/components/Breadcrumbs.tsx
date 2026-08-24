import { type ReactNode } from "react";
import { Link } from "react-router-dom";

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
      <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.path && !isLast ? (
                <Link to={item.path} className="hover:text-brand-accent transition-colors">{item.label}</Link>
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
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

export function PageHeader({ breadcrumbs, title, description, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      <div className="absolute inset-0 grid-pattern-dark opacity-30" />
      <div className="container-content relative py-12 md:py-20">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="heading-1 text-white max-w-3xl">{title}</h1>
        {description && <p className="text-lead mt-5 text-white/70 max-w-2xl">{description}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
