import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as counterActions from "./store/modules/counter";
import * as postActions from "./store/modules/post";

class App extends Component {
  componentDidMount() {
    const { PostActions, number } = this.props;
    PostActions.getPost(number);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.number !== this.props.number) {
      this.props.PostActions.getPost(this.props.number);
    }
  }

  render() {
    const { CounterActions, number, post, error, loading } = this.props;
    return (
      <div>
        현재 카운트: {number}
        <button onClick={() => CounterActions.incrementAsync()}>증가</button>
        <button onClick={() => CounterActions.decrementAsync()}>감소</button>
        {loading && <h2>로딩중...</h2>}
        {error ? (
          <h1>에러발생!</h1>
        ) : (
          <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    number: state.counter,
    post: state.post.data,
    error: state.post.error,
    loading: state.post.loading
  }),
  dispatch => ({
    CounterActions: bindActionCreators(counterActions, dispatch),
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(App);
