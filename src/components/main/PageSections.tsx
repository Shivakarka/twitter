interface PageSectionsProps {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const PageSections = ({ page, setPage }: PageSectionsProps) => {
  return (
    <div className="pageTitleBottom">
      <div className="pageSection" onClick={() => setPage("forYou")}>
        <p>For You</p>
        <div
          className={`blueBottom ${page === "forYou" && "showBottom"}`}
        ></div>
      </div>
      <div className="pageSection" onClick={() => setPage("following")}>
        <p>Following</p>
        <div
          className={`blueBottom ${page !== "forYou" && "showBottom"}`}
        ></div>
      </div>
    </div>
  );
};

export default PageSections;
