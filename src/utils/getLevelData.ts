export const getFieldValue = (data: any, field: any) => {
    if (field.includes(".")) {
        const fields = field.split(".");
        const level1 = data[fields[0]];
        const level2 = level1[0][fields[1]];
        return level2;
    } else {
        return data[field];
    }
}