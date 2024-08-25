import resetForm from "../tool/resetForm.js"

import { modalContainer } from "../constant.js"

export default function editFormCloseButtonListener(event) {
  modalContainer.classList.add('modal_container_hidden')
  resetForm(event.target.closest('form'))
}