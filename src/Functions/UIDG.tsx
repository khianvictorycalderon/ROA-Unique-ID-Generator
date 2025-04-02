export function generateUniqueID(existingIDs: string[]) {
  const generateID = () => {
      const randomPart = Math.random().toString(36).substring(2, 10).toUpperCase(); // 8-char random string
      const timePart = Date.now().toString(36).toUpperCase(); // Timestamp
      return `${randomPart}${timePart}`;
  };

  let id: string;
  const existingSet = new Set(existingIDs);

  do {
      id = generateID();
  } while (existingSet.has(id));

  return id;
}
