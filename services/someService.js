export default async (someParam) => {
  if (someParam) {
    return Promise.resolve(someParam);
  }

  return Promise.resolve(42);
};
