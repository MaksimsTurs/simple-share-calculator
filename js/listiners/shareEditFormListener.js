import collectFormData from '../tool/collectFormData.js'
import resetForm from '../tool/resetForm.js'

import { shareSignal, editModalSignal, database } from '../../index.js'

import { modalContainer } from '../constant.js'

export default function shareEditFormListener(event) {
  event.preventDefault()

  database.update((data) => {
    let shares = data.shares

    for(let index = 0; index < shares.length; index++) {
      if(shares[index].id === editModalSignal.data) {
        shares[index] = {...shares[index], ...collectFormData(new FormData(event.currentTarget).entries()) }
      }
    }

    const newValue = {...data, shares }

    shareSignal.emit(() => newValue)
    editModalSignal.emit(() => '')
    return newValue
  })

  modalContainer.classList.add('modal_container_hidden')
  resetForm(event.currentTarget)
}