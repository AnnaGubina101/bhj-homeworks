let hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltip.forEach((element) => {
    element.insertAdjacentHTML('afterend', `<div class="tooltip">${element.title}</div>`);
    
    const tooltip = element.nextElementSibling;

    element.addEventListener('click', event => {
      event.preventDefault();
      
      if (tooltip.classList.contains('tooltip_active') && element.title === tooltip.textContent) {
            tooltip.classList.remove('tooltip_active')
      } else {
        tooltip.textContent = element.title;
        tooltip.classList.add('tooltip_active')
      }

      let rect = element.getBoundingClientRect();

      tooltip.style.left = `${rect.left}px`;
      tooltip.style.top = `${rect.top + 25}px`
  })
})
