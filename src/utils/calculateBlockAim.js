const dateTuHours = (date) => {
    const [hour, min] = date.split(':');
return (+hour + (min / 60)).toFixed(2);

}

export const calculateBLockAim = (data, maxHours, quantity_days) => {
    if (!data || maxHours === 0 || maxHours === '0') return 0;

    const aimHourCapacity = data
    .reduce((prev, curr) => {
        const mon = +dateTuHours(curr.mon);
        const tue = +dateTuHours(curr.tue);
        const wed = +dateTuHours(curr.wed);
        const thu = +dateTuHours(curr.thu);
        const fri = +dateTuHours(curr.fri);
        const sat = +dateTuHours(curr.sat);
        const sun = +dateTuHours(curr.sun);

        return prev + mon + tue + wed + thu + fri + sat + sun
    }, 0);

    console.log(aimHourCapacity)

    return (aimHourCapacity / (+maxHours * quantity_days) * 100).toFixed(2)
}