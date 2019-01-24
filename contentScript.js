function sumPoints() {
  const headers = [];
  const headersHtml = document.getElementsByClassName('ghx-column');

  if (headersHtml && headersHtml.length > 0) {
    console.log(headersHtml.length);
    for (var i = 0; i < headersHtml.length; i++) {
      const header = headersHtml[i].getElementsByClassName(
        'ghx-column-header-flex-1',
      );
      if (
        header &&
        header[0] &&
        header[0].childNodes &&
        header[0].childNodes[0] &&
        header[0].childNodes[0].innerText
      ) {
        headers.push(header[0].childNodes[0].innerText);
      }
    }

    let totalPoints = 0;
    let unSizedTickets = 0;

    const lists = document.getElementsByClassName('ghx-column ui-sortable');

    if (lists && lists.length > 0) {
      for (var i = 0; i < lists.length; i++) {
        const list = lists[i];

        const cards = list.getElementsByClassName('ghx-issue');

        let pointsSum = 0;
        if (cards && cards.length > 0) {
          for (var j = 0; j < cards.length; j++) {
            const points = parseFloat(
              cards[j] &&
                cards[j].getElementsByClassName('ghx-estimate') &&
                cards[j].getElementsByClassName('ghx-estimate')[0] &&
                cards[j].getElementsByClassName('ghx-estimate')[0].childNodes &&
                cards[j].getElementsByClassName('ghx-estimate')[0]
                  .childNodes[0] &&
                cards[j].getElementsByClassName('ghx-estimate')[0].childNodes[0]
                  .data,
            );

            if (!isNaN(points)) {
              pointsSum += points;
            } else {
              unSizedTickets += 1;
            }
          }
        }
        console.log(headers[i], pointsSum.toFixed(2));
        totalPoints += pointsSum;
        const header = headersHtml[i].getElementsByClassName(
          'ghx-column-header-flex-1',
        );
        if (
          header &&
          header[0] &&
          header[0].childNodes &&
          header[0].childNodes[0] &&
          header[0].childNodes[0].innerText
        ) {
          const pointsNode = document.createElement('h2');
          pointsNode.innerText = pointsSum;
          pointsNode.style.color = '#25c';
          pointsNode.style.fontWeight = 'bold';
          pointsNode.style.marginLeft = '10px';
          if (header[0].childNodes.length > 1) {
            header[0].replaceChild(pointsNode, header[0].childNodes[1]);
          } else {
            header[0].appendChild(pointsNode);
          }
        }
      }
    }
    console.log('TOTAL', totalPoints.toFixed(2));
    console.log('');
    console.log('UNSIZED', unSizedTickets);
  }
}

sumPoints();
