export function getStrapiURL(path = "") {
  return `${process.env.NEXT_PUBLIC_STRAPI_URL ||
    "http://localhost:1337"}${path}`;
}

export const getToken = () => {
  return process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || null;
};

export function getStrapiMedia(url: string | null) {
  if (url == null) {
    return null;
  }

  return `${process.env.NEXT_PUBLIC_STRAPI_URL_IMG}${url}`;
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return date.toLocaleDateString("en-US", options);
}

// ADDS DELAY TO SIMULATE SLOW API REMOVE FOR PRODUCTION
export const delay = (time: number) =>
  new Promise(resolve => setTimeout(() => resolve(1), time));
