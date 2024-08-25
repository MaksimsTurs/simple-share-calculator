import { SHARE_LIST_EMPTY_HTML } from '../constant.js'

const shareList = document.getElementById('share_list')

export default function renderShareList(props) {  
  if(props.shares.length === 0) {
    return shareList.innerHTML = 
    `
      <li class="share_list_header flex_row_space-between">
        <p>Name</p>
        <p>Price</p>
        <p>Divident</p>
        <p>Potential count</p>
        <p>Max divident</p>
        <p>Actions</p>
      </li>
      ${SHARE_LIST_EMPTY_HTML}
    `
  }
  
  shareList.innerHTML = 
  `
    <li class="share_list_header flex_row_space-between">
      <p>Name</p>
      <p>Price</p>
      <p>Divident</p>
      <p>Potential count</p>
      <p>Max divident</p>
      <p>Actions</p>
    </li>
  `

  shareList.insertAdjacentHTML('beforeend', props.shares.map(share => {
    let sharesCount = Math.floor(props.budget / share.price).toFixed(0)
    let totalDivident = (sharesCount * share.dividend).toFixed(2)

    sharesCount = (Number.isNaN(sharesCount) || !/[0-9]/.test(sharesCount)) ? 0 : sharesCount
    totalDivident = (Number.isNaN(totalDivident) || !/[0-9]/.test(totalDivident)) ? 0 : totalDivident
    
    return(
      `
      <li class="share_list_item flex_row_space-between">
        <section>${share.name}</section>
        <section>${share.price}${share.currency}</section>
        <section>${share.dividend}${share.currency}</section>
        <section>${sharesCount}</section>
        <section>${totalDivident}${share.currency}</section>
        <section>
          <button data-id="${share.id}" class="share_button delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
          </button>
          <button data-id="${share.id}" class="share_button edit">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
          </button>
        </section>
      </li>
      `
    )
  }).join(''))
}