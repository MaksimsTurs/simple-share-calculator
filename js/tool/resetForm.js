export default function resetForm(target) {
  const inputs = target.getElementsByTagName('input')

  for(let index = 0; index < inputs.length; index++) {
    if(inputs[index].type === 'checkbox') inputs[index].checked = false
    else inputs[index].value = ''
  }
}

