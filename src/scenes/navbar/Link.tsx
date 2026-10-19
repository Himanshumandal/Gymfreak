// Link.tsx
import type { SelectedPage } from "../../shared/types";


type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const id = page.toLowerCase().replace(/\s+/g, "")as SelectedPage;

  return (
    <a
      href={`#${id}`}
      className={`transition duration-500 hover:text-primary-300 ${
        selectedPage === id ? "text-primary-500" : ""
      }`}
      onClick={() => setSelectedPage(id)}
    >
      {page}
    </a>
  );
};