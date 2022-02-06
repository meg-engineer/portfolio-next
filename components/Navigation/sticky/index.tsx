import Link from "next/link";

// Types
interface StickyNavigationProps {
  isDisplay: boolean;
}

const StickyNavigation: React.FC<StickyNavigationProps> = (props) => {
  const { isDisplay } = props;

  return (
    <nav
      className={`${isDisplay ? "block sticky top-0 z-50 bg-white" : "hidden"}`}
    >
      <ul className="flex justify-center items-center py-8">
        <li className="hidden md:block md:mr-12">
          <Link href="/">
            <a className="text-stone-500 hover:text-pink-300">HOME</a>
          </Link>
        </li>
        <li className="mr-4 md:mr-12">
          <a className="text-stone-500 hover:text-pink-300" href="#profile">
            PROFILE
          </a>
        </li>
        <li className="mr-4 md:mr-12">
          <a className="text-stone-500 hover:text-pink-300" href="#portfolio">
            PORTFOLIO
          </a>
        </li>
        <li className="mr-4 md:mr-12">
          <a className="text-stone-500 hover:text-pink-300" href="#skill">
            SKILL
          </a>
        </li>
        <li className="mr-4 md:mr-12">
          <a className="text-stone-500 hover:text-pink-300" href="#contact">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default StickyNavigation;
