import React from 'react'
import styles from './index.scss'


export default class drag extends React.Component {
    constructor(props) {
        super(props);
    
        this._onTouchStart = this._onTouchStart.bind(this);
        this._onTouchMove = this._onTouchMove.bind(this);
        this._onTouchEnd = this._onTouchEnd.bind(this);
    

        this._start = null;
        this._end = null;
        this.maxDistance = 50;

      }
    
      _onTouchStart(e) {
        const touch = e.touches[0];
        this._start = touch.clientX;
        console.log(this._start)
      }
    
      _onTouchMove(e) {
        const touch = e.changedTouches[0];
        var move = touch.clientX - this._start
        
        var el = e.target;
        el.style.left = Math.min(Math.max(move, 0), 50) + 'px';

      }
    
      _onTouchEnd(e) {
        const touch = e.changedTouches[0];
        this._end = touch.clientX;
        var el = e.target;
        if(this._end - this._start > 30){
            el.style.left = 50 = 'px';
        }
        console.log(this._end)

        // const absX = Math.abs(touch.clientX - this._swipe.x);

      }
    
 

  render() {
    return (
        <div className={styles.element}>
        <div 
        onTouchStart={this._onTouchStart}
        onTouchMove={this._onTouchMove}
        onTouchEnd={this._onTouchEnd}
        
        className={styles.sibling}>
        
        
        </div>
      </div>
    )
  }
}






