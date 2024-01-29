export const fetchJson = async <T>(url: string): Promise<T> => {
  const rawData = await fetch(url);
  const jsonData = await rawData.json();
  return jsonData.data;
};

// IDENTIFICAR POR QUE OS OBJETOS 'COVER' 'AUTHOR' E 'CATEGORIES' ESTÃO VOLTANDO UNDEFINED
