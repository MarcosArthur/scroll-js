class ScrollJs {

  constructor(elements) {
    this._elements = document.querySelectorAll(elements);
    this.addClassElements();
    this.addStyleDOM();
  }

  get elements() {
    return this._elements;
  }

  addClassElements() {
    this._elements.forEach(e => e.classList.add('scroll'));
  }

  addStyleDOM() {
    let style = document.createElement('style');
    let styleText = `

      body {
        overflow-x:hidden;
      }

      .left {
        transform: translateX(-30vh);
        opacity: 0;
        transition: all .2s;
      }

      .right {
        transform: translateX(30vh);
        opacity: 0;
        transition: all .2s;
        float: right;
      }

      .left.active,
      .right.active {
        transform: translateX(0);
        opacity: 1;
      }

    `;

    style.textContent = styleText;
    document.head.appendChild(style);
  }

  scrollEvent() {
    window.addEventListener('scroll', () => {
      this.elements.forEach(e => {
        let elementTop = e.offsetTop;
        let windowsScroll = window.pageYOffset + 250;

        if (windowsScroll > elementTop) {
          e.classList.add('active')
        }

      })
    })

  }

}
