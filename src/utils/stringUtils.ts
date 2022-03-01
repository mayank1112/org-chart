export const pluralizedStringForLength = (title: string, length: number) => {
    return length === 1 ? title : `${title}s`;
};
