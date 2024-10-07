export const getDateDiff = (date: string) => {
    const _date = new Date(date);
    const today = new Date();
    const difTime = _date.getTime() - today.getTime();
    const diffDays = Math.floor(difTime / 86400000);
    const diffHours = Math.floor((difTime % 86400000) / 3600000);
    const diffMinutes = Math.round(((difTime % 86400000) % 3600000) / 60000);
    return {
        days: diffDays,
        hours: diffHours,
        minutes: diffMinutes,
    };
};
