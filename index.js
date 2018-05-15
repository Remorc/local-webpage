const createColumn = columnData => `
  <div class="section">
    <label class="title centered-text">${columnData.title}</label>
    ${columnData.buttons.map(createButton).join('')}
  </div>
`

const createButton = buttonData => `
  <a class="button centered-text" href="${buttonData.href}">${buttonData.name}</a>
`

document.querySelector('.main-content').innerHTML = allSites.map(createColumn).join('')
