import { Children, cloneElement, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './style.css';

const ITEM_WIDTH = 865;

const Carusel = ({ children }) => {
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);

  const hendleLeftArrowClick = () => {
    setOffset((current) => {
      const newOffset = current + ITEM_WIDTH;
      return Math.min(newOffset, 0);
    });
  };

  const hendleRightArrowClick = () => {
    setOffset((current) => {
      const newOffset = current - ITEM_WIDTH;
      const maxOffset = -ITEM_WIDTH * (items.length - 1);
      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setItems(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: `${ITEM_WIDTH}px`,
            maxWidth: `${ITEM_WIDTH}px`,
          },
        });
      })
    );
  }, [children]);

  return (
    <div className="main-container">
      <FaChevronLeft className="arrow" onClick={hendleLeftArrowClick} />
      <div className="window">
        <div
          className="all-items-container"
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {items}
        </div>
      </div>
      <FaChevronRight className="arrow" onClick={hendleRightArrowClick} />
    </div>
  );
};

export default Carusel;
