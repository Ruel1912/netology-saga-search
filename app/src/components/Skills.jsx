import { useSelector, useDispatch } from 'react-redux';
import { changeSearchField } from '../actions/actionCreators';

export default function Skills() {
  const { items, loading, error, search } = useSelector(state => state.skills);
  const dispatch = useDispatch();

  const
    handleSearch = evt => {
      const { value } = evt.target;
      dispatch(changeSearchField(value));
    };
  const hasQuery = search.trim() !== '';
  return (
    <>
      <div>
        <input style={{ width: '300px', padding: '0.5rem' }} type="search" value={search} onChange={handleSearch}
          placeholder={!hasQuery ? 'Type something to search...' : ''} />
      </div>
      {/* {!hasQuery && <div>Type something to search</div>} */}
      {hasQuery && loading && <div>searching...</div>}
      {error ? <div>Error occured</div> : <ul>{items.map(
        o => <li key={o.id}>{o.name}</li>
      )}</ul>}
    </>
  )
}
