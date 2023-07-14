// commaSeparationDirective.js

// Define the custom directive
export const commaSeparationDirective = {
    mounted(el) {
      // Function to format the input value with commas
      const formatValue = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
  
      // Function to parse the input value without commas
      const parseValue = (value) => {
        return value.replace(/,/g, "");
      };
  
      // Add event listeners for input and blur events
      el.addEventListener("input", () => {
        const unformattedValue = parseValue(el.value);
        const formattedValue = formatValue(unformattedValue);
        el.value = formattedValue;
        el.dispatchEvent(new Event("input"));
      });
  
      el.addEventListener("blur", () => {
        const unformattedValue = parseValue(el.value);
        const formattedValue = formatValue(unformattedValue);
        el.value = formattedValue;
        el.dispatchEvent(new Event("input"));
      });
    },
  };
  