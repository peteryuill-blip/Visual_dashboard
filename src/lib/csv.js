import Papa from 'papaparse';

export const parseCSV = (file) => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        if (results.errors.length > 0) {
          // Provide a structured error for parsing failure
          const firstError = results.errors[0];
          reject(new Error(`CSV parse error on row ${firstError.row || 'unknown'}: ${firstError.message}`));
          return;
        }

        const requiredCols = ["t_code", "week", "height_cm", "width_cm", "substrate", "ink", "date", "sub_type", "disposition"];
        const fields = results.meta.fields;
        const missingCols = requiredCols.filter(c => !fields.includes(c));

        if (missingCols.length > 0) {
          reject(new Error(`CSV missing required columns: ${missingCols.join(', ')}`));
          return;
        }

        if (results.data.length === 0) {
          reject(new Error("CSV is empty."));
          return;
        }

        resolve(results.data);
      },
      error: (error) => {
        reject(new Error(`CSV parse error: ${error.message}`));
      }
    });
  });
};

export const extractTCode = (filename) => {
  const match = filename.match(/T_\d+/);
  return match ? match[0] : null;
};

export const formatBriefing = (index, tCode, metadata) => {
  // Image 1: T_[number] | [H]cm x [W]cm | [substrate] | [ink] | [date] | W[week] | [sub-type] | [disposition]
  const val = (key) => {
    const v = metadata[key];
    return (v === undefined || v === null || v.toString().trim() === "") ? "[--]" : v;
  };

  return `Image ${index}: ${tCode} | ${val('height_cm')}cm x ${val('width_cm')}cm | ${val('substrate')} | ${val('ink')} | ${val('date')} | W${val('week')} | ${val('sub_type')} | ${val('disposition')}`;
};
