export const SHARE_LIST_EMPTY_HTML = 
`
<li class="share_list_empty">
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-frown"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
  <p>No share finded!</p>
</li>
`

export const shareInsertForm = document.getElementById('share_insert_form')
export const shareEditForm = document.getElementById('share_form_edit')
export const modalContainer = document.querySelector('.modal_container')
export const editFormCloseButton = document.querySelector('.stop_editing')
export const budgetInput = document.getElementById('budget_input')