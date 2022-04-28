// Show current date and time on navigation
export const showDate = () => {
    const today = new Date()
    const date =
        today.getDate() +
        '.' +
        (today.getMonth() + 1) +
        '.' +
        today.getFullYear() +
        ' and the time is ' +
        today.getHours() +
        ':' +
        String(today.getMinutes()).padStart(2, '0')
    return date
}

// Convert timestamp to date format
export const convertTime = (commentTime) => {
    const date = new Date(commentTime)
    const formattedDate =
        date.getDate() +
        '.' +
        (date.getMonth() + 1) +
        '.' +
        date.getFullYear() +
        '.' +
        date.getHours() +
        ':' +
        String(date.getMinutes()).padStart(2, '0')
    return formattedDate
}

// Change Title based on active View
export const changeTitleBasedOnView = (
    matchBlogs,
    matchBlogPage,
    setTitleToShow
) => {
    matchBlogs || matchBlogPage
        ? setTitleToShow('List of Blogs')
        : setTitleToShow('')
}
