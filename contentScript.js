
setTimeout(function(){
  
  const headers = []
  const headersHtml = document.getElementsByClassName("ghx-column")
  for (var i = 0; i < headersHtml.length; i++) {
    const header = headersHtml[i].getElementsByClassName("ghx-column-header-flex-1")
    if (header.length != 0) {
      headers.push(header[0].childNodes[0].innerText)
    }
  }
    
  
  const lists = document.getElementsByClassName("ghx-column ui-sortable")
  let totalPoints = 0;
  let unSizedTickets = 0;
  for (var i = 0; i < lists.length; i++) {
    const list = lists[i]

    const cards = list.getElementsByClassName("ghx-issue ghx-newcard js-detailview js-issue js-parent-drag ghx-card-color-enabled ghx-type-10001")
    let pointsSum = 0;
    for (var j = 0; j < cards.length; j++) {
      const points = parseFloat(cards[j].getElementsByClassName("ghx-estimate")[0].childNodes[0].data);
      if(!isNaN(points)){
        pointsSum += points;
      } else {
        unSizedTickets += 1;
      }
    }
    console.log(headers[i], pointsSum.toFixed(2))
    totalPoints += pointsSum;
  }
  console.log("TOTAL", totalPoints.toFixed(2))
  console.log("")
  console.log("UNSIZED", unSizedTickets)


}, 10000)