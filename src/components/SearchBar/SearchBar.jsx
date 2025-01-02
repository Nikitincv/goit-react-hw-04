import toast from "react-hot-toast";
const SearchBar = ({ onSubmit }) => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.text.value;
    if (value === "") {
      return toast.error("This didn't work.");
    }
    onSubmit(value);
    e.target.reset();
  };
  return (
    <header>
      <form onSubmit={handelSubmit}>
        <input
          name="text"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
