import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../_redux';

const ToolkitTest = () => {
  const { count } = useSelector((state) => state.counter);
  const { toDos } = useSelector((state) => state.toDos);
  const { list, isLoading } = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const history = useHistory();

  const [inputValue, setInputValue] = useState('');

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const onAddToDo = () => {
    dispatch(actions.addToDo({ id: toDos.length, toDo: inputValue }));
    setInputValue('');
  };

  const onDeleteToDo = (id) => {
    dispatch(actions.deleteToDo(id));
  };

  useEffect(() => {
    dispatch(actions.getListRequest());
  }, [dispatch]);

  return (
    <div className='App'>
      <div>
        <button onClick={() => history.push('/test1')}>material ui test</button>
        <button onClick={() => history.push('/test2')}>antd test</button>
        <button onClick={() => history.push('/test3')}>tailwind test</button>
      </div>
      <div>
        <div>{count}</div>
        <div>
          <button onClick={() => dispatch(actions.increment())}>+</button>
          <button onClick={() => dispatch(actions.decrement())}>-</button>
          <button onClick={() => dispatch(actions.incrementByAmount(3))}>+3</button>
        </div>
      </div>
      <div>
        <input type='text' value={inputValue} onChange={onChangeInput} />
        <button onClick={onAddToDo}>Add Todo</button>
      </div>
      <div>
        {toDos.map((toDo) => (
          <div key={toDo.id}>
            <div>{toDo.toDo}</div>
            <button onClick={() => onDeleteToDo(toDo.id)}>Delete Todo</button>
          </div>
        ))}
      </div>
      <div>
        {!isLoading &&
          list.map((item) => (
            <div key={item.id}>
              <div>{/* <img src={item.profileImg} alt={item.userName} /> */}</div>
              <div>{`${item.id}: ${item.userName}`}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ToolkitTest;
