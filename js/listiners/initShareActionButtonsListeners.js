import { modalContainer } from "../constant.js"

import { editModalSignal, database, shareSignal } from "../../index.js"

export default function initShareActionButtonsListeners() {
  document
    .querySelectorAll('.share_button')
    .forEach(button => button.addEventListener('click', (event) => {
      const isDelete = event.target.classList.contains('delete')
      
      if(isDelete) {
        database.update((data) => {
          let shares = data.shares.filter(share => share.id !== event.target.dataset.id)
          const newValue = {...data, shares }
          
          shareSignal.emit(() => newValue)
          editModalSignal.emit()
          
          return newValue
        })
      } else {
        editModalSignal.emit(() => event.target.dataset.id)
        modalContainer.classList.remove('modal_container_hidden')
      }
    })
  )
}