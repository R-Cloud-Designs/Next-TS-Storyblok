export const isClientSideOnly = (): boolean => {
  return typeof window !== "undefined";
};
