export const getDateDiff = (date: string) => {
    const _date = new Date(date);
    const today = new Date();
    const difTime = _date.getTime() - today.getTime();
    const diffDays = Math.round(difTime / (1000 * 3600 * 24));
    const diffHours = Math.round(difTime / (1000 * 3600 * 24));
    return {
        days: diffDays,
    };
};
