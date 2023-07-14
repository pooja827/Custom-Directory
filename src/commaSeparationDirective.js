export const commaSeparationDirective = {
    mounted(el) {
      const formatValue = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
  
      const parseValue = (value) => {
        return value.replace(/,/g, "");
      };
  
      const isValidInput = (value) => {
        // Use a regular expression to check if the input consists of only numeric characters and commas
        return /^[\d,]*$/.test(value);
      };
  
      el.addEventListener("input", () => {
        const unformattedValue = parseValue(el.value);
        const formattedValue = formatValue(unformattedValue);
        el.value = formattedValue;
        el.dispatchEvent(new Event("input"));
      });

  
      el.addEventListener("keypress", (event) => {
        const charCode = event.which || event.keyCode;
        const charTyped = String.fromCharCode(charCode);
  
        const inputValue = el.value.slice(0, el.selectionStart) + charTyped + el.value.slice(el.selectionEnd);
        const inputLength = parseValue(inputValue).length;
        if (!isValidInput(inputValue) || inputLength > 15 || (inputLength === 15 && charTyped === ",")) {
          event.preventDefault();
        }
      });
    },
  };
  