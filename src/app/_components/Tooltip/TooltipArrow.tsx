import { TooltipDirection } from './Tooltip';

interface TooltipArrowProps {
  direction: TooltipDirection;
}

const TooltipArrow = ({ direction }: TooltipArrowProps) => {
  return (
    <div
      className={`absolute left-1/2 h-0 w-0 border border-solid bg-transparent content-none ${directionStyles(direction)}`}
    ></div>
  );
};

const directionStyles = (direction: TooltipDirection) => {
  switch (direction) {
    case 'top':
      return 'left-1/2 top-full transform -translate-x-1/2 border-t-primary-100 border-t-4 border-transparent border-l-4 border-r-4';
    case 'bottom':
      return 'left-1/2 bottom-full transform -translate-x-1/2 border-b-primary-100 border-b-4 border-transparent border-l-4 border-r-4';
    case 'left':
      return 'top-1/2 left-full transform -translate-y-1/2 border-l-primary-100 border-l-4 border-transparent border-t-4 border-b-4';
    case 'right':
      return 'top-1/2 right-full transform -translate-y-1/2 border-r-primary-100 border-r-4 border-transparent border-t-4 border-b-4';
    default:
      return '';
  }
};
export default TooltipArrow;
