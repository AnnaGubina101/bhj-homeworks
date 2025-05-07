let hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltip.forEach((element) => {
    element.insertAdjacentHTML('afterend', `<div class="tooltip" style="left: 0; top: 0">${element.title}</div>`);

    let tooltips = element.querySelectorAll('.tooltip');

    element.addEventListener('click', event => {
      event.preventDefault();

      const child = element.nextElementSibling;
      function addAndRemove() {
            for (let i = 0; i < tooltips.length; i++) {
                let tooltip = tooltips[i];

                if (tooltip.classList.contains('tooltip_active')) {
                    tooltip.classList.remove('tooltip_active')
                } 
            }
         }

      if (child.classList.contains('tooltip_active')) {
            addAndRemove()
      } else {
            addAndRemove()
            child.classList.add('tooltip_active')
      }
  })
})
