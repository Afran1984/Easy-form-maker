

const STORAGE_KEY = "form_data";

export const saveFormData = (data: Record<string, any>) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving form data:", error);
  }
};

export const loadFormData = (): Record<string, any> | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error loading form data:", error);
    return null;
  }
};

export const clearFormData = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Error clearing form data:", error);
  }
};
