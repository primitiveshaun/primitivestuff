import { styled } from "frontity";
// Component that provides scroll to top functionality
const BackToTop = () => {
  // scroll to top function
  const scrollToTop = (event) => {
    // prevent the default behaviors
    event.preventDefault();
    // scroll to the top smoothly
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <ToTop href="#site-header" onClick={scrollToTop}>
      <span>The bottom banana</span>
      <span className="arrow p-1" aria-hidden="true">
      🍌
      </span>
      <span>
       ...click to slip ⬆
      </span>
    </ToTop>
  );
};

export default BackToTop;

const ToTop = styled.a`
  font-weight: 800;
  letter-spacing:3px;
  font-size: .8rem;

  .arrow {
    font-size: 3rem;
  }
`;
