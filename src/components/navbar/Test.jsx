import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Test = () => {
  const [fields, setFields] = useState([{ label: "", value: "" }]);

  const addField = () => {
    setFields([...fields, { label: "", value: "" }]);
  };

  const removeField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  const updateField = (index, key, newValue) => {
    const newFields = [...fields];
    newFields[index][key] = newValue;
    setFields(newFields);  
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md w-full max-w-lg">
      <h2 className="text-xl font-bold mb-4">Dynamic Label Inputs</h2>

      {fields.map((field, index) => (
        <div key={index} className="flex items-center space-x-3 mb-2">
            
          <input
            type="text"
            placeholder="Label"
            value={field.label}
            onChange={(e) => updateField(index, "label", e.target.value)}
            className="border border-gray-300 p-2 rounded w-1/2"
          />

          <input
            type="text"
            placeholder="Value"
            value={field.value}
            onChange={(e) => updateField(index, "value", e.target.value)}
            className="border border-gray-300 p-2 rounded w-1/2"
          />

          {fields.length > 1 && (
            <button
              onClick={() => removeField(index)}
              className="p-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              <FaTrash />
            </button>
          )}
        </div>
      ))}
      
      <button
        onClick={addField}
        className="flex items-center mt-3 p-2 bg-green-500 text-white rounded hover:bg-green-700"
      >
        <FaPlus className="mr-2" /> Add Field
      </button>
    </div>
  );
};

export default Test;
