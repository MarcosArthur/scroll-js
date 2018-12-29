class ScrollJs {

  constructor(elements) {
    this._elements = document.querySelectorAll(elements);
    this.addStyleDOM();
    this.scrollEvent();
  }

  get elements() {
    return this._elements;
  }

  addStyleDOM() {
    let style = document.createElement('style');
    let styleText = `

      body {
        overflow-x:hidden;
      }

      .left {
        transform: translateX(-60px);
        opacity: 0;
        transition: .3s;
      }

      .right {
        transform: translateX(60px);
        opacity: 0;
        transition: .3s;
        float: right;
      }

      .left.active,
      .right.active {
        transform: translateX(0vh);
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
        let windowsScroll = window.pageYOffset + (window.innerHeight / 2);

        if (windowsScroll > elementTop) {
          e.classList.add('active')
        }
          
      })
    })

  }

}
