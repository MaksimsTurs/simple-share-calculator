import { shareSignal, database } from '../../index.js'

export default function budgetInputListener(event) {
  database.update((data) => {
    const newValue = {...data, budget: parseFloat(event.target.value) }
    shareSignal.emit(() => newValue)
    return newValue
  })
}