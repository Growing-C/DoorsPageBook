
// DVA 的 model 对象有几个基本的属性 

// namespace：model 的命名空间，只能用字符串。一个大型应用可能包含多个 model，通过namespace区分。
// state：当前 model 状态的初始值，表示当前状态。
// reducers：用于处理同步操作，可以修改 state，由 action 触发。reducer 是一个纯函数，它接受当前的 state 及一个数据体（payload）作为入参，返回一个新的 state。
// effects：用于处理异步操作（例如：与服务端交互）和业务逻辑，也是由 action 触发。但是，它不可以修改 state，要通过触发 action 调用 reducer 实现对 state 的间接操作。
// action：是 reducers 及 effects 的触发器，一般是一个对象，形如{ type: 'add', payload: todo }，通过 type 属性可以匹配到具体某个 reducer 或者 effect，payload 属性则是数据体，用于传送给 reducer 或 effect。
 
export default {
    namespace: 'products',
    state: [],
    reducers: {
      delete(state, { payload: id }) {
        return state.filter(item => item.id !== id);
      },
    },
  };