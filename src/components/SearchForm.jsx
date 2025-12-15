import PropTypes from 'prop-types'

function SearchForm({ value, onChange, onSubmit, loading }) {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Введите название фильма..."
        value={value}
        onChange={onChange}
      />
      <button className="button" type="submit" disabled={loading}>
        Найти
      </button>
    </form>
  )
}

SearchForm.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

export default SearchForm

