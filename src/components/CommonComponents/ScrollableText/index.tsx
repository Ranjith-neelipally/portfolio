import { ScrollableTextStyles } from "./styles";

interface ScrollabletextProps {
  text?: string;
  direction?: string;
  repetitions?: number;
  className?: string;
}

function ScrollableText({
  text = "hello World",
  direction = "LeftToRight",
  repetitions = 3,
  className,
}: ScrollabletextProps) {
  return (
    <ScrollableTextStyles className={className}>
      <div className={`${direction} gap-5`}>
        {Array.from({ length: repetitions }, (_, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </ScrollableTextStyles>
  );
}

export default ScrollableText;
