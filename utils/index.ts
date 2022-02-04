export const getDisplayAddress = (
  address: string | null | undefined
): string => {
  if (!address) {
    return '';
  } else {
    return `${address.toString().slice(0, 5)}...${address
      .toString()
      .slice(-5)}`;
  }
};
