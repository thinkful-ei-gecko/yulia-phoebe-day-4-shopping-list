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
  console.log('function checkUncheckItem called successfully');
  $('.shopping-item-toggle').on('click', function(event) {
    // we don't need prevent default bc button doesn't have default behavior
    //this "check uncheck" portion doesn't run; method must be wrong per console.log not running
    console.log('Check button clicked successfully');
    $(event.target).closest('.shopping-item').toggleClass('.shopping-item__checked');
  });
}

// permanently remove items from the list
// this ALMOST works! problem is that it can't delete items that were added after the page was loaded :/
function deleteItem () {
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(event.currentTarget).closest('li').remove();
  });
}

$(addNewItem);
$(checkUncheckItem);
$(deleteItem);
