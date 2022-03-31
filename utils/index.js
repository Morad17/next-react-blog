export const sortByDate = (a, b) => {
    return new Date(b.frontmatter - new Date(a.frontmatter))
}