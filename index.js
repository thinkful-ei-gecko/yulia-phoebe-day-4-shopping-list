'use strict';
// Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().

// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
function addNewItem () {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const newItem = $('#shopping-list-entry').val();
    $('.shopping-list').append(`
      <li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });
}

// check and uncheck items (strikethrough) on the list by clicking the "Check" button
function checkUncheckItem () {
  $('.shopping-list').on('click','.shopping-item-toggle', function(event) {
    // we don't need prevent default bc button doesn't have default behavior
    $(event.currentTarget).closest('li').find('span.shopping-item').toggleClass('shopping-item__checked');
  });
}

// permanently remove items from the list

function deleteItem () {
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(event.currentTarget).closest('li').remove();
  });
}

$(addNewItem);
$(checkUncheckItem);
$(deleteItem);
