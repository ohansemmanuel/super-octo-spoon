export const notReachable = (_: never) => {
  // ideally log this (e.g., sentry)
  throw new Error(
    `Should not be reached but received param, ${JSON.stringify(_)}`
  );
};
