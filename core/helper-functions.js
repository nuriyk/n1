import Vue from 'vue'

export const getCanonicalUrl = (route) => {
  const forwardSlash =
    route.fullPath[route.fullPath.length - 1] === '/' ? '' : '/'
  return `${process.env.rootDomain}${route.fullPath}${forwardSlash}`
}