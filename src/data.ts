const FREE_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "icloud.com",
  "aol.com",
];

export const isFreeEmailDomain = (email: string): boolean => {
  const domain = email.split("@")[1]?.toLowerCase();
  return FREE_EMAIL_DOMAINS.includes(domain);
};
