import React from 'react';
//import ReactDOM from 'react-dom'
import './SortingVisualizer.css';
import {
  mergesort,
  bubblesort,
  insertionSort,
  heapSort,
} from '../SortingAlgorithms/SortingAlgorithms.js';
const primary_color = 'turquoise';
const secondary_color = 'tomato';
export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }
  resetArray() {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(getRandomArbitrary(5, 610));
    }
    this.setState({array});
  }

  mergeSort() {
    const animations = mergesort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arraybars = document.getElementsByClassName('bars');
      const changecolor = i % 3 !== 2;
      if (changecolor) {
        const [bar1, bar2] = animations[i];
        const bar1style = arraybars[bar1].style;
        const bar2style = arraybars[bar2].style;
        const color = i % 3 === 0 ? secondary_color : primary_color;
        setTimeout(() => {
          bar1style.backgroundColor = color;
          bar2style.backgroundColor = color;
        }, i * 10);
      } else {
        const [bar1, newheight] = animations[i];
        setTimeout(() => {
          const bar1styles = arraybars[bar1].style;
          bar1styles.height = `${newheight}px`;
        }, i * 10);
      }
    }
  }

  heapSort() {
    const animations = heapSort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arraybars = document.getElementsByClassName('bars');
      if (i % 2 === 0) {
        const [bar1, bar2] = animations[i];
        const bar1style = arraybars[bar1].style;
        const bar2style = arraybars[bar2].style;
        setTimeout(() => {
          bar1style.backgroundColor = secondary_color;
          bar2style.backgroundColor = secondary_color;
          let t = bar1style.height;
          bar1style.height = bar2style.height;
          bar2style.height = t;
        }, i * 10);
      } else {
        const [bar1, bar2] = animations[i];
        const bar1style = arraybars[bar1].style;
        const bar2style = arraybars[bar2].style;
        setTimeout(() => {
          bar1style.backgroundColor = primary_color;
          bar2style.backgroundColor = primary_color;
        }, i * 10);
      }
    }
  }

  bubbleSort() {
    const animations = bubblesort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arraybars = document.getElementsByClassName('bars');
      const changecolor = i % 3 !== 2;
      if (changecolor) {
        const [bar1, bar2] = animations[i];
        const bar1style = arraybars[bar1].style;
        const bar2style = arraybars[bar2].style;
        const color = i % 3 === 0 ? secondary_color : primary_color;
        setTimeout(() => {
          bar1style.backgroundColor = color;
          bar2style.backgroundColor = color;
        }, i * 20);
      } else {
        const [bar1, newheight1, bar2, newheight2] = animations[i];
        setTimeout(( ) => {
          const bar1styles = arraybars[bar1].style;
          const bar2styles = arraybars[bar2].style;
          bar1styles.height = `${newheight1}px`;
          bar2styles.height = `${newheight2}px`;
        }, i * 20);
      }
    }
  }
  insertionSort() {
    const animations = insertionSort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arraybars = document.getElementsByClassName('bars');
      if (i % 2 === 0) {
        const [bar1, bar2] = animations[i];
        const bar1style = arraybars[bar1].style;
        const bar2style = arraybars[bar2].style;
        setTimeout(() => {
          bar1style.backgroundColor = secondary_color;
          bar2style.backgroundColor = secondary_color;
          let t = bar1style.height;
          bar1style.height = bar2style.height;
          bar2style.height = t;
        }, i * 10);
      } else {
        const [bar1, bar2] = animations[i];
        const bar1style = arraybars[bar1].style;
        const bar2style = arraybars[bar2].style;
        setTimeout(() => {
          bar1style.backgroundColor = primary_color;
          bar2style.backgroundColor = primary_color;
        }, i * 10);
      }
    }
  }
  render() {
    const {array} = this.state;
    return (
      <div className="container">
        {array.map((value, id) => (
          <div
            className="bars"
            key={id}
            style={{
              backgroundColor: primary_color,
              height: `${value}px`,
            }}></div>
        ))}
        <div>
          <button onClick={() => this.resetArray()}>Generate New Array</button>
          <text>{'   '}</text>
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
          <text>{'   '}</text>
          <button onClick={() => this.heapSort()}>Heap Sort</button>
          <text>{'   '}</text>
          <button onClick={() => this.bubbleSort()}>Bubble Sort </button>
          <text>{'   '}</text>
          <button onClick={() => this.insertionSort()}>Insertion Sort </button>
        </div>
      </div>
    );
  }
}
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
