export const storage = {
  set: (key: string, value: string) => localStorage.setItem(key, value),
  get: (key: string) => localStorage.getItem(key),
  remove: (key: string) => localStorage.removeItem(key),
  clear: () => localStorage.clear(),

  setJSON: (key: string, value: unknown) =>
    localStorage.setItem(key, JSON.stringify(value)),

  getJSON: <T>(key: string): T | null => {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  },
};
