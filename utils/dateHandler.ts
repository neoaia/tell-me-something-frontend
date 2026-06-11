export const dateHandler = (dateString: string) => {
    const dateObj = new Date(dateString);
    return dateObj.toDateString();
}