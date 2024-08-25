import resetForm from "../tool/resetForm.js"
import collectFormData from "../tool/collectFormData.js"

import { database, shareSignal, editModalSignal } from "../../index.js"

export default async function shareInsertFormListener(event) {
  event.preventDefault()
    
  const share = { id: window.crypto.randomUUID(), ...collectFormData(new FormData(event.currentTarget).entries()) }

  database.update((data) => {
    const newValue = { shares: [...data.shares, {...share, budget: undefined }], budget: share.budget }
    shareSignal.emit(() => newValue)
    editModalSignal.emit()
    return newValue
  })

  resetForm(event.currentTarget)
}