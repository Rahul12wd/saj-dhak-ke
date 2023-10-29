import React from 'react';
import "./Categories.css"
import Dupatta from "../../assets/dupatta.png";

function Categories() {
  return (
    <div className='categories-menu'>
        <h3 className='heading-line'>Shop By <span>Categories</span></h3>
        <div className='categories-list'>
            <div>
                <img className='category-img' src={Dupatta} alt="" />
                <p className='itemsName'>Dupatta</p>
            </div>

            <div>
                <img className='category-img'  src={Dupatta} alt="" />
                <p className='itemsName'>Dupatta</p>
            </div>

            <div>
                <img className='category-img'  src={Dupatta} alt="" />
                <p className='itemsName'>Dupatta</p>
            </div>

            <div>
                <img className='category-img'  src={Dupatta} alt="" />
                <p className='itemsName'>Dupatta</p>
            </div>

            <div>
                <img className='category-img'  src={Dupatta} alt="" />
                <p className='itemsName'>Dupatta</p>
            </div>
        </div>
    </div>
  )
}

export default Categories;
