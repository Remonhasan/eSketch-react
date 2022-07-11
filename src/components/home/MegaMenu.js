import React, { Fragment, Component } from 'react'

export default class MegaMenu extends Component {

  constructor() {
    super();
    // Binding the MegaMenu Method 
    this.MegaMenu = this.MegaMenu.bind(this);
  }

  componentDidMount() {
    // When component will mount it will works
    this.MegaMenu();
  }

  MegaMenu() {
    // Get the vbutton by className
    var accBtn = document.getElementsByClassName("accordion");
    // Count the Total accBtn 
    var accBtnNum = accBtn.length;
    // Ensure click event by loop 
    var i;
    for (i = 0; i < accBtnNum; i++) {
      accBtn[i].addEventListener("click", function () {
        this.classList.toggle("active");
        // Get next element after button
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        }else {
          panel.style.maxHeight = panel.scrollHeight + "px"
        }
      })
    }
  }

  render() {
    return (
      <div className='accordionMenuDiv'>
        <div className='accordionMenuDivInside'>
          <button className='accordion'>Men's Clothing</button>
          <div className='panel'>
            <ul>
              <li><a href='#' className='accordionItem'>Man Shirt</a></li>
              <li><a href='#' className='accordionItem'>Man Shirt</a></li>
              <li><a href='#' className='accordionItem'>Man Shirt</a></li>
              <li><a href='#' className='accordionItem'>Man Shirt</a></li>
            </ul>
          </div>
          <button className='accordion'>Women's Clothing</button>
          <div className='panel'>
            <ul>
              <li><a href='#' className='accordionItem'>Man Shirt</a></li>
              <li><a href='#' className='accordionItem'>Man Shirt</a></li>
              <li><a href='#' className='accordionItem'>Man Shirt</a></li>
              <li><a href='#' className='accordionItem'>Man Shirt</a></li>
            </ul>
          </div>
          <button className='accordion'>Baby's Clothing</button>
          <div className='panel'>
            <ul>
              <li><a href='#' className='accordionItem'>Man Shirt</a></li>
              <li><a href='#' className='accordionItem'>Man Shirt</a></li>
              <li><a href='#' className='accordionItem'>Man Shirt</a></li>
              <li><a href='#' className='accordionItem'>Man Shirt</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
