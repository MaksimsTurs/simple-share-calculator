import is from "./is.js"

export default function collectFormData(formEntries) {
  let JSONData = {}

  const stringTypes = ['text', 'select-one']
  
  for(let [key, value] of formEntries) {
    const type = document.getElementsByName(key)[0].type

    if(is.isNumber(value) || type === 'number') {
      const parsedFloat = parseFloat(value)
      JSONData = {...JSONData, [key]: Number.isNaN(parsedFloat) ? 0 : parsedFloat }
    } 
    
    if(is.isString(value) || stringTypes.includes(type)) {
      const _value = (value.length === 0 || value === 'undefined') ? '[EMTPY STRING]' : value
      JSONData = {...JSONData, [key]: _value }
    }
  }

  return JSONData
} 