import Database from './js/logic/database.js'
import Signal from './js/logic/signal.js'

import { shareInsertForm, shareEditForm, editFormCloseButton, budgetInput } from './js/constant.js'

import renderShareList from "./js/render/renderShareList.js"

import shareInsertFormListener from './js/listiners/shareInsertFormListener.js'
import shareEditFormListener from './js/listiners/shareEditFormListener.js'
import budgetInputListener from './js/listiners/budgetInputListener.js'
import initShareActionButtonsListeners from './js/listiners/initShareActionButtonsListeners.js'
import editFormCloseButtonListener from './js/listiners/editFormCloseButtonListener.js'

export const database = new Database({ name: 'shares', defaultValue: { budget: 0, shares: [] }})
const databaseData = database.get()
export const shareSignal = new Signal({ defaultValue: databaseData })
export const editModalSignal = new Signal({ defaultValue: '' })

shareSignal.connect(renderShareList)
editModalSignal.connect(initShareActionButtonsListeners)

shareSignal.emit((data) => data)
editModalSignal.emit()

shareInsertForm.addEventListener('submit', shareInsertFormListener)

shareEditForm.addEventListener('submit', shareEditFormListener)

budgetInput.addEventListener('input', budgetInputListener)

editFormCloseButton.addEventListener('click', editFormCloseButtonListener)