export const isPresence = (value: string, errorMessage: string) => {
  if (!value?.trim()) {
    return errorMessage;
  }
  return "";
};

export const isValidDomainName = (domainName: string) => {
  const reg =
    /((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}/;
  return reg.test(domainName);
};

export const isValidHttpUrl = (url: string, errorMessage = "Invalid URL") => {
  const reg = /^https?:\/\/(www\.)?/;
  if (url && !reg.test(url)) {
    return errorMessage;
  }

  return "";
};

export const isValidDomainUrl = (
  domain: string,
  errorMessage = "Invalid domain"
) => {
  if (!domain) return errorMessage;
  const reg =
    /^https?:\/\/(www\.)?((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}/;
  if (domain && !reg.test(domain)) {
    return errorMessage;
  }

  return "";
};

export const checkNumber = (number: string) => {
  return /^-?\d*$/.test(number);
};

export const isValidEmail = (value: string, errorMessage = "Invalid email") => {
  if (
    !!value &&
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    )
  ) {
    return errorMessage;
  }

  return "";
};

export const checkContainsSpecialChars = (text: string) => {
  const specialChars = /[`!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
  return specialChars.test(text);
};
