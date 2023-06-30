window.addEventListener('DOMContentLoaded', function() {

    var targetDate = new Date('2023-06-30T23:59:59').getTime();
  

    var timer = setInterval(function() {

      var currentDate = new Date().getTime();

      var remainingTime = targetDate - currentDate;
  

      var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  

      document.getElementById('timer').textContent = minutes.toString().padStart(2, '0') + ' minutes ' +
                                                      seconds.toString().padStart(2, '0') + ' seconds left';

      if (remainingTime < 0) {
        clearInterval(timer);
        document.getElementById('timer').textContent = 'Expired';
      }
    }, 1000);
  });

  
  window.addEventListener('DOMContentLoaded', function() {
    var bidList = document.getElementById('bidList');
    var bidButton = document.getElementById('bidButton');
  
    bidButton.addEventListener('click', function() {
      var bidAmount = document.getElementById('amount').value;
      var formattedBidAmount = formatCurrency(bidAmount);
      var listItem = document.createElement('li');
      listItem.textContent = formattedBidAmount;
  
      var leaderboardItems = Array.from(bidList.getElementsByTagName('li'));
      var insertIndex = findInsertIndex(leaderboardItems, bidAmount);
  
      if (insertIndex === -1) {
        bidList.appendChild(listItem);
      } else {
        bidList.insertBefore(listItem, bidList.children[insertIndex]);
      }

      if (bidList.children.length > 3) {
        for (var i = 3; i < bidList.children.length; i++) {
          bidList.removeChild(bidList.children[i]);
        }
      }
    });
  
    function formatCurrency(amount) {
      var currencyFormat = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
      });
      return currencyFormat.format(amount);
    }
  
    function parseCurrency(value) {
      return Number(value.replace(/[^0-9.-]+/g, ''));
    }
  
    function findInsertIndex(items, bidAmount) {
      var bidValue = parseCurrency(bidAmount);
  
      for (var i = 0; i < items.length; i++) {
        var currentItemValue = parseCurrency(items[i].textContent);
        if (bidValue > currentItemValue) {
          return i;
        }
      }
  
      return -1; 
    }
  });
  