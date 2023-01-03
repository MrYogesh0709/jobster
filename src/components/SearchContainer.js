import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/SearchContainer";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";
import { clearFilters, handleChange } from "../features/allJobs/allJobSlice";
import { useMemo, useState } from "react";

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState("");
  const { searchStatus, searchType, sort, sortOptions, isLoading } =
    useSelector((store) => store.allJobs);
  const { statusOptions, jobTypeOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch("");
    dispatch(clearFilters());
  };

  const debounce = () => {
    console.log("debounce");
    let timeoutId;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleChange({ name, value }));
      }, 1000);
    };
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const optimizedDebounce = useMemo(() => debounce(), []);

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          {/* search position */}
          <FormRow
            type="text"
            name="search"
            value={localSearch}
            // value={search}
            // handleChange={handleSearch}
            // handleChange={(e) => setLocalSearch(e.target.value)}
            // handleChange={debounce()}
            handleChange={optimizedDebounce}
          />
          {/* search by status */}
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />
          {/* search by type */}
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          />
          {/* sort */}
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
